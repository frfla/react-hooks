import { type DependencyList, type MutableRefObject, useEffect, useRef } from 'react'

export function useRefEffect<T>(data: T, deps: DependencyList = []): MutableRefObject<T> {
  const ref = useRef<T>(data)

  useEffect(() => {
    ref.current = data
  }, [data, ...deps])

  return ref
}
