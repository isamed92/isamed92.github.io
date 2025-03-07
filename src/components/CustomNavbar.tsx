import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Message } from '../helpers';
import { useIntl } from 'react-intl';
import { LocaleButton } from './LocaleButton';

interface CustomNavbarProps {
  setLocale: () => void;
}
export const CustomNavbar: React.FC<CustomNavbarProps> = ({ setLocale }) => {
  const intl = useIntl();

  return (
    <Navbar className='navbar justify-content-between fixed-top'>
      <Navbar.Brand className='d-flex flex-column'>
        <Logo locale={intl.locale.split('-')[0]} />
      </Navbar.Brand>

      <Nav className='mx-3 mt-2'>
        {/* <Nav.Link href='#blog'>
          <Message id='notes' />
        </Nav.Link> */}

        {/* <Nav.Link href='#pdf' className='mx-3'>
          <img src='assets/download-solid.svg' width={25} alt='download' />
        </Nav.Link> */}

        <LocaleButton setLocale={setLocale} />
      </Nav>
    </Navbar>
  );
};

interface Prop {
  locale: string;
}

const Logo: React.FC<Prop> = ({ locale }) => {
  return (
    <div className='d-flex flex-row m-0 p-0'>
      <img
        src={`assets/decoration-x-${locale}.svg`}
        className='d-inline-block mx-3'
        width={15}
        alt='decoration'
      />
      <img
        src={`assets/logo-${locale}.svg`}
        className='d-inline-block align-top'
        width={200}
        alt='logo'
      />
    </div>
  );
};
