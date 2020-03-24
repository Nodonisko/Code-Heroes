import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import Layout from "../components/layout"
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
    <div className="intro">
      <Section noBorder>
        <Row>
          <div className="col-12">
            <h1 className="site-title">
              We are <br />
              <span className="secondary-color">Code Heroes</span>
            </h1>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <p className="intro-description">
              A team of <strong>six passionate developers</strong>, who just
              love their work. Our contract was suddenly terminated because of
              turbulent markets in March 2020. So we decided to pursue our dream
              and start looking for new challenges together. We believe that we
              are <strong>highly effective</strong> team with senior skills and
              diverse abilites.
              <br />
              <br />
              Let’s build something beautiful <strong>together</strong>.
            </p>
            <AnchorLink href="#skills" className="link-button">
              Read our story
            </AnchorLink>
          </div>
        </Row>
      </Section>
    </div>
    <Section id="skills">
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
        <div className="col-12" id="clients">
          <h2>Work experience</h2>
          <p>
            During our career we all have experience with many of interesting
            companies. From small startups which we built to huge corporations
            with horde of contributors to the same codebase.
            <br />
            <br />
            Click on each logo to find out whom we helped:
          </p>
        </div>
      </Row>

      <Row className="align-items-center">
        <ClientLogo src={require("../images/clients/kiwi.png")} />
        <ClientLogo src={require("../images/clients/good-data.png")} />
        <ClientLogo src={require("../images/clients/ncr.png")} />
        <ClientLogo src={require("../images/clients/hoppygo.png")} />
        <ClientLogo src={require("../images/clients/mallpay.png")} />
        <ClientLogo src={require("../images/clients/skoda.png")} />
        <ClientLogo src={require("../images/clients/creative-dock.png")} />
        <ClientLogo src={require("../images/clients/ackee.png")} />
        <ClientLogo src={require("../images/clients/vodafone.png")} />
      </Row>

      <Row>
        <div className="col-12">
          <AnchorLink
            href="#members"
            className="link-button"
            style={{ marginTop: 60, marginBottom: 60 }}
          >
            Show our team
          </AnchorLink>
        </div>
      </Row>
    </Section>

    <Section id="members">
      <Row>
        <div className="col-12">
          <h2 className="team-members-title">Team members</h2>
          <p>
            We are 5 senior javascript developers with focus on React and React
            Native. Radek is our Project Manager.
          </p>
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
          <AnchorLink
            href="#contact"
            className="link-button"
            style={{ marginTop: 60 }}
          >
            Hire us
          </AnchorLink>
        </div>
      </Row>
    </Section>
    <footer className="contact" id="contact">
      <Section>
        <Row>
          <div className="col-12">
            <h2>Contact</h2>
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
      <Section className="footer-copy">
        <Row>
          <div className="col-md-4">
            <div class="footer-left">2020</div>
          </div>
          <div className="col-md-8">
            <div className=" footer-right">
              Coded with{" "}
              <img src={require("../images/heart.png")} alt="Heart" /> at home
              during quarantine in coronavirus times
            </div>
          </div>
        </Row>
      </Section>
    </footer>
  </Layout>
)

export default IndexPage
