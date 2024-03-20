import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../../router'
import { DashboardIcon, InvestIcon, MyAccountIcon } from '../../../shared/icons'
import { getStyleFromNavStatus } from '../'

export const DesktopSideBar = () => {
  return (
    <ul className='p-4 flex flex-col gap-5 bg-gruvbox_light_brown rounded-r-3xl'>
      <NavLink
        to={Pages.DASHBOARD.path}
        className={getStyleFromNavStatus} // isActive comes from NavLink
      >
        <li className="flex gap-2">
          <DashboardIcon size={45} />
          {/* <span>{Pages.DASHBOARD.name}</span> */}
        </li>
      </NavLink>
      <NavLink to={Pages.INVEST.path} className={getStyleFromNavStatus}>
        <li className="flex gap-2">
          <InvestIcon size={45} />
          {/* <span>{Pages.INVEST.name}</span> */}
        </li>
      </NavLink>
      <NavLink to={Pages.MYACCOUNT.path} className={getStyleFromNavStatus}>
        <li className="flex gap-2">
          <MyAccountIcon size={45} />
        </li>
      </NavLink>
    </ul>
  )
}
