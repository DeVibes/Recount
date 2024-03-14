import React from 'react';
import { AppHeader } from '../';

export const MobileLayout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <AppHeader />
      <main>{children}</main>
      {/* <MobileNavbar/> */}
    </div>
  );
};
