import { renderHook, waitFor } from '@testing-library/react'
import { useRefEffect } from '.'

describe('useRefEffect', () => {
  it('should initialize ref.current with initial data', () => {
    const { result } = renderHook(() => useRefEffect(123))
    expect(result.current.current).toBe(123)
  })

  it('should update ref.current when data changes', async () => {
    let data = 123
    const { result, rerender } = renderHook(() => useRefEffect(data))

    expect(result.current.current).toBe(123)
    data = 456
    rerender()

    await waitFor(() => {
      expect(result.current.current).toBe(456)
    })
  })

  it('should update ref.current when deps change', async () => {
    let data = { v: 1 }
    let dep = 0

    const { result, rerender } = renderHook(() => useRefEffect(data, [dep]))

    expect(result.current.current).toEqual({ v: 1 })
    dep = 1
    rerender()

    await waitFor(() => {
      expect(result.current.current).toEqual({ v: 1 })
    })
  })

  it('should preserve ref identity', () => {
    const { result, rerender } = renderHook(() => useRefEffect(1))
    const initialRef = result.current

    rerender()

    expect(result.current).toBe(initialRef)
  })
})
