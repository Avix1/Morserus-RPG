import styled from 'styled-components';

export const Nav = styled.nav`
    background: #c43b05;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 999;

    a {
        max-width: 100%;
        display: block;
        overflow: hidden;
        position: relative;
        outline: none;
        transition: ease-out 0.3s;
        text-align: center;
    }

    a:hover {   
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
        transform: scale(1);
    }

    ul li a {
        display: block;
        padding: 5px;
        text-decoration: none;
    }

    ul li a,
    ul li a:after,
    ul li a:before {
        transition: all 0.5s;
    }

    ul {
        left: 0;
        top: 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 600px;
    }

    ul li a{
        color: #000103;;
    }

    ul li a:hover {
        color: #010714;
    }

    

    @media (min-height: 700px) {
    height: 70px;
    }
`

export const NavFlow = styled.nav`
    display: flex;
    align-items: center;

    ul li a {
        position: relative;
    }

    ul li a:after,
    nav.fill ul li a:after {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #000103;;
        height: 2px;
    }

    ul li a:hover:after {
        width: 100%;
    }

    li {
        display: block;
    }

    @media (min-width: 1280px) {
    width: 1140px; 
    }
`

export const NavWrapper = styled.div`
    width: 90vw;
    z-index: 999;
    margin-left: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    li {
        display: none;
    }

    a {
        text-decoration: uppercase;
        height: 30px;
        transition: ease all 0.5s;
        transform: scale(0.98);
    }
    
    a:hover {
        color: #010714;
    }

    li a {
        
       color: #000103;;
       text-decoration: none;
       padding: 30px 0;
       font-size: 14px;
       font-weight: 600;
    }

    a,
    a:after,
    a:before {
        transition: all 0.5s;
    }
`

export const NavTitle = styled.h2`
  height: 30px;
  transition: ease all 0.5s;
  transform: scale(0.98);
`
