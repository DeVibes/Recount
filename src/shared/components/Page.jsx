import React from 'react'

export const AppPage = ({ children, backgroundImageString }) => {
  const hasBackground = backgroundImageString !== undefined
  const divStyle = {
    backgroundImage: hasBackground ? `url(${backgroundImageString})` : '',
  }
  return (
    <div className="h-full" style={divStyle}>
      {children}
    </div>
  )
}
