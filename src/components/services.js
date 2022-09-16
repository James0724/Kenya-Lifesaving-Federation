import React from "react"

export default function Services() {
  return (
    <>
      <div className="class-area text-center pt-5 pb-5">
        <div className="container">
          <h3 className="kicker text-center">Our Services</h3>
          <h1 className="text-center text-uppercase">
            Certification done by Kenya Lifesaving Federation
          </h1>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="single-class picton-border">
                <div className="class-icon"></div>
                <div className="class-content">
                  <h3>Swiming Classes</h3>
                  <ul className="hover service-list">
                    <li>Aldult Swimming Classes</li>
                    <li>Kids Swimming Classes</li>
                    <li>Survival Swimming Classes</li>
                  </ul>
                  <div className="class-button">
                    <a href="#" className="read-more btn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-class cobalt-border">
                <div className="class-icon"></div>
                <div className="class-content">
                  <h3>Lifesaving Classes</h3>
                  <ul className="hover service-list">
                    <li>Basic Lifesaving Lessons</li>
                    <li>Aquatic First Aid</li>
                    <li>Advanced Lifesaving Lessons</li>
                  </ul>
                  <div className="class-button">
                    <a href="#" className="read-more btn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-class cinnabar-border">
                <div className="class-icon"></div>
                <div className="class-content">
                  <h3>Aquatic Management Course</h3>
                  <ul className="hover service-list">
                    <li>Pool Management Course</li>
                    <li>Flood Rescue</li>
                    <li>Flood Safety</li>
                  </ul>
                  <div className="class-button">
                    <a href="#" className="read-more btn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
