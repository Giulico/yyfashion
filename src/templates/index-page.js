import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <h1>Title: {title}</h1>
    <h3>{subheading}</h3>
    <section>
      <h1>{mainpitch.title}</h1>
      <h3>{mainpitch.description}</h3>
      <h3>{heading}</h3>
      <p>{description}</p>
      <Link to="/products">See all products</Link>
      <h3>Latest stories</h3>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return <p>placeholder</p>
  // return (
  //   <IndexPageTemplate
  //     image={frontmatter.image}
  //     title={frontmatter.title}
  //     heading={frontmatter.heading}
  //     subheading={frontmatter.subheading}
  //     mainpitch={frontmatter.mainpitch}
  //     description={frontmatter.description}
  //     intro={frontmatter.intro}
  //   />
  // );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        # heading
        # subheading
        # mainpitch {
        #   title
        #   description
        # }
        # description
        # intro {
        #   blurbs {
        #     image {
        #       childImageSharp {
        #         fluid(maxWidth: 240, quality: 64) {
        #           ...GatsbyImageSharpFluid
        #         }
        #       }
        #     }
        #     text
        #   }
        #   heading
        #   description
        # }
      }
    }
  }
`
