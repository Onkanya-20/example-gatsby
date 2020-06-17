import React from 'react'
import styled from 'styled-components'
// Components
import logo from '../../../images/Logo_Procom-2.png'

const CustomerWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin: 0px auto;
    max-width: 1200px;
    padding: 20px 35px;
    justify-content: center;
`
const CustomerTitle = styled.h1`
`

const CustomerLogos = [
    logo, logo, logo, logo, logo
]

function Customer () {
    return <CustomerWrapper>
        <CustomerTitle>Thanks for trusting in 20IT.</CustomerTitle>
    </CustomerWrapper>
}

export default Customer