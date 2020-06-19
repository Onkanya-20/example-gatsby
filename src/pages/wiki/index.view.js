import styled from "styled-components"

export const IconWrapper = styled.div`
  margin: 60px auto;
`
export const TitleWrapper = styled.div`
  ${({ theme }) => theme.typography.description()}
  font-weight: bold;
`
export const TopicsWrapper = styled.div``

export const WikiWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  z-index: 1;
  margin: 0 auto;
  margin-bottom: 65px;
`
export const DescWrapper = styled.div`
  border-radius: 5px;
  color: #fff;
  background-color: salmon;
  position: absolute;
  height: 100%;
  width: 100%;
  /* height: 0; */
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  /* z-index: 0; */
  display: none;

  transition: 0.3s ease;
`
