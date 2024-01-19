import React from "react"

/**
 * A custom hook that convert a callback to a ref to avoid triggering re-rendering when passed as a
 * props or avoid re-executing the callback when passed as a dependency.
 * @param callback The callback to convert to a ref.
 * @returns The callback as a ref.
 */

const useCallbackRef = <T extends (...args: any[]) => any>(callback: T | undefined) => {
  const callbackRef = React.useRef(callback)
  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  //https://github.com/facebook/react/issues/19240
  return React.useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, [])
}
export default useCallbackRef
