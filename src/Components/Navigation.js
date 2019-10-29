import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import NewStoryLogo from '../Assets/mark.png'

const NaviBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar-nav">
        <Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <img src={NewStoryLogo} className="newStoryLogo" alt="NewStoryLogo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" className="latest">Latest</Nav.Link>
          <Nav.Link href="/search" className="search">Search</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NaviBar;