import { useMemo, useState } from 'react'
import { useIsomorphicLayoutEffect } from '/use-isomorphic-layout-effect'
import { useForceRender } from '/use-force-render'

/**
 * React hook for using media query conveniently
 * @param query string | string[]
 * @returns [matches, mediaQuery]: [boolean, MediaQueryList] | [boolean[], MediaQueryList[]]
 */
export function useMediaQuery(query: string): [boolean, MediaQueryList]
export function useMediaQuery(query: string[]): [boolean[], MediaQueryList[]]
export function useMediaQuery(
  query: string | string[]
): [boolean, MediaQueryList | undefined] | [boolean[], MediaQueryList[] | undefined] {
  if (typeof window === 'undefined') return [false, undefined]

  const [mq] = useState<MediaQueryList | MediaQueryList[] | undefined>(() =>
    Array.isArray(query) ? query.map(q => window?.matchMedia(q)) : window?.matchMedia(query)
  )
  const rerender = useForceRender()
  useIsomorphicLayoutEffect(() => {
    if (!mq) return
    if (Array.isArray(mq) && mq.every(q => typeof q === 'undefined')) return

    const listener = (e: MediaQueryListEvent) => rerender()

    if (Array.isArray(mq)) {
      const listeners = mq.map(mq => {
        const listener = () => rerender()
        mq.addEventListener('change', listener)
        return { mq, listener }
      })

      return () => {
        listeners.forEach(({ mq, listener }) => mq.removeEventListener('change', listener))
      }
    } else {
      mq.addEventListener('change', listener)

      return () => mq.removeEventListener('change', listener)
    }
  }, [mq])

  return Array.isArray(mq)
    ? useMemo(() => [mq.map(q => q.matches ?? false), mq], [mq.map(q => q.matches).join(','), mq])
    : useMemo(() => [mq?.matches ?? false, mq], [mq?.matches, mq])
}
