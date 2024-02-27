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
import { DashboardPage } from '../../dashboard/pages/DashboardPage'
import { PagesEnum } from '../utils/pagesEnum'

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <AuthHandler>
        <Routes>
          <Route path={PagesEnum.WELCOME} exact element={<WelcomePage />} />
          <Route
            path={PagesEnum.Callback}
            element={<ProtectedRoute component={Callback} />}
          />
          <Route
            path={PagesEnum.DASHBOARD}
            element={<ProtectedRoute component={DashboardPage} />}
          />
        </Routes>
      </AuthHandler>
    </BrowserRouter>
  )
}