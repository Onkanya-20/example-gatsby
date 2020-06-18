import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo.png"

const FooterWrapper = styled.footer`
padding: 60px 35px;
`
const LogoWrapper = styled.img`
  width: 50px;
  filter: grayscale(200%);
`
const PrivacyWrapper = styled.span`

`

const CopyrightWrapper = styled.span`
  float: right;
`
const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper src={Logo} alt="Logo footer" />
      <PrivacyWrapper>
        a company of 20Scoops PRIVACY IMPRINT
      </PrivacyWrapper>
      <CopyrightWrapper>
        © {new Date().getFullYear()} 20IT. All Rights Reserved
      </CopyrightWrapper>
    </FooterWrapper>
  )
}

export default Footer
