import React from "react"
import { graphql } from "gatsby"

const NoData = ({ data }) => {
  console.log("data ::", data)
  return (
    <section>
      <h1>This Page Was Created Programmatically</h1>
      <p>
        No data was required to create this page — it’s just a React component!
      </p>
    </section>
  )
}

export default NoData

export const query = graphql`
  query($lang: String!) {
    prismic {
      allBanners(lang: $lang) {
        edges {
          node {
            _meta {
              lang
            }
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
                primary {
                  contact_address
                  contact_email
                  contact_facebook {
                    _linkType
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                  contact_linkedin {
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
