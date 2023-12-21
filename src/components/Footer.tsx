import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const Link = ({ url, text }: { url: string; text: string }) => {
    return (
      <a href={url} className='link' target='_blank'>
        <img src={`assets/${text}.svg`} alt={text} width={20} />
      </a>
    );
  };

  return (
    <footer className='footer text-center'>
      <div className='social-media-links'>
        <Link url='https://www.facebook.com/isamed92' text='facebook' />
        <Link url='https://www.twitter.com/isamed92' text='twitter' />
        <Link url='https://www.instagram.com/isamed92' text='instagram' />
      </div>
      <div className='copyright'>
        &copy; {currentYear} Isaias Medina. All rights reserved.
      </div>
    </footer>
  );
};
