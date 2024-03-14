import { useAuth0 } from "@auth0/auth0-react";
import { Pages } from "../../router";

export const useMyAuth = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const handleLoginWithAuth = async () => {
    await loginWithRedirect(redirectLoginOptions)
  }
  const handleLogOut = async () => {
    logout(logoutOptions)
  }
  return { isAuthenticated, isLoading, handleLoginWithAuth, handleLogOut }
}

const redirectLoginOptions = {
    appState: {
        returnTo: Pages.DASHBOARD.path
    }
}

const logoutOptions = {
  logoutParams: {
    returnTo: window.location.origin,
  }
}