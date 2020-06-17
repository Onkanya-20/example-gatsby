import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProcuratioImage from "../images/Rectangle-1.png"

// Components
import Warpper from "../components/wrapper"
import { ButtonLink } from "../components/button"
import Banner from '../components/landing/banner'
import Content, { PathWrapper, DetailWrapper, TopicsWrapper } from '../components/landing/content'
import Customer from '../components/landing/customer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Banner */}
    <Banner />

    {/* Product Content */}
    <Warpper>
      <Content image={ProcuratioImage}>
        <PathWrapper><b>20IT</b> / case studies / procuratio</PathWrapper>
          <TopicsWrapper>Haute cuisine <br />in hospitals.</TopicsWrapper>
          <DetailWrapper>
            Thanks to a smart feedback tool, hospital food may soon have more
            courses than a nurse’s night school.
          </DetailWrapper>
          <ButtonLink to="/">{`Details >`}</ButtonLink>
      </Content>
      <Content image={ProcuratioImage} mirror>
        <PathWrapper><b>20IT</b> / wiki / big data​</PathWrapper>
          <TopicsWrapper>Big data.<br/>Short explanation.</TopicsWrapper>
          <DetailWrapper>
            You have heard the term “big data”. But what does it really mean?
            Pro or not, 20IT wiki makes tech easy to understand.
          </DetailWrapper>
          <ButtonLink to="/">{`Details >`}</ButtonLink>
      </Content>
      <Content image={ProcuratioImage}>
        <PathWrapper><b>20IT</b> / team / vision</PathWrapper>
          <TopicsWrapper>Leading.<br/>By example.</TopicsWrapper>
          <DetailWrapper>
            20IT works shoulder to shoulder with clients – to make tomorrow’s
            projects a reality. Here’s how:
          </DetailWrapper>
          <ButtonLink to="/">{`Details >`}</ButtonLink>
      </Content>
    </Warpper>
    
    {/* Trust content */}
    <Warpper>
      <Customer />
    </Warpper>
  </Layout>
)

export default IndexPage
