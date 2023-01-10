import React, { useRef, useLayoutEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css'
const NavBar = () => {
  const stickyHeader = useRef()
  useLayoutEffect(() => {
    const mainHeader = document.getElementById('mainHeader')
    let fixedTop = stickyHeader.current.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add('fixedTop')
      } else {
        mainHeader.classList.remove('fixedTop')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])
  return (
    <div>
      <Navbar expand="lg" className='dark mainHeader ' id="mainHeader" ref={stickyHeader}>
        <Container>
          <Navbar.Brand className='push'><b>Oneway Template</b>.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' style={{ textDecoration: 'none', }}>
                <div className='woww' >Home</div>
              </Link>

              <Link to='/free' style={{ textDecoration: 'none', }}>
                <div className='woww'>Free Template</div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar