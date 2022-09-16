import React from "react"

export default function Services() {
  return (
    <>
      <div class="class-area text-center pt-5 pb-5">
        <div class="container">
          <h3 className="kicker text-center">Our Services</h3>
          <h1 className="text-center text-uppercase">
            Certification done by Kenya Lifesaving Federation
          </h1>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="single-class picton-border">
                <div class="class-icon"></div>
                <div class="class-content">
                  <h3>Swiming Classes</h3>
                  <ul class="hover service-list">
                    <li>Aldult Swimming Classes</li>
                    <li>Kids Swimming Classes</li>
                    <li>Survival Swimming Classes</li>
                  </ul>
                  <div class="class-button">
                    <a href="#" class="read-more btn">
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-class cobalt-border">
                <div class="class-icon"></div>
                <div class="class-content">
                  <h3>Lifesaving Classes</h3>
                  <ul class="hover service-list">
                    <li>Basic Lifesaving Lessons</li>
                    <li>Aquatic First Aid</li>
                    <li>Advanced Lifesaving Lessons</li>
                  </ul>
                  <div class="class-button">
                    <a href="#" class="read-more btn">
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-class cinnabar-border">
                <div class="class-icon"></div>
                <div class="class-content">
                  <h3>Aquatic Management Course</h3>
                  <ul class="hover service-list">
                    <li>Pool Management Course</li>
                    <li>Flood Rescue</li>
                    <li>Flood Safety</li>
                  </ul>
                  <div class="class-button">
                    <a href="#" class="read-more btn">
                      <span>read more</span>
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
