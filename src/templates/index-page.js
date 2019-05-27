import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

// Components
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Card from '../components/Card'

// Style
import style from './index-page.module.css'

class IndexPage extends React.Component {
  componentDidMount() {
    this.videoRef.addEventListener('canplay', this.handleVideoLoad, false)
  }

  componentWillUnmount() {
    this.videoRef.removeEventListener('canplay', this.handleVideoLoad)
  }

  render() {
    const { data } = this.props
    const {
      title,
      hero,
      video,
      image1,
      image2,
      image3,
      footer
    } = data.markdownRemark.frontmatter

    return (
      <ParallaxProvider>
        <Hero alt={title} hero={hero} />
        <Parallax y={[-20, 20]} className={style.videoContainer}>
          <video
            className={style.video}
            autoPlay
            loop
            muted
            ref={c => (this.videoRef = c)}
          >
            <source src={video.publicURL} type="video/mp4" />
            Questo browser non supporta il tag video
          </video>
        </Parallax>
        <div className={style.image1}>
          <Img fluid={image1.childImageSharp.fluid} />
        </div>
        <Parallax y={[-30, 10]} className={style.image2}>
          <Img fluid={image2.childImageSharp.fluid} />
        </Parallax>
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
      </ParallaxProvider>
    )
  }

  handleVideoLoad = e => {
    this.videoRef.play()
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage {
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
          name
          absolutePath
          publicURL
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
      }
    }
  }
`
