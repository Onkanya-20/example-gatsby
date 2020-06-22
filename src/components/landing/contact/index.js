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
  border: solid 1px #f3f0ee;
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
  line-height: 2.2rem;
`

const IconWrapper = styled.div`
  margin: 50px 0px;
  justify-content: space-between;
  img {
    margin-right: 10px;
  }
`

const TextTitle = styled.div`
  ${({ theme }) => theme.typography.link()};
  color: ${({ theme }) => theme.color.textLink};
`

const TextAddress = styled.div`
  ${({ theme }) => theme.typography.titleHighLight()}
  line-height: 2.2rem;
  margin-bottom: 24px;
`

const Contact = props => {
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
            <a href={props.facebookLink}>
              <img src={FacebookIcon} alt="Facebook Icon" target="_blank" />
            </a>
            <a href={props.linkedinLink}>
              <img src={LinkinIcon} alt="Linkedin Icon" />
            </a>
          </IconWrapper>
        </TextWrapper>
        <TextWrapper>
          <AddressWrapper>
            <TextTitle>We are hear:</TextTitle>
            <TextAddress>{props.address}</TextAddress>
            <TextTitle>Shoot us a line:</TextTitle>
            <TextAddress>{props.email}</TextAddress>
          </AddressWrapper>
        </TextWrapper>
      </DetailtWrapper>
    </ContactWrapper>
  )
}

export default Contact
