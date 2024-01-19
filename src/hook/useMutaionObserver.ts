import React from "react"

// What hook use for?
// 1. useMutationObserver is a hook that use for observe the change of DOM

type TOptions = {
  atributes: boolean
  characterData: boolean
  childList: boolean
  subtree: boolean
}

/**
 * useMutationObserver is a hook that use for observe the change of DOM
 * @param {React.MutableRefObject<HTMLElement | null>} ref - React ref
 * @param {MutationCallback} callback - MutationObserver callback
 * @param {MutationObserverInit} options - MutationObserver options
 */
const useMutationObserver = <
  TRef extends React.MutableRefObject<HTMLElement | null>,
  TCallback extends MutationCallback,
>(
  ref: TRef,
  callback: TCallback,
  options: TOptions = {
    atributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  },
) => {
  React.useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback)
      observer.observe(ref.current, options)
      return () => observer.disconnect()
    }
  }, [ref, callback, options])
}

export default useMutationObserver
