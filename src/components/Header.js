import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

import AdSparkLogo from "../assets/img/adsparkLogo.png"
import "../assets/scss/header.scss"

const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
        <Container>
          <Navbar.Brand>
            <Link to='/dashboard'>
              <img src={AdSparkLogo} alt='AdSpark Logo' id='adspark-logo' />
            </Link>
          </Navbar.Brand>

          <div className='flex-column'>
            <Navbar.Text>
              Welcome, <a href='#login'>Juan Dela Cruz</a>
              <span style={{ margin: "0 1rem 0 1rem" }}>|</span>
              <a href='#logout'>Logout</a>
              <div className='spacing-height-min' />
            </Navbar.Text>

            <Nav className='ml-auto' id='responsive-navbar-nav'>
              <Nav.Item>
                <NavLink exact activeClassName='active' to='/dashboard'>
                  Dashboard
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink activeClassName='active' to='/reports'>
                  Reports
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink activeClassName='active' to='/registrations'>
                  Registrations
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink activeClassName='active' to='/pincode-redemptions'>
                  Pincode Redemptions
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink activeClassName='active' to='/search'>
                  Search
                </NavLink>
              </Nav.Item>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
