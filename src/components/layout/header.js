import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import styled from "styled-components"
import Logo from "../../images/logo.png"

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9;
  background-color: rgba(255, 255, 255, ${props => props.opacity});

  backdrop-filter: ${({ opacity }) => (opacity === 0 ? "none" : "blur(5px)")};
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

const LogoWrapper = styled.img`

width: 118px;
`

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

  
  useEffect(() => {
    const headerOnScroll = () => {
        let op = window.pageYOffset
        if (op >= 100) {
          op = 100
          setOpacity(op * 0.009)
        } else {
          setOpacity(0)
        }
    }

    window.addEventListener("scroll", headerOnScroll)

    return () => {
      window.removeEventListener("scroll", headerOnScroll)
    }
  }, [opacity])

  return (
    <Wrapper opacity={opacity}>
      <HeaderWrapper>
        <MenuBar>
            <Link to="/">
              <LogoWrapper src={Logo} alt="20IT index" />
            </Link>
          <MenuWrapper>
            <LinkMenu to="/">{t("case_studies_menu")}</LinkMenu>
            <LinkMenu to="/wiki">{t("wiki_menu")}</LinkMenu>
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
