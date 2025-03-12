# @frfla/react-hooks

React Custom Hook Package for Practice

### `useModal`

- A React hook for using Modal easily
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-modal/README.md)

### `useForceRender`

- A React hook for forcibly rendering a component
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-force-render/README.md)

### `useForm (beta)`

- A React hook for using form easily
- During the **beta** period, the API may unexpectedly change or new features may be added
- supports textarea and inputs (text, number, checkbox)
- provides APIs, `createUseFormContext` and `useFormContext` for integrating with Context API
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-form/README.md)

### `useBooleanState`

- A useState hook for using boolean state conveniently
- example `const [display, show, hide, toggle] = useBooleanState(initialState)`
- If `initialState` is not provided as an argument, the default state value is set to **false**.
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-boolean-state/README.md)

### `useTextCopy`

- A React hook for copying plain text to clipboard
- other types will be provided later
- example: `const [ copy, isCopied, restoreState ] = useTextCopy(duration, onError)`
- **works only in localhost or https**
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-clipboard/README.md)

### `useDebouncedEffect/useDebouncedState`

- A React hook for debounced effect/state
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-debounced/README.md)

### `useConditionalRender`

- A React hook for using conditional render easily
- useful in triggering animation with (un)mounting component
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-conditional-render/README.md)

### `useIsomorphicLayoutEffect`

- In an SSR environment, useEffect should be used, while on the client side, useLayoutEffect should be utilized.
- helps prevent hydration errors
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-isomorphic-layout-effect/README.md)

### `Number Hooks`

- React hooks for using numbers easily
- [DOCS](https://github.com/frfla/react-hooks/blob/main/react/src/use-numbers/README.md)
