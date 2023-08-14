import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.png';
import '../components/NavBar.css';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Catalog">Productos</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
          </Nav>
          <Nav>
               <CartWidget /> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    )
}