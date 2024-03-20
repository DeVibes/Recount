import React from 'react'
import { DesktopSideBar } from '../'

export const DesktopLayout = ({ children }) => {
  return (
    <div className="h-full grid grid-rows-10 grid-cols-12 gap-4 bg-gruvbox_brown">
      <div className="row-start-1 row-span-1 col-start-1 col-span-2 flex justify-center items-center text-gruvbox_green">
        <span className='border border-gruvbox_green rounded-2xl p-3'>Logo</span>
      </div>
      <aside className="row-start-2 row-span-11 col-start-1 col-span-2 absolute h-full flex items-center">
        <DesktopSideBar />
      </aside>
      <header className="row-start-1 row-span-1 col-start-3 col-span-10 flex items-center">
        <Header/>
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

const Header = () => {
  return (
    <span className='text-3xl text-gruvbox_text'>Hello, Mark!</span>
  )
}