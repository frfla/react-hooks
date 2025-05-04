# @frfla/react-hooks

React Utility Custom Hook Package

### `useBooleanState`

- A useState hook for using boolean state conveniently
- example `const [display, show, hide, toggle] = useBooleanState(initialState)`
- If `initialState` is not provided as an argument, the default state value is set to **false**.
- [DOCS](https://frfla.github.io/react-hooks/use-boolean-state)

### `useConditionalRender`

- A React hook for using conditional render easily
- useful in triggering animation with (un)mounting component
- [DOCS](https://frfla.github.io/react-hooks/use-conditional-render)

### `useDebouncedEffect/useDebouncedState`

- A React hook for debounced effect/state
- [DOCS](https://frfla.github.io/react-hooks/use-debounced)

### `useForceRender`

- A React hook for forcibly rendering a component
- [DOCS](https://frfla.github.io/react-hooks/use-force-render)

### `useIsomorphicLayoutEffect`

- In an SSR environment, useEffect should be used, while on the client side, useLayoutEffect should be utilized.
- helps prevent hydration errors
- [DOCS](https://frfla.github.io/react-hooks/use-isomorphic-layout-effect)

### `useModal`

- A React hook for using Modal easily
- [DOCS](https://frfla.github.io/react-hooks/use-modal)

### `Number Hooks`

- React hooks for using numbers easily
- [DOCS](https://frfla.github.io/react-hooks/use-numbers)

### `useTextCopy`

- A React hook for copying plain text to clipboard
- other types will be provided later
- example: `const [ copy, isCopied, restoreState ] = useTextCopy(duration, onError)`
- **works only in localhost or https**
- [DOCS](https://frfla.github.io/react-hooks/use-clipboard)

### `useForm (beta)`

- A React hook for using form easily
- During the **beta** period, the API may unexpectedly change or new features may be added
- supports textarea and inputs (text, number, checkbox)
- provides APIs, `createUseFormContext` and `useFormContext` for integrating with Context API
- [DOCS](https://frfla.github.io/react-hooks/use-form)
