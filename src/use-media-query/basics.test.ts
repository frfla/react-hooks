import { renderHook, waitFor } from '@testing-library/react'
import { useMediaQuery } from '.'

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }
    }
  })
})

describe('useMediaQuery', () => {
  it('should return proper values when query is provided', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }))

    const testQuery = '(max-width: 700px)'
    const { result } = renderHook(() => useMediaQuery(testQuery))

    waitFor(() => {
      expect(result.current[0]).toBe(true)
      expect(typeof result.current[1]).not.toBe('undefined')
      expect(result.current[1]?.media).toBe(testQuery)
    })
  })

  it('should return proper values when the query is like Array', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }))

    const testQuery = ['(max-width: 700px)', '(orientation: landscape)']
    const { result } = renderHook(() => useMediaQuery(testQuery))

    waitFor(() => {
      expect(result.current[0].every(v => v === true)).toBe(true)
      expect(typeof result.current[1]).not.toBe('undefined')
      expect(result.current[1].map(ql => ql.media).join('')).toBe(testQuery.join(''))
    })
  })

  it('should return different values when query is changed', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }))

    let testQuery = '(max-width: 700pxpx)'
    const { result, rerender } = renderHook(() => useMediaQuery(testQuery))

    waitFor(() => {
      expect(result.current[0]).toBe(true)
      expect(typeof result.current[1]).not.toBe('undefined')
      expect(result.current[1]?.media).toBe(testQuery)
    })

    testQuery = '(orientation: landscape)'
    rerender()

    waitFor(() => {
      expect(result.current[0]).toBe(true)
      expect(typeof result.current[1]).not.toBe('undefined')
      expect(result.current[1]?.media).toBe(testQuery)
    })
  })

  it('should detect query matching state', async () => {
    let listener = (...args: any[]) => {}
    let testQuery = '(max-width: 700px)'

    const mockMQList = {
      matches: true,
      media: testQuery,
      onchange: null,
      addEventListener: jest.fn((_, cb) => {
        listener = cb
      }),
      removeEventListener: jest.fn()
    }

    window.matchMedia = jest.fn().mockReturnValue(mockMQList)

    const { result } = renderHook(() => useMediaQuery(testQuery))

    await waitFor(() => {
      expect(result.current[0]).toBe(true)
    })

    mockMQList.matches = false // true -> false
    listener({ matches: false })

    await waitFor(() => {
      expect(result.current[0]).toBe(false)
    })
  })
})
