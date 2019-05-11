import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Components
import { Grid, GridItem } from '../components/Grid'
import Container from '../components/Container'

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, intro, body } = frontmatter

  return (
    <Container>
      <Grid>
        <GridItem large>
          <h1>{title}</h1>
          <p className="u-text--large">{intro}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </GridItem>
      </Grid>
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
      }
    }
  }
`
