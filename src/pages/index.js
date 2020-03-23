import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"
import Row from "../components/row"
import ClientLogo from "../components/clientLogo"

// Dont forget to remove if we won't use it
// Fix SSR
if (typeof navigator !== "undefined") {
  require("@lottiefiles/lottie-player")
}

const IndexPage = () => (
  <Layout>
    <SEO title="Code Heroes" />
    <Section>
      <Row>
        <div className="col-12">
          <h1 className="site-title">
            We are <br />
            <span className="secondary-color">Heroes of Code</span> <br />
            and coffee
          </h1>
        </div>
      </Row>
      <Row>
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            consequat magna. Sed a massa diam. Sed vel pellentesque tortor.
            Morbi magna lorem, imperdiet et mattis sed, ultricies et ligula. Ut
            at ultricies lorem.
          </p>
          <a href="#" className="link-button">
            Read our story
          </a>
        </div>
      </Row>
    </Section>

    <Section>
      <Row>
        <div className="col-12">
          <h2>What we do</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            consequat magna. Sed a massa diam. Sed vel pellentesque tortor.
            Morbi magna lorem, imperdiet et mattis sed, ultricies et ligula. Ut
            at ultricies lorem. Etiam augue justo, vestibulum ut neque vel,
            imperdiet suscipit orci. Phasellus aliquet, mauris a viverra
            feugiat, velit velit molestie neque, id tincidunt arcu odio et
            felis. Praesent dignissim tristique magna, vitae interdum ipsum
            pellentesque at. Fusce in nulla vitae lacus volutpat venenatis
            rhoncus vitae elit. Donec lobortis in arcu ut elementum. FE + BE +
            apps
          </p>
        </div>
      </Row>

      <Row>
        <div className="col-12">
          <h2>Our experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            consequat magna. Sed a massa diam. Sed vel pellentesque tortor.
            Morbi magna lorem, imperdiet et mattis sed, ultricies et ligula. Ut
            at ultricies lorem. Etiam augue justo.
          </p>
        </div>
      </Row>

      <Row className="align-items-center">
        <ClientLogo src={require("../images/clients/kiwi.png")} />
        <ClientLogo src={require("../images/clients/good-data.png")} />
        <ClientLogo src={require("../images/clients/hoppygo.png")} />
        <ClientLogo src={require("../images/clients/mallpay.png")} />
        <ClientLogo src={require("../images/clients/skoda.png")} />

        <ClientLogo src={require("../images/clients/ackee.png")} />
        <ClientLogo src={require("../images/clients/vodafone.png")} />
      </Row>

      <Row>
        <div className="col-12">
          <a href="#" className="link-button" style={{ marginTop: 60 }}>
            Show our team
          </a>
        </div>
      </Row>
    </Section>

    <Section>
      <Row>
        <div className="col-12">
          <h2>Team members</h2>
          <p>TODO</p>
        </div>
      </Row>
    </Section>

    <Section>
      <Row>
        <div className="col-12">
          <h2>Contact</h2>
          <p>TODO</p>
        </div>
      </Row>
    </Section>
  </Layout>
)

export default IndexPage
