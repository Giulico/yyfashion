import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

// Components
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Card from '../components/Card'

// Style
import style from './index-page.module.css'

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
    <>
      {/* <ParallaxProvider> */}
      <Hero alt={title} hero={hero} />
      {/* <Parallax y={[-20, 20]} className={style.video}> */}
      <Img fluid={video.childImageSharp.fluid} />
      {/* </Parallax> */}
      <div className={style.image1}>
        <Img fluid={image1.childImageSharp.fluid} />
      </div>
      {/* <Parallax y={[-30, 10]} className={style.image2}> */}
      <Img fluid={image2.childImageSharp.fluid} />
      {/* </Parallax> */}
      <div className={style.image3}>
        <Img fluid={image3.childImageSharp.fluid} />
      </div>
      <Footer />
      <Card
        className={style.footer}
        cta="Scopri la collezione"
        ctaSrc="/collection"
        fluid={footer.childImageSharp.fluid}
      />
      {/* </ParallaxProvider> */}
    </>
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
