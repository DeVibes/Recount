import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { useMyAuth } from '../../auth'
import { Pages} from '../'

export const ProtectedRoute = ({ component }) => {
  const { isAuthenticated, isLoading } = useMyAuth()
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <h1>Loading ...</h1>,
  })
  if (!isAuthenticated && !isLoading)
    return <Navigate to={Pages.WELCOME.path}/>
  return <Component/>
}
