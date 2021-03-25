import React from 'react';
import {Navbar,  NavbarBrand } from 'reactstrap'

function Header() {
    return (
        <header>
        <Navbar color='dark' dark className='sticky-header'>
          <NavbarBrand>
            Family Tree
          </NavbarBrand>
        </Navbar>
      </header>
    );
}

export default Header;