import React from "react"

// Static
import BgImage from "../../images/bg-image.jpg"
import ProcuratioImage from "../../images/Rectangle-1.png"
import BigdataImage from "../../images/Rectangle-2.png"
import VisionImage from "../../images/Rectangle-3.png"
// Components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Wrapper from "../../components/wrapper"
import { ButtonLink } from "../../components/button"
import Banner from "../../components/landing/banner"
import Content, {
  PathWrapper,
  DetailWrapper,
  TopicsWrapper,
} from "../../components/landing/content"
import Customer from "../../components/landing/customer"
import Contact from "../../components/landing/contact"

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Banner */}
    <Banner
      image={BgImage}
      title={
        <>
          Your personal assistant
          <br />
          could be digital.
        </>
      }
      description={
        <>
          Automating certain aspects of your business doesn’t mean you need to
          reinvent the wheel. You just need the tools and a service provider
          with know-how. And the wheels will spin for you.
        </>
      }
    />

    {/* Product Content */}
    <Wrapper>
      <Content image={ProcuratioImage}>
        <PathWrapper>
          <b>20IT</b> / case studies / procuratio
        </PathWrapper>
        <TopicsWrapper>
          Haute cuisine <br />
          in hospitals.
        </TopicsWrapper>
        <DetailWrapper>
          Thanks to a smart feedback tool, hospital food may soon have more
          courses than a nurse’s night school.
        </DetailWrapper>
        <ButtonLink to="/">{`Details >`}</ButtonLink>
      </Content>
      <Content image={BigdataImage} mirror>
        <PathWrapper>
          <b>20IT</b> / wiki / big data
        </PathWrapper>
        <TopicsWrapper>
          Big data.
          <br />
          Short explanation.
        </TopicsWrapper>
        <DetailWrapper>
          You have heard the term “big data”. But what does it really mean? Pro
          or not, 20IT wiki makes tech easy to understand.
        </DetailWrapper>
        <ButtonLink to="/">{`Details >`}</ButtonLink>
      </Content>
      <Content image={VisionImage}>
        <PathWrapper>
          <b>20IT</b> / team / vision
        </PathWrapper>
        <TopicsWrapper>
          Leading.
          <br />
          By example.
        </TopicsWrapper>
        <DetailWrapper>
          20IT works shoulder to shoulder with clients – to make tomorrow’s
          projects a reality. Here’s how:
        </DetailWrapper>
        <ButtonLink to="/">{`Details >`}</ButtonLink>
      </Content>
    </Wrapper>

    {/* Trust content */}
    <Wrapper>
      <Customer />
    </Wrapper>

    {/* Contact */}
    <Contact />
  </Layout>
)

export default Homepage
