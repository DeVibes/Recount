import React from 'react'
import { useScreenResize } from '../'
import { MobileLayout } from '../'
import { DesktopLayout } from '../'

export const Layout = ({ children }) => {
  const isMoblie = useScreenResize()
  if (isMoblie) {
    return <MobileLayout>{children}</MobileLayout>
  }
  return <DesktopLayout>{children}</DesktopLayout>
}


