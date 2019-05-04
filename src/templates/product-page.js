import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Reveal } from 'react-reveal'

// Components
import { Grid, GridItem } from '../components/Grid'
import Card from '../components/Card'
import Container from '../components/Container'

export const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { title, items } = frontmatter

  return (
    <Container>
      <h1>{title}</h1>
      <Grid>
        {items.map((item, index) => (
          <GridItem
            key={index}
            className={index % 2 !== 0 ? 'u-mt-tablet--2 u-mt-desktop--4' : ''}
          >
            <Reveal effect="a-fade-in-up">
              <Card
                modifier="product"
                cta="Shop now"
                ctaSrc="/collezione"
                fluid={item.image.childImageSharp.fluid}
              />
            </Reveal>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
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
