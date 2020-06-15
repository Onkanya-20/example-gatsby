import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Logo from './logo'

const MenuBar = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, ${props => props.opacity});
  color: black;
  filter: ${({ opacity }) => opacity ? 'none' : 'brightness(0) invert(1)' };

  transition: all 0.3s;

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', headerOnScroll)

    return () => {
      window.removeEventListener('scroll', headerOnScroll)
    }
  }, [headerOnScroll])

  const headerOnScroll = () => {
    if (window.pageYOffset <= 100) {
      setOpacity(window.pageYOffset * 0.008)
    }
  }

  return (
    <MenuBar opacity={opacity}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1>
          <Link to="/">
            <Logo />
          </Link>
          {/* <Link to="/">{siteTitle}</Link> */}
        </h1>
      </div>
    </MenuBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
