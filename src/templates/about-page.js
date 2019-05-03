import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return <p>About page</p>
  // return (
  //   <AboutPageTemplate
  //     contentComponent={HTMLContent}
  //     title={post.frontmatter.title}
  //     content={post.html}
  //   />
  // )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
