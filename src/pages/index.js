import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

if (typeof navigator !== "undefined") {
  require("@lottiefiles/lottie-player")
}

const IndexPage = () => (
  <Layout>
    <SEO title="Code Heroes" />
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="site-title">
              We are <br />
              <span className="secondary-color">Code Heroes</span> <br />
              of code and coffee
            </h1>
          </div>
          <div className="col-md-4">
            <lottie-player
              src="https://assets4.lottiefiles.com/datafiles/79YVXEKLbyXqdNpBhLN2HNpIaf0riunhFmey8w9J/animation.json"
              background="transparent"
              speed="0.5"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="coming-soon">Our awesome website coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
