import React from "react"
import { useCallbackRef } from "."

const useEscapeKeydown = (
  onEscapeKeydownProps?: (event: KeyboardEvent) => void,
  ownerDocument: Document = globalThis?.document,
) => {
  const onEscapeKeydown = useCallbackRef(onEscapeKeydownProps)
  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscapeKeydown(event)
      }
    }

    ownerDocument.addEventListener("keydown", handleKeydown)
    return () => ownerDocument.removeEventListener("keydown", handleKeydown)
  }, [onEscapeKeydown, ownerDocument])
}

export default useEscapeKeydown
