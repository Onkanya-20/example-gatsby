import React from "react"
import styled from "styled-components"
import Logo from "./Logo"

const LogoWrapper = styled.div`
  width: 50px;
  filter: grayscale(200%);
`
const Footer = () => {
  return (
    <footer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      a company of 20Scoops PRIVACY IMPRINT
    </footer>
  )
}

export default Footer
