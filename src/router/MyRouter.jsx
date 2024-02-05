import React from 'react'
import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { WelcomePage } from '../features/login'
import { AuthHandler } from '../auth/AuthHandler'
import { Callback } from './Callback'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

// const Safe = () => <ProtectedRoute><h1>Safe</h1></ProtectedRoute>
// const Safe2 = () => withAuthenticationRequired(Safe, {
//     onRedirecting: () => <h2>Loading</h2>
// })

// const Safe = () => <h1>Safe</h1>

export const MyRouter = () => {
  return (
    <BrowserRouter>
        <AuthHandler>
            <Routes>
                <Route path='/' exact element={<WelcomePage/>}/>
                {/* <Route path='/test' element={Safe2}/> */}
                <Route path='/public' element={<PublicPage/>}/>
                <Route path='/private' element={<PrivateRoute component={PrivatePage}/>}/>
                <Route path='/callback' element={<Callback/>}/>
            </Routes>
        </AuthHandler>
    </BrowserRouter>
  )
}

const PublicPage = () => (
  <h1>Hello from public page!</h1>
)


const PrivatePage = () => {
  return (
    <PrivateRoute>
      <h1>Hello from private page!</h1>
    </PrivateRoute>
  )
}

const PrivateRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <h1>Loading</h1>
  })
  // const { isAuthenticated } = useAuth0();
  // console.log(isAuthenticated)
  // return isAuthenticated ? children : <Navigate to='/'/>
  return <Component/>
}