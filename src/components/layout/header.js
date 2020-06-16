import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import styled from "styled-components"
import Logo from "./Logo"

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9;
  background-color: rgba(255, 255, 255, ${props => props.opacity});
  color: black;
  filter: ${({ opacity }) => (opacity ? "none" : "brightness(0) invert(1)")};
  transition: all 0.3s;

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`

const HeaderWrapper = styled.div`
  z-index: 4;
  position: relative;
  padding: 0px 35px;
`

const MenuBar = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
`

const LogoWrapper = styled.div``
const MenuWrapper = styled.div`
  align-self: center;
`

const LinkMenu = styled(Link)`
  margin: 0px 16px;
  cursor: pointer;
  color: #8e8e93;

  :hover {
    color: #a134ea;
  }
`

const Header = ({ siteTitle }) => {
  const [opacity, setOpacity] = useState(0)
  const { t } = useTranslation()
  const headerOnScroll = () => {
    if (window.pageYOffset <= 100) {
      setOpacity(window.pageYOffset * 0.009)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", headerOnScroll)

    return () => {
      window.removeEventListener("scroll", headerOnScroll)
    }
  })

  return (
    <Wrapper opacity={opacity}>
      <HeaderWrapper>
        <MenuBar>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <MenuWrapper>
            <LinkMenu to="/">{t("case_studies_menu")}</LinkMenu>
            <LinkMenu to="/">{t("wiki_menu")}</LinkMenu>
            <LinkMenu to="/">{t("vision_menu")}</LinkMenu>
          </MenuWrapper>
        </MenuBar>
      </HeaderWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
