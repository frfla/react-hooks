# useDebounced

- React Hook for debounced effect / state / fn

## Quick Start

```
useDebouncedEffect(() => {
  //do something
}, delay);

const [debouncedValue, setValue, value] = useDebouncedState<T>(initialValue);

const debouncedFn = useDebouncedFn(targetFn, delay, deps)
```
