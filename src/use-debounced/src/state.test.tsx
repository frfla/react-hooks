import { state } from './state'
import { act, renderHook } from '@testing-library/react'

describe('useDebouncedState', () => {
  jest.useFakeTimers()

  it('should update state after the specified delay', () => {
    const initialValue = ''
    const { result } = renderHook(() => state(initialValue, 1000))
    const [debouncedValue, setValue] = result.current
    act(() => {
      setValue('test')
    })
    expect(debouncedValue).toBe(initialValue)

    act(() => {
      jest.runAllTimers()
    })

    expect(result.current[0]).toBe('test')
  })
})
