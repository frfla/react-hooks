# @frfla/react-hooks

**React 유틸리티 커스텀 훅 패키지**

```
npm install @frfla/react-hooks
yarn add @frfla/react-hooks
pnpm add @frfla/react-hooks
```

## useBooleanState

- 불리언 상태를 간편하게 관리하기 위한 useState 훅
- 예시: `const [display, show, hide, toggle] = useBooleanState(initialState)`
- 인자로 `initialState`가 제공되지 않으면 기본 상태값은 `false`로 설정됨
- [DOCS](https://frfla.github.io/react-hooks/use-boolean-state)

## useConditionalRender

- 조건부 렌더링을 쉽게 다룰 수 있는 리액트 훅
- 컴포넌트의 (언)마운트를 이용한 애니메이션 트리거에 유용
- [DOCS](https://frfla.github.io/react-hooks/use-conditional-render)

## useDebouncedEffect/useDebouncedState/useDebouncedFn

- 디바운스 효과/상태를 위한 리액트 훅
- [DOCS](https://frfla.github.io/react-hooks/use-debounced)

## useForceRender

- 컴포넌트를 강제로 렌더링하기 위한 리액트 훅
- [DOCS](https://frfla.github.io/react-hooks/use-force-render)

## useIsomorphicLayoutEffect

- SSR 환경에서는 `useEffect`를, 클라이언트 사이드에서는 `useLayoutEffect`를 사용해야 할 때 사용할 수 있는 훅
- 하이드레이션 에러를 방지하는 데 도움을 줌
- [DOCS](https://frfla.github.io/react-hooks/use-isomorphic-layout-effect)

## useMediaQuery

- 미디어 쿼리의 일치 여부와 [MediaQueryList를](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) 쉽게 사용할 수 있는 훅
- string, array 형태의 쿼리를 사용 가능
- [DOCS](https://frfla.github.io/react-hooks/use-media-query)

## useModal

- 모달을 쉽게 사용할 수 있는 리액트 훅
- [DOCS](https://frfla.github.io/react-hooks/use-modal)

## useRefEffect

- 특정 값에 Ref + effect를 발생시키고 싶을 때 사용하는 훅
- [DOCS](https://frfla.github.io/react-hooks/use-ref-effect)

## useTextCopy

- 일반 텍스트를 클립보드로 복사하기 위한 리액트 훅
- 향후 다른 타입들도 제공 예정
- **localhost 또는 https 환경에서만 작동**
- [DOCS](https://frfla.github.io/react-hooks/use-clipboard)

---

## ~~useForm (Beta)~~ 0.251115.0에서 삭제

- 폼을 쉽게 다루기 위한 리액트 훅
- 베타 기간 동안 API가 예고 없이 변경되거나 새로운 기능이 추가될 수 있음
- `textarea`와 `input`(type text, number, checkbox)를 지원
- Context API와 통합하기 위한 `createUseFormContext`와 `useFormContext` API 제공
- [DOCS](https://frfla.github.io/react-hooks/use-form)
