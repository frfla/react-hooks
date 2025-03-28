@frfla/react-hooks

리액트 연습용 커스텀 훅 패키지

## useModal

- 모달을 쉽게 사용할 수 있는 리액트 훅
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-modal/README.md)

## useForceRender

- 컴포넌트를 강제로 렌더링하기 위한 리액트 훅
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-force-render/README.md)

## useForm (beta)

- 폼을 쉽게 다루기 위한 리액트 훅
- 베타 기간 동안 API가 예고 없이 변경되거나 새로운 기능이 추가될 수 있음
- textarea와 inputs(text, number, checkbox)를 지원
- Context API와 통합하기 위한 createUseFormContext와 useFormContext API 제공
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-form/README.md)

## useBooleanState

- 불리언 상태를 간편하게 관리하기 위한 useState 훅
- 예시: const [display, show, hide, toggle] = useBooleanState(initialState)
- 인자로 initialState가 제공되지 않으면 기본 상태값은 false로 설정됨
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-boolean-state/README.md)

## useTextCopy

- 일반 텍스트를 클립보드로 복사하기 위한 리액트 훅
- 향후 다른 타입들도 제공 예정
- 예시: const [ copy, isCopied, restoreState ] = useTextCopy(duration, onError)
- localhost 또는 https 환경에서만 작동
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-clipboard/README.md)

## useDebouncedEffect/useDebouncedState

- 디바운스 효과/상태를 위한 리액트 훅
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-debounced/README.md)

## useConditionalRender

- 조건부 렌더링을 쉽게 다룰 수 있는 리액트 훅
- 컴포넌트의 (언)마운트를 이용한 애니메이션 트리거에 유용
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-conditional-render/README.md)

## useIsomorphicLayoutEffect

- SSR 환경에서는 useEffect를, 클라이언트 사이드에서는 useLayoutEffect를 사용해야 함
- 하이드레이션 에러를 방지하는 데 도움을 줌
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-isomorphic-layout-effect/README.md)

## Number Hooks

- 숫자 다루기를 쉽게 하는 리액트 훅
- [DOCS](https://github.com/frfla/react-hooks/blob/main/src/use-numbers/README.md)
