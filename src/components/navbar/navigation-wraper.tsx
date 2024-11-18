'use client'

import { useState, useEffect } from 'react'
import { NavbarDemo } from "./navbar"
import  AnimatedMobileNav  from "./animated-mobile-nav"

export default function NavigationWrapper() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize)
    
    // Call handler right away so state gets updated with initial window size
    handleResize()
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile ? <AnimatedMobileNav /> : <NavbarDemo />
}