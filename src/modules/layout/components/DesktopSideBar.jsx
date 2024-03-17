import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pages } from '../../router';
import { DashboardIcon, InvestIcon, MyAccountIcon } from '../../../shared/icons';

export const DesktopSideBar = () => {
  const getStyleFromNavStatus = ({ isActive }) => {
    const activeClasses = [isActive ? 'text-sky-400' : ''].join(' ');
    const allClasses = '';
    return `${allClasses} ${activeClasses}`;
  };
  return (
    <nav>
      <ul>
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
            <MyAccountIcon size={25} />
            <span>{Pages.MYACCOUNT.name}</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};
