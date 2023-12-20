import { useState } from "react"

const useHeader = () => {
  const [isMobile, setIsMobile] = useState(false)
  return {
     isMobile, setIsMobile
  }
}

export default useHeader