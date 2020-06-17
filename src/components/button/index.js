import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonNoneBg = styled(Link)`
  ${({ theme }) => theme.typography.button()};
  color: ${({ theme }) => theme.color.textLink};
  background-color: ${({ theme }) => theme.color.textWhite};
  padding: 19px 90px;
  border-radius: 50px;
`
export const ButtonLink = styled(Link)`
  ${({ theme }) => theme.typography.link()};
  color: ${({ theme }) => theme.color.textLink};
  background-color: none;
  transition: color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.color.textLinkHover};
  }
`