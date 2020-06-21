import React from "react"
import styled, { keyframes } from "styled-components"

const SlideUp = keyframes`
    0% {
        transform: translate(0, 100%);
    }

    100% {
        transform: translate(0, 0%);
    }
`

const CardWrapper = styled.div`
  width: 33.33%;
  position: relative;
  padding: 0px 4px;


  :nth-child(1) {
    animation: ${SlideUp} 0.5s linear;
  }
  :nth-child(2) {
    animation: ${SlideUp} 1s linear;
  }
  :nth-child(3) {
    animation: ${SlideUp} 1.5s linear;
  }
`

const CardContainer = styled.div`
  display: block;
  padding: 70px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 4px #888888;
  border-radius: 5px;

  /* -webkit-animation-name: ${SlideUp};
  animation-name: ${SlideUp};
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear; */

  /* animation: ${SlideUp} 2s linear; */

  /* .wiki {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    margin-bottom: 65px;
  } */

  .desc {
    border-radius: 5px;
    color: #fff;
    /* background-color: #43afdc; */
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
  }

  &:hover {
    .desc {
      opacity: 100%;
      transition: opacity 0.5s;
    }
  }
`

export const WikiCard = props => {
  return (
    <CardWrapper>
      <CardContainer>
        {props.children}
        {/* <div className="desc">test</div> */}
      </CardContainer>
    </CardWrapper>
  )
}
