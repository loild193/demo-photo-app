import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

import './Header.scss'

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <NavLink
              className="header__link header__title"
              exact
              to="/photos"
              activeClassName="header__link--active"
            >
              Photo App
            </NavLink>
          </Col>

          <Col xs="auto">
            <a
              className="header__link"
              href="https://www.facebook.com/djokovic.novak.9883"
              target="_blank"
              rel="noreferrer"
            >
              Tran Thu Ha
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

Header.propTypes = {}

export default Header

