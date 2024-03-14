import React from 'react';
import { AppSidebar, DesktopHeader } from '../';

export const DesktopLayout = ({ children }) => {
  return (
    <div className="h-full">
      {/* <AppSidebar classes="w-1/5" /> */}
      <DesktopHeader/>
      <main className="w-4/5 px-4">{children}</main>
    </div>
  );
};
