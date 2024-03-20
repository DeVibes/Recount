import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../../router'
import { DashboardIcon, InvestIcon, MyAccountIcon } from '../../../shared/icons'
import { getStyleFromNavStatus } from '../'

export const MobileNavbar = ({ classes }) => {
  return (
    <footer className={classes + " flex justify-center"}>
      <ul className="bg-gruvbox_light_brown inline-flex gap-4 p-3 rounded-t-3xl">
        <NavLink to={Pages.DASHBOARD.path} className={getStyleFromNavStatus}>
          <li>
            <DashboardIcon size={45} />
          </li>
        </NavLink>
        <NavLink to={Pages.INVEST.path} className={getStyleFromNavStatus}>
          <li>
            <InvestIcon size={45} />
          </li>
        </NavLink>
        <NavLink to={Pages.MYACCOUNT.path} className={getStyleFromNavStatus}>
          <li>
            <MyAccountIcon size={45} />
          </li>
        </NavLink>
      </ul>
    </footer>
  )
}
