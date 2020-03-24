import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"
import Row from "../components/row"
import ClientLogo from "../components/clientLogo"
import Member from "../components/member"

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
          <p className="intro-description">
            We are a team of web and mobile developers who love their work. Our
            previous project was suddenly stopped because hospitality business
            was heavily affected by COVID-19 and we decided to find new job as a
            team because we believe we are more effective together than as a
            single person.
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
          <h2>More than fullstack</h2>
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
          <a
            href="#"
            className="link-button"
            style={{ marginTop: 60, marginBottom: 60 }}
          >
            Show our team
          </a>
        </div>
      </Row>
    </Section>

    <Section>
      <Row>
        <div className="col-12">
          <h2 className="team-members-title">Team members</h2>
        </div>
      </Row>

      <Row>
        <Member
          name="Jan <br />Václavík"
          masterSkills={["Front-end dev + UX"]}
          skills={["React", "React Native", "NodeJS", "UX"]}
          prevWork={[
            "Team lead at Kiwi.com",
            "Senior dev at NCR",
            "Co-founder at Ackee",
          ]}
        >
          <a href="#">CV</a>
        </Member>

        <Member
          name="Daniel <br />Suchý"
          avatar={require("../images/avatars/daniel.jpg")}
          masterSkills={["Software architecture + CI/CD"]}
          skills={["React, React Native", "NodeJS", "UX"]}
          prevWork={[
            "Team lead at Kiwi.com",
            "Senior dev at NCR",
            "Co-founder at Ackee",
          ]}
        >
          <a href="#">CV</a>
        </Member>

        <Member
          name="Radek <br />Tydlačka"
          masterSkills={["Soft skiller"]}
          skills={["", ""]}
          prevWork={["", "", ""]}
        >
          <a href="#">CV</a>
        </Member>

        <Member
          name="Anna <br />Luláková"
          masterSkills={["Soft skiller"]}
          skills={["", ""]}
          prevWork={["", "", ""]}
        >
          <a href="#">CV</a>
        </Member>

        <Member
          name="Pavel <br />Zbytovský"
          masterSkills={["Soft skiller"]}
          skills={["", ""]}
          prevWork={["", "", ""]}
        >
          <a href="#">CV</a>
        </Member>

        <Member
          name="Daniel <br />Rys"
          masterSkills={["Soft skiller"]}
          skills={["", ""]}
          prevWork={["", "", ""]}
        >
          <a href="#">CV</a>
        </Member>
      </Row>

      <Row>
        <div className="col-12">
          <a href="#" className="link-button" style={{ marginTop: 60 }}>
            Hire us
          </a>
        </div>
      </Row>
    </Section>

    <Section>
      <Row>
        <div className="col-12">
          <h2>Hire us</h2>
          <a
            href="mailto:hire@codehero.es"
            className="link-button"
            style={{ marginTop: 45 }}
          >
            hire@codehero.es
          </a>
        </div>
      </Row>
    </Section>
  </Layout>
)

export default IndexPage
