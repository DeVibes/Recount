import React from 'react';
import { MobileHeader, MobileNavbar } from '../';

export const MobileLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full bg-gruvbox_brown">
      <MobileHeader className="p-4"/>
      <main className='flex-1 p-4'>{children}</main>
      <MobileNavbar classes="mt-auto"/>
    </div>
  );
};
