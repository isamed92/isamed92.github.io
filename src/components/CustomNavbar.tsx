import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Message } from '../helpers';

interface CustomNavbarProps {
  setLocale: () => void;
}
export const CustomNavbar: React.FC<CustomNavbarProps> = ({ setLocale }) => {
  return (
    <Navbar className='navbar justify-content-between'>
      <Navbar.Brand className='d-flex flex-column'>
        <img
          src='assets/decoration-x.svg'
          className='d-inline-block mx-3'
          width={15}
          alt='decoration'
        />
        <img
          src='assets/logo.svg'
          className='d-inline-block align-top'
          alt='logo'
        />
      </Navbar.Brand>

      <Nav className='mx-3'>
        <Button variant='outline-dark' onClick={setLocale}>
          <Message id='locale' />
        </Button>
      </Nav>
    </Navbar>
  );
};
