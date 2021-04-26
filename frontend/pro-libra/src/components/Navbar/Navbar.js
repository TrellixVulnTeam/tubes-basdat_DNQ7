import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar (){
  return (
	<header className="navbar-container">
		<Navbar className="navbar-a" expand="lg">
			<Navbar.Brand className="home" href="#home">PRO Libra</Navbar.Brand>
			<Navbar.Toggle className="toggle-button" aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="menus">
            <Nav.Link className="menu-1"  href="#link">Show Book</Nav.Link>
          </div>
          <div className="menus">
            <Nav.Link className="menu-2"  href="#link">Borrow</Nav.Link>
          </div>
          <div className="menus">
            <Nav.Link className="menu-3"  href="#link">Manage Book</Nav.Link>
          </div>
          <div className="menus">
            <Nav.Link className="menu-4"  href="#link">Our Team</Nav.Link>
          </div>
        </Nav>
			</Navbar.Collapse>
		</Navbar>
	</header>
	);
}

export default NavigationBar;