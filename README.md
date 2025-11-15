# @frfla/react-hooks

**React Utility Custom Hook Package**

```
npm install @frfla/react-hooks
yarn add @frfla/react-hooks
pnpm add @frfla/react-hooks
```

### useBooleanState

- A useState hook for using boolean state conveniently
- example `const [display, show, hide, toggle] = useBooleanState(initialState)`
- If `initialState` is not provided as an argument, the default state value is set to **false**.
- [DOCS](https://frfla.github.io/react-hooks/use-boolean-state)

### useConditionalRender

- A React hook for using conditional render easily
- useful in triggering animation with (un)mounting component
- [DOCS](https://frfla.github.io/react-hooks/use-conditional-render)

### useDebouncedEffect / State / Fn

- A React hook for debounced effect/state
- [DOCS](https://frfla.github.io/react-hooks/use-debounced)

### useForceRender

- A React hook for forcibly rendering a component
- [DOCS](https://frfla.github.io/react-hooks/use-force-render)

### useIsomorphicLayoutEffect

- In an SSR environment, useEffect should be used, while on the client side, useLayoutEffect should be utilized.
- helps prevent hydration errors
- [DOCS](https://frfla.github.io/react-hooks/use-isomorphic-layout-effect)

### useMediaQuery

- A React hook for using MediaQuery easily
- [DOCS](https://frfla.github.io/react-hooks/use-media-query)

### useModal

- A React hook for using Modal easily
- [DOCS](https://frfla.github.io/react-hooks/use-modal)

### useRefEffect

- A React hook for give effect to Ref values
- [DOCS](https://frfla.github.io/react-hooks/use-ref-effect)

### useTextCopy

- A React hook for copying plain text to clipboard
- other types will be provided later
- **works only in localhost or https**
- [DOCS](https://frfla.github.io/react-hooks/use-clipboard)

### ~~useForm (beta)~~

- deleted v0.251115.0
