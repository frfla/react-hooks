import { useCallback, useReducer, useState } from 'react'

/**
 * A React hook for forcibly rendering a component
 *
 * @Link https://github.com/frfla/react-hooks/blob/main/src/use-force-render/README.md
 * @example
 *  function Tooltip({ message }) {
 *   const display = useRef(false);
 *   const forceRender = useForceRender();
 *
 *   const toggle = useCallback(() => {
 *     if (display.current) display.current = false;
 *     else display.current = true;
 *     forceRender();
 *   }, []);
 *
 *   return (
 *     <>
 *       <button onClick={() => toggle()}>
 *         btn
 *       </button>
 *       <div className={display.current ? 'show' : 'hide'}>
 *         {message}
 *       </div>
 *     </>
 *   );
 * }
 */

export const useForceRender = () => {
  const [, forceRender] = useReducer(x => x + 1, 0)
  return forceRender
}
