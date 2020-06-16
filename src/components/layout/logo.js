import React from "react"
import styled from "styled-components"
import LogoImage from "../../images/logo.png"

const CustomImg = styled.img`
  width: 118px;
  margin-bottom: 0px;
`

const Logo = () => {
  return <CustomImg src={LogoImage} />
}

export default Logo
