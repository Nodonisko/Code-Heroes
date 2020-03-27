import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useGoogleAnalytics from "../hooks/useGoogleAnalytics"

// Fix SSR
if (typeof navigator !== "undefined") {
  require("@lottiefiles/lottie-player")
}

const NotFoundPage = () => {
  useGoogleAnalytics()

  return (
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
              class="404-lottie"
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
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
