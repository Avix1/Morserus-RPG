import { useState, useEffect } from 'react';
import { Nav, NavWrapper, NavFlow } from '../../styles/navStyles'

function NavBar() {
    return (
        <>
          <Nav>
              <NavWrapper>
                  <a href="#">Morserus</a>
              </NavWrapper>
              <NavFlow>
                  <ul>
                      <li>
                          <a href="#">Magic Items</a>
                      </li>
                      <li>
                          <a href="#">Draw an item</a>
                      </li>
                  </ul>
              </NavFlow>
          </Nav>
        </>
    )
}

export default NavBar;