import React from 'react'
import { DesktopSideBar } from '../'

export const DesktopLayout = ({ children }) => {
  return (
    <div className="h-full grid grid-rows-10 grid-cols-12 gap-4">
      <div className="row-start-1 row-span-1 col-start-1 col-span-2">Logo</div>
      <aside className="row-start-2 row-span-11 col-start-1 col-span-2">
        <DesktopSideBar />
      </aside>
      <header className="row-start-1 row-span-1 col-start-3 col-span-10">
        Header
      </header>
      <main className="row-start-2 row-span-11 col-start-3 col-span-7">
        {children}
      </main>
      <aside className="row-start-2 row-span-11 col-start-10 col-span-3">
        2nd Side
      </aside>
    </div>
  )
}