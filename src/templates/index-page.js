import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Components
import Hero from '../components/Hero'

export const IndexPageTemplate = ({
  title,
  hero,
  video,
  image1,
  image2,
  image3,
  footer
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <Hero alt={title} hero={hero} />
    </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  video: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(frontmatter.hero)
  return (
    <IndexPageTemplate
      title={frontmatter.title}
      hero={frontmatter.hero}
      video={frontmatter.video}
      image1={frontmatter.image1}
      image2={frontmatter.image2}
      image3={frontmatter.image3}
      footer={frontmatter.footer}
    />
  )
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
        title
        hero {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        video {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        footer {
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
