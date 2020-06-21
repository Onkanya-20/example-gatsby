import styled from "styled-components"

export const IconWrapper = styled.div`
  margin: 60px auto;
`
export const TitleWrapper = styled.div`
  ${({ theme }) => theme.typography.description()}
  font-weight: bold;
`
export const TopicsWrapper = styled.div`
${({ theme }) => theme.typography.description()}
`

export const WikiWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  z-index: 1;
  margin: 0 auto;
  margin-bottom: 65px;
  text-align: center;
`
export const DescWrapper = styled.div`
  padding: 28px 18px;

    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color};
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    opacity: 0;
    transition: 0.3s ease;
    cursor: pointer;


  &:hover {
    .desc {
      opacity: 100%;
      transition: opacity 0.5s;
    }
  }
`

export const DetailWrapper = styled.div`
  ${({ theme }) => theme.typography.caption()}
`