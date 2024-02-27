import React from 'react'
import { useMyAuth } from '../../auth/'

export const DashboardPage = () => {
  return (
    <>
      <h1>Hello from dashboard</h1>
      <LogOutButton />
    </>
  )
}

export const LogOutButton = () => {
  const { handleLogOut } = useMyAuth()
  return (
    <button
      className="flex justify-between items-center rounded-md bg-black"
      onClick={handleLogOut}
    >
      <span className="text-xl pr-4">Logout</span>
    </button>
  )
}
