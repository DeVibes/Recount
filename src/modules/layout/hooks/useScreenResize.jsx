import { useEffect, useState } from "react"
import { getConfig } from ".."

export const useScreenResize = () => {
    const { mobileWidth } = getConfig()
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= mobileWidth)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= mobileWidth)
        window.addEventListener(RESIZE_EVENT, handleResize);
        return () => window.removeEventListener(RESIZE_EVENT, handleResize)
    }, [isMobile])

    return isMobile;
} 

const RESIZE_EVENT = 'resize'