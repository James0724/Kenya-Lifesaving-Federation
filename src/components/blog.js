import React from "react"
//import { graphql, Link, useStaticQuery } from "gatsby"
//import { getImage } from "gatsby-plugin-image"
//import { convertToBgImage } from "gbimage-bridge"
//import BackgroundImage from "gatsby-background-image"

export default function Blog() {
  //   const results = useStaticQuery(graphql`
  //     {
  //       allDatoCmsAboutImage {
  //         nodes {
  //           aboutBackgroundImage {
  //             alt
  //             gatsbyImageData(placeholder: BLURRED)
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   const data = results.allDatoCmsAboutImage.nodes
  //   const items = Object.assign({}, ...data)
  //   const dataImage = items.aboutBackgroundImage
  //   const image = getImage(dataImage.gatsbyImageData)
  //   const bgImage = convertToBgImage(image)

  return (
    <div className="container">
      <div className="flex flex-column mt-5 mb-5 ">
        <div className="flex flex-column">
          <h3 className="kicker text-center mb-1">Our Story</h3>
          <h1 className="text-center text-uppercase">Article and Blog</h1>
          <p className="text-center">
            Here are some usefull articles and blog tips to add on your
            theortical aquatic knowledge
          </p>
        </div>
      </div>
    </div>
  )
}
