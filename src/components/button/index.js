import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonNoneBg = styled.a`
  ${({ theme }) => theme.typography.button()};
  color: ${({ theme }) => theme.color.textLink};
  background-color: ${({ theme }) => theme.color.textWhite};
  padding: 19px 90px;
  border-radius: 50px;
`
export const ButtonLink = styled.a`
  ${({ theme }) => theme.typography.link()};
  color: ${({ theme }) => theme.color.textLink};
  background-color: none;
  transition: color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.color.textLinkHover};
  }
`

export const ButtonBg = styled(Link)`
  ${({ theme }) => theme.typography.button()}
  color: ${({ theme }) => theme.color.textWhite};
  background-color: ${({ theme }) => theme.color.textLink};
  padding: 15px 80px;
  border-radius: 50px;
`
