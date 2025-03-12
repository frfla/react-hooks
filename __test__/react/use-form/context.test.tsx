import { createContext } from 'react'
import { render, renderHook, act, screen, fireEvent, waitFor } from '@testing-library/react'
import { useForm } from '@/react/src/use-form'
import { ReactNode } from 'react'
import { createUseFormContext, useFormContext } from '@/react/src/use-form/context'

import nock from 'nock'
import axios from 'axios'

interface Props {
  children: ReactNode
}

interface User {
  name: string
  email: string
}

const user: User = {
  name: 'abcd',
  email: 'abcd@abcd.com'
}

describe('Hook Initialization', () => {
  it('should correctly set initial values ', () => {
    const onSubmit = jest.fn()
    const { result: data } = renderHook(() =>
      useForm({
        initialValues: user,
        onSubmit
      })
    )
    const FormContext = createUseFormContext<User>()
    function wrapper({ children }: Props) {
      return <FormContext.Provider value={data.current}>{children}</FormContext.Provider>
    }

    const { result } = renderHook(() => useFormContext(FormContext), { wrapper })

    expect(result.current?.values).toEqual(user)
  })

  it('should correctly set initial useForm return values with Context<null>', () => {
    const onSubmit = jest.fn()
    const { result: data } = renderHook(() =>
      useForm({
        initialValues: user,
        onSubmit
      })
    )
    const FormContext = createUseFormContext<User>()
    function wrapper({ children }: Props) {
      return <FormContext.Provider value={data.current}>{children}</FormContext.Provider>
    }

    const ctx = createContext(null)
    const { result } = renderHook(() => useFormContext(ctx), { wrapper })
    const { result: useFormResult } = renderHook(() =>
      useForm({ initialValues: {}, onSubmit: () => {} })
    )

    expect(result.current?.values).toEqual(useFormResult.current.values)
  })

  it('should correctly update values with setValues', () => {
    const onSubmit = jest.fn()
    const { result: data } = renderHook(() =>
      useForm({
        initialValues: user,
        onSubmit
      })
    )
    const FormContext = createUseFormContext<User>()
    function wrapper({ children }: Props) {
      return <FormContext.Provider value={data.current}>{children}</FormContext.Provider>
    }
    const { result } = renderHook(() => useFormContext(FormContext), { wrapper })

    expect(result.current?.values).toEqual(user)
    act(
      () =>
        result.current?.setValues &&
        result.current?.setValues({ name: 'b', email: 'zxcv@zxcv.com' })
    )
    waitFor(() => {
      expect(result.current?.values).not.toEqual(user)
      expect(result.current?.values).toEqual({ name: 'b', email: 'zxcv@zxcv.com' })
    })
  })
})

