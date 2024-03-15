import { useAuth0 } from "@auth0/auth0-react";
import { Pages } from "../../router";
import { getConfig } from "../";

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

const { auth0BaseUri } = getConfig()

const redirectLoginOptions = {
    appState: {
        returnTo: Pages.DASHBOARD.path
    }
}

const logoutOptions = {
  logoutParams: {
    returnTo: auth0BaseUri,
  }
}