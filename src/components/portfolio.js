import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

export default function Portfolio() {
  const results = useStaticQuery(graphql`
    {
      allDatoCmsPortfolioImage {
        nodes {
          portfolioBackgroundImages {
            alt
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)

  const data = results.allDatoCmsPortfolioImage.nodes
  const items = Object.assign({}, ...data)
  console.log(items)

  const dataImageFirst = items.portfolioBackgroundImages[0]
  const dataImageSecond = items.portfolioBackgroundImages[1]

  const imageFirst = getImage(dataImageFirst.gatsbyImageData)
  const imageSecond = getImage(dataImageSecond.gatsbyImageData)

  const bgImageFirst = convertToBgImage(imageFirst)
  const bgImageSecond = convertToBgImage(imageSecond)

  return (
    <div className="container pt-5 pb-5">
      <div className="flex flex-column mt-5 mb-5 ">
        <div className="flex flex-column">
          <h3 className="kicker text-center mb-1">Our Portfolio</h3>
          <h1 className="text-center text-uppercase">Photos of activities</h1>
          <p className="text-center">
            For further information or if you require any guidance for your
            application or more information please contact us
          </p>
        </div>
      </div>
      <div className="row portfolio-image-height pt-1 pb-1 justify-content-center">
        <div className="col-sm-12 col-md-6 br-3 portfolio-image">
          <BackgroundImage {...bgImageFirst} className="crop-image first-image">
            <div className="overlay"></div>{" "}
            <h1 className="text-center" style={{ color: "#fff" }}>
              Diving Class
            </h1>
          </BackgroundImage>
        </div>
        <div className="col-sm-12 col-md-4 br-3 portfolio-image">
          {" "}
          <BackgroundImage
            {...bgImageSecond}
            className="crop-image first-image"
          >
            <div className="overlay"></div>
            <h1 className="text-center" style={{ color: "#fff" }}>
              Swiming Atheletes
            </h1>
          </BackgroundImage>
        </div>
      </div>
    </div>
  )
}
