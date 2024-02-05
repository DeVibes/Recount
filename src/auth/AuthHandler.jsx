import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

export const AuthHandler = ({ children }) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };
    const authConfig = {
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENTID,
        onRedirectCallback: onRedirectCallback,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_CALLBACK_URI
        }
    }
    return (
        <Auth0Provider {...authConfig}>
            {children}
        </Auth0Provider>
    )
}