import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { trackWindowScroll } from "react-lazy-load-image-component"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Row from "../components/row"
import ClientLogo from "../components/clientLogo"
import Member from "../components/member"
import Image from "../components/image"

// Dont forget to remove if we won't use it
// Fix SSR
if (typeof navigator !== "undefined") {
  require("@lottiefiles/lottie-player")
}

const IndexPage = ({ scrollPosition }) => (
  <Layout>
    <SEO title="Code Heroes" />
    <div className="intro">
      <Section noBorder>
        <Row>
          <div className="col-md-9">
            <h1 className="site-title">
              We are <br />
              <span className="secondary-color">Code Heroes</span>
            </h1>
          </div>
          <div className="col-md-3">
            <div className="logo">
              <Image
                src={require("../images/icon.svg")}
                alt="We are Code Heroes!"
              />
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <p className="intro-description">
              A team of <strong>five passionate developers</strong>, who just
              love their work. Our contract was suddenly terminated because of
              turbulent markets in March 2020. So we decided to pursue our dream
              and start looking for new challenges together. We believe that we
              are <strong>highly effective</strong> team with senior skills and
              diverse abilites.
              <br />
              <br />
              Let’s build something beautiful <strong>together</strong>.
            </p>
          </div>
        </Row>
      </Section>
      <div className="next-section-arrow">
        <AnchorLink href="#skills">
          <Image
            src={require("../images/arrow-down-big.svg")}
            alt="Read more"
            className="bounce"
          />
        </AnchorLink>
      </div>
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
        <div className="col-md-4">
          <div className="skill-box">
            <h3>Frontend</h3>
            <p>React / React Native Web</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="skill-box">
            <h3>Backend</h3>
            <p>GraphQL, nodeJS, next.js</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="skill-box">
            <h3>Mobile apps</h3>
            <p>React Native</p>
          </div>
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
        <ClientLogo
          src={require("../images/clients/kiwi.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/good-data.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/ncr.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/hoppygo.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/mallpay.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/skoda.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/creative-dock.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/ackee.png")}
          scrollPosition={scrollPosition}
        />
        <ClientLogo
          src={require("../images/clients/vodafone.png")}
          scrollPosition={scrollPosition}
        />
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
      <div className="members-cards">
        <Row>
          <Member
            name="Jan Václavík"
            avatar={require("../images/avatars/honza.jpg")}
            masterSkill="FrontEnd dev, UX"
            secondarySkill="React + React Native"
            skills={["React", "React Native", "NodeJS", "UX"]}
            links={[
              { href: "#", title: "Curriculum Vitae" },
              { href: "#", title: "LinkedIn" },
              { href: "#", title: "Person Website" },
            ]}
            scrollPosition={scrollPosition}
          >
            <a href="#">CV</a>
          </Member>

          <Member
            name="Daniel Suchý"
            avatar={require("../images/avatars/daniel.jpg")}
            masterSkill="SW Architect, CI/CD"
            secondarySkill="React + React Native"
            skills={["React", "React Native", "NodeJS", "UX"]}
            links={[
              { href: "#", title: "Curriculum Vitae" },
              { href: "#", title: "LinkedIn" },
              { href: "#", title: "Person Website" },
            ]}
            scrollPosition={scrollPosition}
          >
            <a href="#">CV</a>
          </Member>

          <Member
            name="Radek Tydlačka"
            avatar={require("../images/avatars/radek.jpg")}
            masterSkill="FrontEnd dev, UX"
            secondarySkill="React + React Native"
            skills={["React", "React Native", "NodeJS", "UX"]}
            links={[
              { href: "#", title: "Curriculum Vitae" },
              { href: "#", title: "LinkedIn" },
              { href: "#", title: "Person Website" },
            ]}
            scrollPosition={scrollPosition}
          >
            <a href="#">CV</a>
          </Member>

          <Member
            name="Anna Luláková"
            avatar={require("../images/avatars/anicka.jpg")}
            masterSkill="FrontEnd dev, UX"
            secondarySkill="React + React Native"
            skills={["React", "React Native", "NodeJS", "UX"]}
            links={[
              { href: "#", title: "Curriculum Vitae" },
              { href: "#", title: "LinkedIn" },
              { href: "#", title: "Person Website" },
            ]}
            scrollPosition={scrollPosition}
          >
            <a href="#">CV</a>
          </Member>

          <Member
            name="Pavel Zbytovský"
            avatar={require("../images/avatars/pavel.jpg")}
            masterSkill="FrontEnd dev, UX"
            secondarySkill="React + React Native"
            skills={["React", "React Native", "NodeJS", "UX"]}
            links={[
              { href: "#", title: "Curriculum Vitae" },
              { href: "#", title: "LinkedIn" },
              { href: "#", title: "Person Website" },
            ]}
            scrollPosition={scrollPosition}
          >
            <a href="#">CV</a>
          </Member>

          <Member
            name="Need more devs?"
            avatar={require("../images/avatars/dragon.png")}
            masterSkill="Contact us!"
            skills={["We have more heroes as backup"]}
            links={[{ href: "mailto:hire@codehero.es", title: "Contact us!" }]}
            scrollPosition={scrollPosition}
          >
            <a href="#">CV</a>
          </Member>
        </Row>
      </div>

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
      <Section noBorder>
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
            <div class="footer-left">
              <a href="https://github.com/Nodonisko/Code-Heroes">2020</a>
            </div>
          </div>
          <div className="col-md-8">
            <div className=" footer-right">Coded with 😷 during quarantine</div>
          </div>
        </Row>
      </Section>
    </footer>
  </Layout>
)

export default trackWindowScroll(IndexPage)