describe('Component Bindings', () => {
  it('should correctly track changes to input values', () => {
    const coffee = {
      name: 'name',
      email: 'abcd@email.com',
      coffee: true
    }
    const onSubmit = jest.fn()

    const { result: data } = renderHook(() =>
      useForm<typeof coffee>({
        initialValues: coffee,
        onSubmit
      })
    )
    const FormContext = createUseFormContext<typeof coffee>()
    function wrapper({ children }: Props) {
      return <FormContext.Provider value={data.current}>{children}</FormContext.Provider>
    }
    const { result } = renderHook(() => useFormContext<typeof coffee>(FormContext), { wrapper })

    render(
      <form onSubmit={result.current?.submit}>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={result.current?.values?.name}
          onChange={result.current?.handleChange}
        />
        <textarea
          placeholder="email"
          name="email"
          value={result.current?.values?.email}
          onChange={result.current?.handleChange}
        />
        <input
          placeholder="coffee"
          type="checkbox"
          name="coffee"
          checked={result.current?.values?.coffee}
          onChange={result.current?.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )

    const nameInput = screen.getByPlaceholderText('name')
    const emailInput = screen.getByPlaceholderText('email')

    expect(result.current?.values?.name).toBe('name')
    expect(result.current?.values?.email).toBe('abcd@email.com')

    fireEvent.change(nameInput, { target: { value: 'hello' } })
    waitFor(() => {
      expect(result.current?.values?.name).toBe('hello')
    })

    fireEvent.change(emailInput, { target: { value: 'changed@changed.com' } })
    waitFor(() => {
      expect(result.current?.values?.email).toBe('changed@changed.com')
    })
  })

  it('should correctly track values of uncontrolled inputs', () => {
    const initialValues = {
      nickname: 'latte'
    }
    const refInputNames: (keyof typeof initialValues)[] = ['nickname']
    const onSubmit = jest.fn()

    const { result: data } = renderHook(() =>
      useForm<typeof initialValues>({
        initialValues,
        onSubmit,
        refInputNames
      })
    )
    const FormContext = createUseFormContext<typeof initialValues>()
    function wrapper({ children }: Props) {
      return <FormContext.Provider value={data.current}>{children}</FormContext.Provider>
    }
    const { result } = renderHook(() => useFormContext<typeof initialValues>(FormContext), {
      wrapper
    })

    render(
      <form onSubmit={result.current?.submit}>
        <input
          placeholder="nickname"
          type="text"
          name="nickname"
          ref={result.current?.refs?.nickname}
          value={result.current?.refs?.nickname.current?.value}
          onChange={result.current?.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )

    const refInput = screen.getByPlaceholderText('nickname')

    expect(result.current?.values?.nickname).toBe('latte')

    fireEvent.change(refInput, { target: { value: 'brewcoldblue' } })

    waitFor(() => {
      expect(result.current?.values?.nickname).toBe('brewcoldblue')
    })
  })

  it("refValues API should correctly track uncontrolled inputs' values", () => {
    const initialValues = {
      nickname: 'latte'
    }
    const refInputNames: (keyof typeof initialValues)[] = ['nickname']
    const onSubmit = jest.fn()

    const { result: data } = renderHook(() =>
      useForm<typeof initialValues>({
        initialValues,
        onSubmit,
        refInputNames
      })
    )
    const FormContext = createUseFormContext<typeof initialValues>()
    function wrapper({ children }: Props) {
      return <FormContext.Provider value={data.current}>{children}</FormContext.Provider>
    }
    const { result } = renderHook(() => useFormContext<typeof initialValues>(FormContext), {
      wrapper
    })

    render(
      <form onSubmit={result.current.submit}>
        <input
          placeholder="nickname"
          type="text"
          name="nickname"
          ref={result.current.refs?.nickname}
          value={result.current.refs?.nickname.current?.value}
          onChange={result.current.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )

    const refInput = screen.getByPlaceholderText('nickname')

    waitFor(() => {
      expect(result.current.refValues.nickname).toBe('latte')
    })

    fireEvent.change(refInput, { target: { value: 'brewcoldblue' } })

    waitFor(() => {
      expect(result.current.refValues.nickname).toBe('brewcoldblue')
    })
  })
})

describe('Form Submission', () => {
  it('should handle form submission, validation, loading state, and server response correctly', async () => {
    const initialValues = {
      email: 'abcd',
      password: 'asdqwe'
    }

    nock('http://useformtest.com')
      .post('/login', { email: 'abcd@email.com', password: 'asdqwe123' })
      .reply(200, { message: 'success!' })

    const onSubmit = (body: typeof initialValues) =>
      axios.post('http://useformtest.com/login', body)

    // const onSubmit = jest.fn().mockResolvedValue({ message: 'success!' })

    const validator = (data: typeof initialValues) => {
      const isValidMail = (str: string) => {
        if (str.includes('@')) return true
        else return false
      }
      const isValidPw = (str: string) => {
        if (str.length > 8) return true
        else return false
      }
      if (isValidMail(data.email) && isValidPw(data.password)) return true
      else return false
    }

    const { result: data } = renderHook(() =>
      useForm<typeof initialValues>({
        initialValues,
        onSubmit,
        validator
      })
    )
    const FormContext = createUseFormContext<typeof initialValues>()
    function wrapper({ children }: Props) {
      return <FormContext.Provider value={data.current}>{children}</FormContext.Provider>
    }
    const { result } = renderHook(() => useFormContext<typeof initialValues>(FormContext), {
      wrapper
    })

    render(
      <form data-testid="testform" onSubmit={result.current?.submit}>
        <input
          placeholder="email"
          type="text"
          name="email"
          value={result.current?.values?.email}
          onChange={result.current?.handleChange}
        />
        <input
          placeholder="password"
          type="text"
          name="password"
          value={result.current?.values?.password}
          onChange={result.current?.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )

    const emailInput = screen.getByPlaceholderText('email')
    const passwordInput = screen.getByPlaceholderText('password')

    const testform = screen.getByTestId('testform')

    renderHook(() => fireEvent.submit(testform))

    waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled()
      expect(result.current.isLoading).toBe(false)
      expect(result.current.response).toBe(null)
    })

    fireEvent.change(emailInput, { target: { value: 'abcd@email.com' } })
    fireEvent.change(passwordInput, { target: { value: 'asdqwe123' } })

    renderHook(() => fireEvent.submit(testform))

    waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
      expect(result.current?.isLoading).toBe(false)
      expect(result.current?.response).not.toBe(null)
    })

    nock.cleanAll()
  })
})
