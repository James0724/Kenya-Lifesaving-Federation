import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

export default function Home() {
  const results = useStaticQuery(graphql`
    {
      allDatoCmsAboutImage {
        nodes {
          aboutBackgroundImage {
            alt
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)

  const data = results.allDatoCmsAboutImage.nodes
  const items = Object.assign({}, ...data)
  const dataImage = items.aboutBackgroundImage
  const image = getImage(dataImage.gatsbyImageData)
  const bgImage = convertToBgImage(image)

  return (
    <div className="container">
      <div className="flex flex-column mt-5 mb-5 ">
        <div className="flex flex-column">
          <h3 className="kicker text-center">who we are</h3>
          <h1 className="text-center text-uppercase">
            Kenya Lifesaving Federation
          </h1>
        </div>
      </div>
      <div className="container pt-5 pb-5  about-wrapper">
        <div className="crop-image-wrapper ">
          <div className=" row gx-3 w-100 h-100">
            <div className="col-sm-12 col-md-6  first-image-wrapper">
              <BackgroundImage
                {...bgImage}
                className="crop-image first-image"
                style={{
                  // Defaults are overwrite-able by setting one or each of the following:
                  backgroundPosition: "",
                }}
              ></BackgroundImage>
            </div>
            <div className="col crop-image second-image-wrapper d-none d-lg-block">
              <BackgroundImage
                {...bgImage}
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
          </div>
        </div>
      </div>
    </div>
  )
}
