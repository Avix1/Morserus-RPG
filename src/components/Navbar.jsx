import { useState, useEffect } from 'react';
import { Nav, HeaderNav, Logo, NavButton } from '../styles/navStyles'

export default function NavBar() {
    return (
        <>
          <HeaderNav>
              <Logo>Morserus</Logo>
              <Nav>
                  <NavButton href="#">Magic Items</NavButton>
                  <NavButton href="#">Draw an item</NavButton>
              </Nav>
          </HeaderNav>
        </>
    )
}
