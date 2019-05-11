import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Components
import Container from '../components/Container'

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { title, intro, body } = frontmatter
  console.log(frontmatter)

  return (
    <Container>
      <h1>{title}</h1>
      <h2>{intro}</h2>
      <p>{body}</p>
    </Container>
  )
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
        intro
        body
      }
    }
  }
`
