# useMediaQuery

- Can use media query with react easily
- Queries can be string or array

## Quick Start

```js
const [matches, mediaQuery] = useMediaQuery('(min-width: 500px) and (orientation: landscape)')

const [matchList, mediaQueryList] = useMediaQuery([
  '(min-width: 500px)',
  '(orientation: landscape)'
])
```

```jsx
function MainPage() {
  const [matchList, mediaQueryList] = useMediaQuery([
    '(min-width: 500px)',
    '(orientation: landscape)'
  ])

  const matchAll = matchList.every(m => m)

  return <>{matchAll ? <Wide /> : <Narrow />}</>
}
```

## API
