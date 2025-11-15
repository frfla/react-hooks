import { useCallback, useEffect, useRef, type DependencyList } from 'react'
import { debounce } from './_debounce'

/** returns `fn` with `delay`ms debouncing
 * @param fn: fn
 * @param delay: ms
 */
export const func = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
  deps: DependencyList = []
) => {
  // fn의 참조가 바뀌면 ref + effect로 발생시켜 참조를 업데이트시킴
  // state로 쓰지 않음으로써 리렌더를 트리거하지 않고 최신 콜백의 참조를 유지하기 위함
  const callbackRef = useRef<T>(fn)
  useEffect(() => {
    callbackRef.current = fn
  }, [fn])

  return useCallback(
    debounce((...args) => {
      callbackRef.current(...args)
    }, delay),
    // 의존성에 fn과 관련된 무언가가 들어가면
    // 디바운스 함수가 새로 생성되면서 타이머가 깨지게 됨
    [delay, ...deps]
  )
}
