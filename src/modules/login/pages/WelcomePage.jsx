import { Navigate } from 'react-router-dom'
import bg from '../../../assets/wbg2.jpg'
import { AppPage } from '../../../shared/'
import { LoginSection } from '../'
import { useMyAuth } from '../../auth/'
import { PagesEnum } from '../../router'

export const WelcomePage = () => {
  const { handleLoginWithAuth, isAuthenticated, isLoading } = useMyAuth();
  if (!isLoading && isAuthenticated)
    return <Navigate to={PagesEnum.DASHBOARD}/>
  return (
    <AppPage backgroundImageString={bg}>
      <LoginSection handleLogin={handleLoginWithAuth}/>
    </AppPage>
  )
}