import React from 'react';
import { DesktopHeader } from '../';

export const DesktopLayout = ({ children }) => {
  return (
    <div className="h-full">
      <DesktopHeader/>
      <main className="w-4/5 px-4">{children}</main>
    </div>
  );
};
