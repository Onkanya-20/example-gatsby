import React from "react"

// Components
import Layout from "../layout"
import SEO from "../seo"
import Banner from "../landing/banner"
import Content, {
  PathWrapper,
  DetailWrapper,
  TopicsWrapper,
} from "../landing/content"
import Customer from "../landing/customer"
import Contact from "../landing/contact"
import Wrapper from "../wrapper"
import { ButtonLink } from "../button"

// data
import { RichText } from "prismic-reactjs"

const IndexPage = ({ data }) => {
  const prismicHomepage = data.prismic.allHomepages.edges[0]
  if (!prismicHomepage) return null
  const document = prismicHomepage.node

  const bannerContent = {
    title: document.banner_title,
    desc: document.banner_desc,
    img: document.banner_image,
    link: document.banner_link,
    linkLabel: document.banner_link_label,
    content: document.body.find(field => field.type === "content").fields,
    contact: document.body.find(field => field.type === "contact").primary,
  }

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
        linkedinLink={bannerContent.contact.contact_linkedin.url}
        email={RichText.asText(bannerContent.contact.contact_email)}
        address={RichText.asText(bannerContent.contact.contact_address)}
      />
    </Layout>
  )
}

export default IndexPage
