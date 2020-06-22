import React from "react"
import styled from "styled-components"
import Logo from "../../images/Frame-4.png"

const FooterWrapper = styled.footer`
  padding: 50px 35px 70px 35px;
  box-shadow: inset 0 1px 0 #e0e0e0;
`
const LogoWrapper = styled.div`
  float: left;
`
const CustomLogo = styled.img`
  width: 50px;
  vertical-align: middle;
`

const PrivacyWrapper = styled.span``

const CopyrightWrapper = styled.span`
  float: right;
`
const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <CustomLogo src={Logo} alt="Logo footer" />
        <PrivacyWrapper>a company of 20Scoops PRIVACY IMPRINT</PrivacyWrapper>
      </LogoWrapper>
      <CopyrightWrapper>
        © {new Date().getFullYear()} 20IT. All Rights Reserved
      </CopyrightWrapper>
    </FooterWrapper>
  )
}

export default Footer
