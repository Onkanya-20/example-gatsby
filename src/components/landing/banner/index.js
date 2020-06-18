import React from "react"
import styled from "styled-components"
// static
import BgImage from "../../../images/bg-image.jpg"
// Components
import { ButtonNoneBg } from "../../button"

const BannerWarpper = styled.div`
  height: 742px;
  width: 100%;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 200px 35px 150px 35px;
`

const BgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 742px;
  top: 0;
  left: 0;
  background-image: linear-gradient(240deg, #e10f77 0%, #37c4e7 100%);
  opacity: 0.4;
`

export const TextWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.textWhite};
  position: relative;
  width: 100%;
  margin: 0px auto;
  max-width: 1200px;
  flex-flow: row wrap;
`

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.typography.largeTitle()};
  width: 100%;
`

export const TitleDescription = styled.div`
  ${({ theme }) => theme.typography.description()};
  width: 100%;
  margin: 32px 70px 32px 0px;
`

const Banner = () => {
  return (
    <BannerWarpper>
      <BgOverlay />
      <TextWrapper>
        <TitleWrapper>
          Your personal assistant <br />
          could be digital.
        </TitleWrapper>
        <TitleDescription>
          Automating certain aspects of your business doesn’t mean you need to
          reinvent the wheel. You just need the tools and a service provider
          with know-how. And the wheels will spin for you.
        </TitleDescription>
        {/* <ButtonNoneBg to="/">Call Back</ButtonNoneBg> */}
        <ButtonNoneBg to="/">Call Back</ButtonNoneBg>
      </TextWrapper>
    </BannerWarpper>
  )
}

export default Banner
