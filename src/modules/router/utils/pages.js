import { DashboardIcon, InvestIcon, MyAccountIcon } from '../../../shared/icons'

export const Pages = Object.freeze({
  WELCOME: { path: '/', name: 'Welcome' },
  CALLBACK: { path: '/callback', name: 'Callback' },
  DASHBOARD: { path: '/dashboard', name: 'Dashboard', icon: DashboardIcon },
  INVEST: { path: '/invest', name: 'Invest', icon: InvestIcon },
  MYACCOUNT: { path: '/myaccount', name: 'My Account', icon: MyAccountIcon },
})
