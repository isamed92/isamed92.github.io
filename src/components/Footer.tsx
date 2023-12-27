import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer text-center'>
      <div className='copyright pt-5'>
        &copy; {currentYear} Isaias Medina. All rights reserved.
      </div>
    </footer>
  );
};
