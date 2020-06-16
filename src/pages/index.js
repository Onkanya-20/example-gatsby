import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BgImage from "../images/bg-image.jpg"
const Banner = styled.div`
  height: 700px;
  width: 100%;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 200px 35px 150px 35px;
`

const BgOverlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  background-image: linear-gradient(240deg, #e10f77 0%, #37c4e7 100%);
  opacity: 0.4;
`

const GreetingWrapper = styled.div`
  display: flex;
  color: white;
  /* position: relative; */
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      {/* <BgOverlay /> */}
      <GreetingWrapper>
        Your personal assistant could be digital. Automating certain aspects of
        your business doesn’t mean you need to reinvent the wheel. You just need
        the tools and a service provider with know-how. And the wheels will spin
        for you.
      </GreetingWrapper>
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Banner>
  </Layout>
)

export default IndexPage
