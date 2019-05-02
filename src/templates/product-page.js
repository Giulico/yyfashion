import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const ProductPageTemplate = ({ title, items }) => (
  <div>page collection</div>
)

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ProductPageTemplate title={frontmatter.title} link={frontmatter.link} />
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
          image
          link
        }
      }
    }
  }
`
