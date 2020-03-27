import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Fix SSR
if (typeof navigator !== undefined) {
  require("@lottiefiles/lottie-player")
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | Code Heroes" />
    <div className="page-404">
      <div className="container">
        <div className="page-404-content">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_kdfvVY.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            className="404-lottie"
          ></lottie-player>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <p>
            <Link href="/">Go home</Link>
          </p>

          <div className="spider">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_OwhWS2.json"
              background="transparent"
              speed="0.5"
              style={{ width: 300 }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
