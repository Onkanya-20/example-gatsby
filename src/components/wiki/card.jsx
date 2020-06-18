import React from 'react'
import styled, { keyframes } from 'styled-components'

const SlideUp = keyframes`
    0% {
        transform: translate(0, 100%);
    }
    100% {
        transform: translate(0, 0);    
    }
`

const CardContainer = styled.div`
    position: relative;
    display: block;
    padding: 1rem;
    margin: 1rem;
    width: 30%;
    height: 530px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 8px #888888;
    border-radius: 5px;
    z-index: 2;

    /* animation: ${SlideUp} 0.5s linear; */

    .wiki {
        background-color: #fff;
        border-radius: 5px;
        height: 100%;
        width: 100%;
        z-index: 1;
    }

    .desc {
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

        transition: .3s ease;
    }

    &:hover {
        box-shadow: 0px 3px 10px #888;
        .desc {
            /* height: 100%;
            border: 1px solid salmon; */
            /* z-index: 2; */
            display: block;
        }
    }

    
`

export const WikiCard = (props) => {
    return <CardContainer>
         <div className="wiki"></div>
         <div className="desc">asdasdas</div>
    </CardContainer>
}
