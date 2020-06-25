import React from "react"
import Index from "../components/home"
import { graphql } from "gatsby"

const IndexPage = props => <Index data={props.data} />
export default IndexPage

export const query = graphql`
  query($lang: String!) {
    prismic {
      allHomepages(lang: $lang) {
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
              ... on PRISMIC_HomepageBodyContent {
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
              ... on PRISMIC_HomepageBodyContact {
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
