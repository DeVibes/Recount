import { useAuth0 } from "@auth0/auth0-react";
import { PagesEnum } from "../../router";
// import { PagesEnum } from "../../router/utils/pagesEnum";

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
        returnTo: PagesEnum.DASHBOARD
    }
}

const logoutOptions = {
  logoutParams: {
    returnTo: window.location.origin,
  }
}