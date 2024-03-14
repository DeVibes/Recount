import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../../router'
import { LogoutButton } from '../../login'

export const DesktopHeader = () => {
  const getStyleFromNavStatus = ({ isActive }) => {
    const activeClasses = [
      isActive ? 'text-sky-400 underline decoration-4 underline-offset-8' : '',
    ].join(" ")
    const allClasses = ""
    return `${allClasses} ${activeClasses}`
  }

  return (
    <header className="flex items-center border-b-4 border-b-cyan-700 px-4">
      <div className="w-1/4 px-5 py-3">Logo</div>
      <nav className="w-1/2 ">
        <ul className="flex gap-3">
          <NavLink
            to={Pages.DASHBOARD.path}
            className={getStyleFromNavStatus} // isActive comes from NavLink
          >
            <li>{Pages.DASHBOARD.name}</li>
          </NavLink>
          <NavLink to={Pages.INVEST.path} className={getStyleFromNavStatus}>
            <li>{Pages.INVEST.name}</li>
          </NavLink>
          <NavLink to={Pages.MYACCOUNT.path} className={getStyleFromNavStatus}>
            <li>{Pages.MYACCOUNT.name}</li>
          </NavLink>
        </ul>
      </nav>
      <div className="w-1/4 flex flex-row-reverse">
        <LogoutButton/>
      </div>
    </header>
  )
}
