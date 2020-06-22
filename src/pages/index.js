import React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/landing/banner"
import Content, {
  PathWrapper,
  DetailWrapper,
  TopicsWrapper,
} from "../components/landing/content"
import Customer from "../components/landing/customer"
import Contact from "../components/landing/contact"
import Wrapper from "../components/wrapper"
import { ButtonLink } from "../components/button"

// data
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

const IndexPage = ({ data }) => {
  const prismicBanner = data.prismic.allBanners.edges[0]
  if (!prismicBanner) return null
  const document = prismicBanner.node

  const bannerContent = {
    title: document.banner_title,
    desc: document.banner_desc,
    img: document.banner_image,
    link: document.banner_link,
    linkLabel: document.banner_link_label,
    content: document.body.find(field => field.type === "content").fields,
    contact: document.body.find(field => field.type === "contact").fields[0],
  }

  // const homeContent = {
  //   title: documentContent.content_20it,
  //   subLitle: documentContent.content_subtitle,
  //   topics: documentContent.content_topics,
  //   desc: documentContent.content_desc,
  //   img: documentContent.content_image,
  //   link: documentContent.content_link,
  //   linkLabel: documentContent.content_link_label,
  // }

  return (
    <Layout>
      <SEO title="Home" />
      {/* Banner */}
      <Banner
        image={bannerContent.img.url}
        title={<>{RichText.asText(bannerContent.title)}</>}
        description={<>{RichText.asText(bannerContent.desc)}</>}
        linkTo={bannerContent.link.url}
        linkLabel={RichText.asText(bannerContent.linkLabel)}
      />

      <Wrapper>
        {bannerContent.content.map((data, index) => (
          <Content
            image={data.content_image.url}
            mirror={(index + 1) % 2 === 0 ? true : false}
            key={`content-${index}`}
          >
            <PathWrapper>
              <b>{RichText.asText(data.content_path_title)}</b>
              {RichText.asText(data.content_path)}
            </PathWrapper>
            <TopicsWrapper>
              {RichText.asText(data.content_topics)}
            </TopicsWrapper>
            <DetailWrapper>{RichText.asText(data.content_desc)}</DetailWrapper>
            <ButtonLink href={data.content_link.url}>
              {RichText.asText(data.content_link_label)}
            </ButtonLink>
          </Content>
        ))}
      </Wrapper>

      {/* Trust content */}
      <Wrapper>
        <Customer />
      </Wrapper>

      {/* Contact */}
      <Contact
        facebookLink={bannerContent.contact.contact_facebook.url}
        linkedinLink={bannerContent.contact.contack_linkedin.url}
        email={bannerContent.contact.contact_email[0].text}
        address={bannerContent.contact.contact_address[0].text}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    prismic {
      allBanners {
        edges {
          node {
            banner_title
            banner_desc
            banner_image
            banner_link {
              _linkType
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            banner_link_label
            body {
              ... on PRISMIC_BannerBodyContent {
                type
                label
                fields {
                  content_desc
                  content_image
                  content_link {
                    _linkType
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                  content_link_label
                  content_path
                  content_path_title
                  content_topics
                }
              }
              ... on PRISMIC_BannerBodyContact {
                type
                label
                fields {
                  contack_linkedin {
                    _linkType
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                  contact_address
                  contact_email
                  contact_facebook {
                    _linkType
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
