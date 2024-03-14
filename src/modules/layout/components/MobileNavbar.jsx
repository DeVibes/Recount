import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../../router'
import { DashboardIcon, InvestIcon, MyAccountIcon } from '../../../shared/icons'

export const MobileNavbar = ({ classes }) => {
  return (
    <footer className={classes}>
      <ul className="flex justify-around items-center">
        <NavLink to={Pages.DASHBOARD.path}>
          <li><DashboardIcon size={45}/></li>
        </NavLink>
        <NavLink to={Pages.INVEST.path}>
          <li><InvestIcon size={45} /></li>
        </NavLink>
        <NavLink to={Pages.MYACCOUNT.path}>
          <li><MyAccountIcon size={45}/></li>
        </NavLink>
      </ul>
    </footer>
  )
}
