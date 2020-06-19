import React from "react"

// Static
import BgImage from "../../images/Picture-New-min.jpg"
// Components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from "../../components/landing/banner"
import { CollapeDiv, RowWrapper } from "../../components/wiki/container"
import { WikiCard } from "../../components/wiki/card"
import AgileIcon from "../../images/Agile.png"
import AiIcon from "../../images/AI.png"
import BlockChainIcon from "../../images/Block-Chain.png"
import BigDataIcon from "../../images/Data.png"
import VrIcon from "../../images/Vr.png"
import DesignThinkingIcon from "../../images/Design-Thinking.png"
import {
  IconWrapper,
  TitleWrapper,
  WikiWrapper,
  DescWrapper,
} from "./index.view"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Banner */}
    <Banner
      image={BgImage}
      title={
        <>
          What we mean
          <br />
          when we say...
        </>
      }
      description={
        <>
          New marketing trends are usually accompanied <br />
          by new terminology. Let’s get to know them.
        </>
      }
    />

    <CollapeDiv>
      <RowWrapper>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={AgileIcon} />
            </IconWrapper>
            <TitleWrapper>Agile software development</TitleWrapper>
          </WikiWrapper>
          <DescWrapper>fds</DescWrapper>
        </WikiCard>
        <WikiCard>
          <IconWrapper>
            <img src={AiIcon} />
          </IconWrapper>
          <TitleWrapper>Artificial Intelligence</TitleWrapper>
        </WikiCard>
        <WikiCard>
          <IconWrapper>
            <img src={BlockChainIcon} />
          </IconWrapper>
          <TitleWrapper>Blockchain</TitleWrapper>
        </WikiCard>
      </RowWrapper>
      {/* <WikiCard></WikiCard>
      <WikiCard></WikiCard>
      <WikiCard></WikiCard> */}
    </CollapeDiv>
  </Layout>
)

export default IndexPage
