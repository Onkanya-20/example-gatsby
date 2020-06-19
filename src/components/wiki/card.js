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

const ComeIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(-100%);
  }
`

const CardWrapper = styled.div`
  /* overflow: hidden; */
  width: 33.33%;
  position: relative;
  padding: 0px 4px;
  /* transform: translateY(100%); */


  :nth-child(1) {
    animation: ${SlideUp} 0.5s linear;
    /* animation-delay: 0.5s; */
    /* transform: translateY(0); */
    /* animation-delay: 0.3s; */
    /* animation: ${SlideUp} 0.2s linear; */
  }
  :nth-child(2) {
    /* animation-duration: 0.2s; */
    /* animation: ${ComeIn} 0.4s linear ; */
    /* animation-delay: 0.6s; */
    animation: ${SlideUp} 1s linear;


    /* animation-delay: 0.6s;
    animation: ${SlideUp} 0.6s linear; */
  }
  :nth-child(3) {
    animation: ${SlideUp} 1.5s linear;

    /* animation: ${ComeIn} 0.6s linear ; */
    /* animation-delay: 1s; */
    /* animation-delay: 1s;
    animation: ${SlideUp} 1s linear; */
  }
`

const CardContainer = styled.div`
  /* position: relative; */

  display: block;
  padding: 50px;
  /* margin: 1rem; */
  width: 100%;
  height: 100%;
  /* height: 530px; */
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 4px #888888;
  border-radius: 5px;
  text-align: center;

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
    background-color: #43afdc;
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
        <div className="desc">test</div>
      </CardContainer>
    </CardWrapper>
  )
}
