import React from 'react'

export const IconButton = ({ handleClick, text, icon, classes }) => {
  return (
    <button
      onClick={handleClick}
      className={`px-4 lg:px-8 py-3 lg:py-3 rounded-lg border border-white flex items-center`}
    >
      {icon}
      <span className="absolute left-1/2 -translate-x-1/2 text-sm lg:text-xl text-white">
        {text}
      </span>
    </button>
  )
}
