import { useEffect, useState } from "react"

/**
 * @param {string} query - CSS media query
 * @returns {boolean} - Whether the media query matches
 */

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false)
  useEffect(() => {
    function handleMatchChange(e: MediaQueryListEvent) {
      setMatches(e.matches)
    }
    const result = window.matchMedia(query)
    result.addEventListener("change", handleMatchChange)
    return () => result.removeEventListener("change", handleMatchChange)
  }, [query])
  return matches
}
export default useMediaQuery
