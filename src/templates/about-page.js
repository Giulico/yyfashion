import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Components
import { Grid, GridItem } from '../components/Grid'
import Container from '../components/Container'
import FixedBackground from '../components/FixedBackground'

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, intro, cover } = frontmatter

  return (
    <>
      <FixedBackground alt={title} image={cover.childImageSharp.fluid} />
      <Container>
        <h1>{title}</h1>
        <Grid className="u-pt--1 u-ml--2 u-ml-desktop--4" left>
          <GridItem large>
            <p className="u-text--large">{intro}</p>
            <div
              className="u-mb--6"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </GridItem>
        </Grid>
      </Container>
    </>
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
        cover {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
