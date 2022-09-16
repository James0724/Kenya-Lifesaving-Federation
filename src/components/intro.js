import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

export default function Home() {
  const results = useStaticQuery(graphql`
    {
      allDatoCmsClassImagesAd {
        nodes {
          classesAdBackground {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
  `)

  const data = results.allDatoCmsClassImagesAd.nodes
  const items = Object.assign({}, ...data)

  const dataImageFirst = items.classesAdBackground[0]
  const dataImageSecond = items.classesAdBackground[1]
  const imageFirst = getImage(dataImageFirst.gatsbyImageData)
  const imageSecond = getImage(dataImageSecond.gatsbyImageData)

  const bgImageFirst = convertToBgImage(imageFirst)
  const bgImageSecond = convertToBgImage(imageSecond)

  return (
    <div className="container">
      <div className="flex flex-column mt-5 mb-5 ">
        <div className="flex flex-column">
          <h3 className="kicker text-center mb-1">who we are</h3>
          <h1 className="text-center text-uppercase">
            Kenya Lifesaving Federation
          </h1>
        </div>
      </div>
      <div className="container pt-5 pb-5  about-wrapper">
        <div className="crop-image-wrapper ">
          <div className=" row gx-3 w-100 h-100">
            <div className="col first-image-wrapper">
              <BackgroundImage
                {...bgImageFirst}
                className="crop-image first-image"
                style={{
                  // Defaults are overwrite-able by setting one or each of the following:
                  backgroundPosition: "",
                }}
              ></BackgroundImage>
            </div>
            <div className="col crop-image second-image-wrapper">
              <BackgroundImage
                {...bgImageSecond}
                className="crop-image second-image"
                style={{
                  // Defaults are overwrite-able by setting one or each of the following:
                  backgroundPosition: "",
                }}
              ></BackgroundImage>
            </div>
          </div>
        </div>
        <div className="about-introduction">
          <div className="card card-height">
            <div className="card-body">
              <h3 className="kicker text-center">About us</h3>
              <p className="card-text">
                The Kenya Lifesaving Federation is the National Federation for
                Lifesaving and Lifesaving Sport. In these roles KLF leads,
                collaborates and partners with national and international
                organisations to prevent drowning, to promote the provision of
                lifesaving services and oversee lifesaving sport throughout the
                world.
              </p>
            </div>
            <div className="d-flex w-100 mt-3 mb-3 justify-content-center">
              <Link className="links btn">
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
