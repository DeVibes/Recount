import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { getConfig } from '../'

export const AuthHandler = ({ children }) => {
  const navigate = useNavigate();
  const { auth0Domain, auth0ClientId, auth0RedirectUri } = getConfig();
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }
  const authConfig = {
    domain: auth0Domain,
    clientId: auth0ClientId,
    onRedirectCallback: onRedirectCallback,
    authorizationParams: {
      redirect_uri: auth0RedirectUri,
    },
  }
  return <Auth0Provider {...authConfig}>{children}</Auth0Provider>
}