import React from "react"
import "../assets/scss/sidebar.scss"
import { slide as Menu } from "react-burger-menu"
import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Sidebar = (props) => {
  return (
    <Menu {...props}>
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
    </Menu>
  )
}

export default Sidebar
