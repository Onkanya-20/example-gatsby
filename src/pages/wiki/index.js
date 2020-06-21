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
  DetailWrapper
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
          <DescWrapper className="desc" color="#43afdc">
            <TopicsWrapper>
              <b>
                Agile software <br />development
              </b>
            </TopicsWrapper>
            <DetailWrapper> Working “agile” means working flexibly and with the utmost transparency for team and clients. A low-risk method, due to frequent feedback intervals in which the development of the project is being assessed and the next most valuable step defined and organised.</DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={AiIcon} />
            </IconWrapper>
            <TitleWrapper>Artificial Intelligence</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>
                Artificial intelligence (AI)
              </b>
            </TopicsWrapper>
            <DetailWrapper> 
            In computer science, AI is intelligence, demonstrated by machines. It is used to maximise the chance of a successful outcome of an achieved goal. Simply put, think of it as the “heavy lifting” to find the ideal solution out of countless scenarios.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={BlockChainIcon} />
            </IconWrapper>
            <TitleWrapper>Blockchain</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>
              Blockchain
              </b>
            </TopicsWrapper>
            <DetailWrapper>
            The blockchain is quite literally a chain of blocks in which data is decentralised - copying, saving, and protecting the data of the previous block. This method of data management can be used to make automated processes safe and secure - e.g. an app on Ethereum can be used to automatically handle payment for goods and services.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
      </RowWrapper>
      <RowWrapper>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={AgileIcon} />
            </IconWrapper>
            <TitleWrapper>Agile software development</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#43afdc">
            <TopicsWrapper>
              <b>
                Agile software <br />development
              </b>
            </TopicsWrapper>
            <DetailWrapper> Working “agile” means working flexibly and with the utmost transparency for team and clients. A low-risk method, due to frequent feedback intervals in which the development of the project is being assessed and the next most valuable step defined and organised.</DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={AiIcon} />
            </IconWrapper>
            <TitleWrapper>Artificial Intelligence</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>
                Artificial intelligence (AI)
              </b>
            </TopicsWrapper>
            <DetailWrapper> 
            In computer science, AI is intelligence, demonstrated by machines. It is used to maximise the chance of a successful outcome of an achieved goal. Simply put, think of it as the “heavy lifting” to find the ideal solution out of countless scenarios.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
        <WikiCard>
          <WikiWrapper>
            <IconWrapper>
              <img src={BlockChainIcon} />
            </IconWrapper>
            <TitleWrapper>Blockchain</TitleWrapper>
          </WikiWrapper>
          <DescWrapper className="desc" color="#A134EA">
            <TopicsWrapper>
              <b>
              Blockchain
              </b>
            </TopicsWrapper>
            <DetailWrapper>
            The blockchain is quite literally a chain of blocks in which data is decentralised - copying, saving, and protecting the data of the previous block. This method of data management can be used to make automated processes safe and secure - e.g. an app on Ethereum can be used to automatically handle payment for goods and services.
            </DetailWrapper>
          </DescWrapper>
        </WikiCard>
      </RowWrapper>
    </CollapeDiv>
  </Layout>
)

export default IndexPage
