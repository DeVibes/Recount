import React from 'react';
import { MobileHeader, MobileNavbar } from '../';

export const MobileLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <MobileHeader classes="h-1/12"/>
      <main className='flex-1'>{children}</main>
      <MobileNavbar classes="mt-auto"/>
    </div>
  );
};
