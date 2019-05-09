import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { graphql } from 'gatsby'
import { Reveal } from 'react-reveal'

// Components
import { Grid, GridItem } from '../components/Grid'
import Card from '../components/Card'
import Container from '../components/Container'

export const CollectionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { title, items } = frontmatter

  return (
    <Container>
      <h1>{title}</h1>
      <Grid>
        {items.map((item, index) => {
          const isOdd = index % 2 !== 0
          const gridItemClasses = classNames({
            'u-mt-tablet--2 u-mt-desktop--4': isOdd
          })
          const revealEffect = isOdd ? 'a-fade-in-up-odd' : 'a-fade-in-up'
          return (
            <GridItem key={index} className={gridItemClasses}>
              <Reveal effect={revealEffect}>
                <Card
                  modifier="product"
                  cta="Shop now"
                  ctaSrc="/collezione"
                  fluid={item.image.childImageSharp.fluid}
                />
              </Reveal>
            </GridItem>
          )
        })}
      </Grid>
    </Container>
  )
}

CollectionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default CollectionPage

export const CollectionPageQuery = graphql`
  query CollectionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        items {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`
