import React from "react"
import Index from "../components/indexPage"
import { graphql } from "gatsby"

export default props => <Index {...props} />

export const query = graphql`
  query {
    prismic {
      allBanners(lang: "de-de") {
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
