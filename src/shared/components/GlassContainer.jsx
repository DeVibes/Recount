import React from 'react'

export const GlassContainer = ({ children, classes }) => {
  return (
    <>
      <div className={`${classes} glass-effect`} />
      <div className={`${classes}`}>{children}</div>
    </>
  )
}
