# useRefEffect

- A hook stores data in `ref.current` and doesn't trigger re-rendering of component

## Quick Start

```
function MyComponent({ userId }) {
  const latestUserId = useRefEffect(userId)

  useEffect(() => {
    socket.on('data', () => {
      console.log('Latest user:', latestUserId.current)
    })
  }, [])
}
```

## Params

- data: value (not `Ref`)
- deps: dependency list
