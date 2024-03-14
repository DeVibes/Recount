import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../../router'
import { LogoutButton } from '../../login'
import { DashboardIcon, InvestIcon, MyAccountIcon } from '../../../shared/icons'

export const DesktopHeader = () => {
  const getStyleFromNavStatus = ({ isActive }) => {
    const activeClasses = [
      isActive ? 'text-sky-400' : '',
    ].join(' ')
    const allClasses = ''
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
            <li className="flex">
              <DashboardIcon size={25} />
              <span>{Pages.DASHBOARD.name}</span>
            </li>
          </NavLink>
          <NavLink to={Pages.INVEST.path} className={getStyleFromNavStatus}>
            <li className="flex">
              <InvestIcon size={25} />
              <span>{Pages.INVEST.name}</span>
            </li>
          </NavLink>
          <NavLink to={Pages.MYACCOUNT.path} className={getStyleFromNavStatus}>
            <li className="flex">
              <MyAccountIcon size={25}/>
              <span>{Pages.MYACCOUNT.name}</span>
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className="w-1/4 flex flex-row-reverse">
        <LogoutButton />
      </div>
    </header>
  )
}
