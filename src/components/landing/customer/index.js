import React from "react"
import styled from "styled-components"
// Components
import ProcomLogo from "../../../images/Logo_Procom-2.png"
import TrendmealLogo from "../../../images/logo-trendmeal-2.png"
import CarmentaLogo from "../../../images/Carmenta.png"
import FoodplaceLogo from "../../../images/Foodplace.png"
import WhitechartLogo from "../../../images/Whitechart.png"
import ArbotenaLogo from "../../../images/arbotena.png"
import GamuellerLogo from "../../../images/logo-gamueller-2.png"
import YarvissLogo from "../../../images/yarviss-logo.png"
import IcaLogo from "../../../images/Logo-ICA-1.png"
import ProcureLogo from "../../../images/Procurattio.png"

const CustomerWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 0px auto;
  max-width: 1200px;
  padding: 0px 35px 20px 35px;
  flex-flow: row wrap;
  justify-content: center;
`
const CustomerTitle = styled.div`
  ${({ theme }) => theme.typography.subHeadline()}
  color: ${({ theme }) => theme.color.textContent};
`

const CustomerValue = styled.div`
  margin-top: 80px;
  line-height: 100px;
  width: 100%;
`

const CustomerLogoWrapper = styled.img`
  filter: grayscale(100%) opacity(90%);
  cursor: pointer;
  :hover {
    filter: none;
  }
  margin: 10px;
  vertical-align: middle;
`

function Customer() {
  const customerLogo = [
    ProcomLogo,
    TrendmealLogo,
    CarmentaLogo,
    FoodplaceLogo,
    WhitechartLogo,
    ArbotenaLogo,
    GamuellerLogo,
    YarvissLogo,
    IcaLogo,
    ProcureLogo,
  ]
  return (
    <CustomerWrapper>
      <CustomerTitle>Thanks for trusting in 20IT.</CustomerTitle>
      <CustomerValue>
        {customerLogo.map((logo, index) => (
          <CustomerLogoWrapper
            src={logo}
            alt="customer logo"
            key={`${logo}-${index}`}
          />
        ))}
      </CustomerValue>
    </CustomerWrapper>
  )
}

export default Customer
