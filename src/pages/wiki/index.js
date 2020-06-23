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
  TopicsWrapper,
  DetailWrapper,
} from "../../components/wiki/wrapper"

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
      button={false}
    />

    <CollapeDiv>
      <RowWrapper>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={AgileIcon} alt="Agile System" />
            </IconWrapper>
            <TitleWrapper>Agile software development</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#43afdc">
            <TopicsWrapper>
              <b>
                Agile software <br />
                development
              </b>
            </TopicsWrapper>
            <DetailWrapper>
              Working “agile” means working flexibly and with the utmost
              transparency for team and clients. A low-risk method, due to
              frequent feedback intervals in which the development of the
              project is being assessed and the next most valuable step defined
              and organised.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={AiIcon} alt="Artificial" />
            </IconWrapper>
            <TitleWrapper>Artificial Intelligence</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>Artificial intelligence (AI)</b>
            </TopicsWrapper>
            <DetailWrapper>
              In computer science, AI is intelligence, demonstrated by machines.
              It is used to maximise the chance of a successful outcome of an
              achieved goal. Simply put, think of it as the “heavy lifting” to
              find the ideal solution out of countless scenarios.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={BlockChainIcon} alt="The BlockChain" />
            </IconWrapper>
            <TitleWrapper>Block chain</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>Blockchain</b>
            </TopicsWrapper>
            <DetailWrapper>
              The blockchain is quite literally a chain of blocks in which data
              is decentralised - copying, saving, and protecting the data of the
              previous block. This method of data management can be used to make
              automated processes safe and secure - e.g. an app on Ethereum can
              be used to automatically handle payment for goods and services.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
      </RowWrapper>
      <RowWrapper>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={BigDataIcon} alt="The Big data" />
            </IconWrapper>
            <TitleWrapper>Big data</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#43afdc">
            <TopicsWrapper>
              <b>Big data</b>
            </TopicsWrapper>
            <DetailWrapper>
              When the amount of data is simply too much to manually evaluate,
              technology can be used to do it - completely automated. This
              entire process is usually referred to as “big data” and means
              generating relevant insight on a huge scale.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={VrIcon} alt="Virtual reality" />
            </IconWrapper>
            <TitleWrapper>Virtual reality</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>Virtual reality</b>
            </TopicsWrapper>
            <DetailWrapper>
              VR is the imitation of a real world - generated by a computer.
              Usually, this world is so immersive, the user forgets the real
              world around him. A powerful tool to simulate experiences, like
              the inspection of real estate, places, or even entire worlds.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={DesignThinkingIcon} alt="Design thinking" />
            </IconWrapper>
            <TitleWrapper>Design thinking</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>Design Thinking</b>
            </TopicsWrapper>
            <DetailWrapper>
              How humans buy things fundamentally changed. Forever. Design
              thinking is the market adapting to humans. Focusing on new
              behaviour, new technologies, and ways to still be relevant and
              easy to use for customers.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
      </RowWrapper>
    </CollapeDiv>
  </Layout>
)

export default IndexPage
