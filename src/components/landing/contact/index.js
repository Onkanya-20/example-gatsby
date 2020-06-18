import React from "react"
import styled from "styled-components"
import { ButtonBg } from "../../button"
import BgImage from "../../../images/Pattern.png"
import FacebookIcon from "../../../images/Facebook.svg"
import LinkinIcon from "../../../images/Link-In.svg"

const ContactWrapper = styled.div`
  width: 100%;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  /* padding: 120px 35px; */
  background-size: contain;
  background-position: top right;
  background-color: #faf5fe;
`

const DetailtWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 0px auto;
  max-width: 1200px;
  padding: 100px 0px;
  align-self: center;
`

const AddressWrapper = styled.div`
  width: 50%;
  padding: 0px 0px 0px 10px;
`

const TextWrapper = styled.div`
  width: 50%;
  padding: 0px 60px 0px 100px;
  margin: auto 0px;
`

const CaptionWrapper = styled.div`
  ${({ theme }) => theme.typography.subHeadline()}
  margin: 50px 0px;
`

const IconWrapper = styled.div`
  margin: 50px 0px;
`

const TextTitle = styled.div`
  ${({ theme }) => theme.typography.link()};
  color: ${({ theme }) => theme.color.textLink};
`

const TextAddress = styled.div`
  ${({ theme }) => theme.typography.titleHighLight()}
  line-height: 1.8rem;
  margin-bottom: 24px;
`

const Contact = () => {
  return (
    <ContactWrapper>
      <DetailtWrapper>
        <TextWrapper>
          <CaptionWrapper>
            Got a project, an idea, <br />
            or feedback?
          </CaptionWrapper>
          <ButtonBg to="/">get a call back</ButtonBg>
          <IconWrapper>
            <img src={FacebookIcon} />
            <img src={LinkinIcon} />
          </IconWrapper>
        </TextWrapper>
        <TextWrapper>
          <AddressWrapper>
            <TextTitle>We are hear:</TextTitle>
            <TextAddress>
              20IT GmbH Friedensallee 7-9 22765 Hamburg Germany
            </TextAddress>
            <TextTitle>Shoot us a line:</TextTitle>
            <TextAddress>mail@20it.de</TextAddress>
          </AddressWrapper>
        </TextWrapper>
      </DetailtWrapper>
    </ContactWrapper>
  )
}

export default Contact
