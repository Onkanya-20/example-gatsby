import React from "react"

// Static
import BgImage from "../../images/Picture-New-min.jpg"
// Components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from "../../components/landing/banner"
import { CollapeDiv } from '../../components/wiki/container'
import { WikiCard } from '../../components/wiki/card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Banner */}
    <Banner 
      image={BgImage}
      title={<>What we mean<br />when we say...</>}
      description={<>New marketing trends are usually accompanied
        by new terminology. Let’s get to know them.</>
      }
    />

    <CollapeDiv>
      <WikiCard></WikiCard>
      <WikiCard></WikiCard>
      <WikiCard></WikiCard>
      <WikiCard></WikiCard>
      <WikiCard></WikiCard>
      <WikiCard></WikiCard>
    </CollapeDiv>
  </Layout>
)

export default IndexPage
