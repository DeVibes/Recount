import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { WelcomePage } from '../../login'
import { AuthHandler } from '../../auth'
import { Callback } from './Callback'
import { DashboardPage } from '../../dashboard'
import { InvestPage } from '../../invest'
import { MyAccountPage } from '../../myaccount'
import { Pages } from '../'

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <AuthHandler>
        <Routes>
          <Route path={Pages.WELCOME.path} exact element={<WelcomePage />} />
          <Route
            path={Pages.CALLBACK.path}
            element={<ProtectedRoute component={Callback} />}
          />
          <Route
            path={Pages.DASHBOARD.path}
            element={<ProtectedRoute component={DashboardPage} />}
          />
          <Route
            path={Pages.INVEST.path}
            element={<ProtectedRoute component={InvestPage} />}
          />
          <Route
            path={Pages.MYACCOUNT.path}
            element={<ProtectedRoute component={MyAccountPage} />}
          />
        </Routes>
      </AuthHandler>
    </BrowserRouter>
  )
}