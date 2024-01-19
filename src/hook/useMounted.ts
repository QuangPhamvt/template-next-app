import { useEffect, useState } from "react"

/**
 * @returns {boolean} - Whether the component is mounted
 */

const useMounted = (): boolean => {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}

export default useMounted
