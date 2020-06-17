import React from 'react'
import styled from 'styled-components'

// components
import { ButtonLink } from '../../button'

const ContentWrapper = styled.div`
    display: flex;
    color: ${({ theme }) => theme.color.textWhite};
    position: relative;
    width: 100%;
    margin: 0px auto;
    max-width: 1200px;
    padding: 20px 35px;
`

const ImageWrapper = styled.div`
    ${({ theme }) => theme.typography.link()}
    color: ${({ theme }) => theme.color.textContent};
    width: 40%;
`

export const PathWrapper = styled.div`
    ${({ theme }) => theme.typography.title()}
`

export const TopicsWrapper = styled.div`
    margin: 1.5rem 0;
    ${({ theme }) => theme.typography.subHeadline()}
`

export const DetailWrapper = styled.div`
    margin: 0 0 1rem 0;
    ${({ theme }) => theme.typography.link()}
`

const DescWrapper = styled.div`
    color: ${({ theme }) => theme.color.textContent};
    width: 60%;
    align-self: center;
`

export default function Content (props) {
    return <ContentWrapper>
        {
            !props.mirror ? <ImageWrapper>
                <img src={props.image} />
            </ImageWrapper> : <></>
        }
        <DescWrapper>
            {
                !!props.children ? props.children : <>
                    <PathWrapper>{props.path_text}</PathWrapper>
                    <TopicsWrapper>{props.topic_text}</TopicsWrapper>
                    <DetailWrapper>{props.detail_text}</DetailWrapper>
                    <ButtonLink to={props.href}>{props.href_text}</ButtonLink>
                </>
            }
        </DescWrapper>
        {
            !!props.mirror ? <ImageWrapper>
                <img src={props.image} />
            </ImageWrapper> : <></>
        }
    </ContentWrapper>
}