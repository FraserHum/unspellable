import React from 'react';
import { Footer } from '../components';

function DefaultLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
