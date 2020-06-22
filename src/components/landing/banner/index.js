import React from "react"
import styled from "styled-components"
// Components
import { ButtonNoneBg } from "../../button"

const BannerWarpper = styled.div`
  height: 742px;
  width: 100%;
  background-image: url(${({ image }) => image});
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

const Banner = props => {
  return (
    <BannerWarpper image={props.image}>
      <BgOverlay />
      <TextWrapper>
        <TitleWrapper>{props.title}</TitleWrapper>
        <TitleDescription>{props.description}</TitleDescription>
        {props.button ? <ButtonNoneBg to="/">Call Back</ButtonNoneBg> : null}
      </TextWrapper>
    </BannerWarpper>
  )
}

export default Banner
