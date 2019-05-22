import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Components
import { Grid, GridItem } from '../components/Grid'
import Container from '../components/Container'

const PrivacyPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title } = frontmatter

  return (
    <>
      <Container>
        <h1>{title}</h1>
        <Grid className="u-pt--1 u-ml--2 u-ml-desktop--4" left>
          <GridItem large>
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

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default PrivacyPage

export const PrivacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
