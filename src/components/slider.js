import React, { Component } from "react"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const results = useStaticQuery(graphql`
    {
      allDatoCmsHeroImageBackground {
        nodes {
          heroBackground {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
  `)

  const data = results.allDatoCmsHeroImageBackground.nodes

  return (
    <div className="hero">
      <Slider {...settings}>
        {data.map(images =>
          images.heroBackground.map((img, i) => {
            const image = getImage(img.gatsbyImageData)
            const bgImage = convertToBgImage(image)

            return (
              <BackgroundImage className="hero-background" {...bgImage}>
                {" "}
                <div key={i} className="hero-overlay"></div>
              </BackgroundImage>
            )
          })
        )}
      </Slider>

      <svg
        className="waves"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L12.6,133.3C25.3,139,51,149,76,144C101.1,139,126,117,152,128C176.8,139,202,181,227,181.3C252.6,181,278,139,303,128C328.4,117,354,139,379,122.7C404.2,107,429,53,455,37.3C480,21,505,43,531,48C555.8,53,581,43,606,53.3C631.6,64,657,96,682,96C707.4,96,733,64,758,80C783.2,96,808,160,834,186.7C858.9,213,884,203,909,165.3C934.7,128,960,64,985,64C1010.5,64,1036,128,1061,133.3C1086.3,139,1112,85,1137,80C1162.1,75,1187,117,1213,112C1237.9,107,1263,53,1288,37.3C1313.7,21,1339,43,1364,48C1389.5,53,1415,43,1427,37.3L1440,32L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}
export default ImageSlider
