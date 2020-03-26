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
          <div className="col-12">
            <h1 className="site-title">
              We are{" "}
              <span className="secondary-color">
                Code Her<span className="shield">o</span>es
              </span>
            </h1>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <p className="intro-description">
              A team of <strong>passionate Javascript developers</strong>, who
              just love their work. <br />
              <br />
              Our contract ended because of turbulent markets in March 2020. So
              we decided to pursue our dream and start looking for new
              challenges together. We believe that we are{" "}
              <strong>highly effective</strong> team with{" "}
              <strong>senior skills</strong> and diverse abilites. <br />
              <br />
              Let’s build something beautiful <strong>together</strong>.
            </p>
          </div>
        </Row>
      </Section>
      <div className="next-section-arrow d-none d-md-block">
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
          <h2>What’s the difference</h2>
          <p>
            Everyone in the team is an expert in their field but we still learn
            something new from each other every day. We believe that we can
            offer a real difference to our customers. Our power lies in hard
            skills, effective cooperation and eagerness to build something for a
            better future.
            <br />
            <br />
            Our primary focus is <strong>web and mobile app development</strong>
            . We are able to deliver apps from scratch to real valuable
            products. During the development{" "}
            <strong>we care about analysis, user experience and testing</strong>
            . <br />
            <br />
            We all speak <strong>Javascript</strong> and{" "}
            <strong>TypeScript</strong> and we use modern technologies like{" "}
            <strong>React, React Native, GraphQL and NodeJS</strong>. We have
            experience with coaching and organizing courses involving
            Javascript-based topics.
          </p>
        </div>
      </Row>
      <Row>
        <div className="col-md-4">
          <div className="skill-box">
            <h3>Web apps</h3>
            <p>React / React Native Web, NextJS, Apollo, Relay Modern</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="skill-box">
            <h3>Mobile apps</h3>
            <p>React Native, Cordova</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="skill-box">
            <h3>Backend</h3>
            <p>NodeJS, GraphQL, REST</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="skill-box">
            <h3>UI</h3>
            <p>Figma, Sketch, Adobe Photoshop, Avocode, Zeplin</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="skill-box">
            <h3>CI/CD</h3>
            <p>Bitrise, CircleCI, MS App Center</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="skill-box">
            <h3>Other skills</h3>
            <p>Git, TypeScript, Redux</p>
          </div>
        </div>
      </Row>
    </Section>
    <Section id="experience">
      <Row>
        <div className="col-12" id="clients">
          <h2>Work experience</h2>
          <p>
            We have cooperated with many interesting companies and worked on
            real-life products. <br />
            <br />
            From small prototypes and local startups to large corporate
            environments, we were able to add value and deliver working
            solutions.
          </p>
        </div>
      </Row>

      <Row className="align-items-center">
        <ClientLogo
          src={require("../images/clients/kiwi.png")}
          scrollPosition={scrollPosition}
          width="196"
          height="98"
        />
        <ClientLogo
          src={require("../images/clients/good-data.png")}
          scrollPosition={scrollPosition}
          width="230"
          height="67"
        />
        <ClientLogo
          src={require("../images/clients/ncr.png")}
          scrollPosition={scrollPosition}
          width="189"
          height="55"
        />
        <ClientLogo
          src={require("../images/clients/hoppygo.png")}
          scrollPosition={scrollPosition}
          width="202"
          height="61"
        />
        <ClientLogo
          src={require("../images/clients/mallpay.png")}
          scrollPosition={scrollPosition}
          width="222"
          height="82"
        />
        <ClientLogo
          src={require("../images/clients/skoda.png")}
          scrollPosition={scrollPosition}
          width="179"
          height="176"
        />
        <ClientLogo
          src={require("../images/clients/creative-dock.png")}
          scrollPosition={scrollPosition}
          width="118"
          height="108"
        />
        <ClientLogo
          src={require("../images/clients/ackee.png")}
          scrollPosition={scrollPosition}
          width="104"
          height="104"
        />
        <ClientLogo
          src={require("../images/clients/vodafone.png")}
          scrollPosition={scrollPosition}
          width="242"
          height="121"
        />
      </Row>
    </Section>

    <Section id="members">
      <Row>
        <div className="col-12">
          <h2 className="team-members-title">Team members</h2>
          <p>
            We are four <strong>senior Javascript developers</strong> with focus
            on <strong>React</strong> and <strong>React Native</strong>. Radek
            is our Project Manager and Quality Engineer.
          </p>
        </div>
      </Row>
      <div className="members-cards">
        <Row>
          <Member
            name="Jan Václavík"
            avatar={require("../images/avatars/honza.jpg")}
            masterSkill="Dev, UX"
            secondarySkill="React (+Native) + NodeJS"
            skills={[
              "Worked at Kiwi.com, NCR",
              "Co-founder of Ackee",
              "16 years in development",
            ]}
            links={[
              {
                href: "https://www.linkedin.com/in/janvaclavik/",
                title: "LinkedIn",
              },
              { href: "https://github.com/jvaclavik", title: "GitHub" },
            ]}
            scrollPosition={scrollPosition}
          ></Member>

          <Member
            name="Daniel Suchý"
            avatar={require("../images/avatars/daniel.jpg")}
            masterSkill="SW Architect, CI/CD"
            secondarySkill="React + React Native"
            skills={[
              "Worked at MALL Pay,  NCR",
              "10 years in development",
              "Open source contributor",
            ]}
            links={[
              { href: "https://danielsuchy.cz/", title: "Personal website" },
              { href: "https://github.com/Nodonisko", title: "GitHub" },
            ]}
            scrollPosition={scrollPosition}
          ></Member>

          <Member
            name="Pavel Zbytovský"
            avatar={require("../images/avatars/pavel.jpg")}
            masterSkill="Dev, UX"
            secondarySkill="React (+Native) + NodeJS"
            skills={[
              "Worked at Kiwi.com, GoodData, NCR",
              "15 years in development",
              "OpenStreetMap enthusiast",
            ]}
            links={[{ href: "https://github.com/zbycz", title: "GitHub" }]}
            scrollPosition={scrollPosition}
          ></Member>

          <Member
            name="Radek Tydlačka"
            avatar={require("../images/avatars/radek.jpg")}
            masterSkill="Project manager, QA"
            secondarySkill="Soft skills"
            skills={[
              "Worked at Trisbee, NCR",
              "7 years of project leadership",
              "Analytics and QA",
            ]}
            links={[
              {
                href: "https://www.linkedin.com/in/radektydlacka/",
                title: "LinkedIn",
              },
              { href: "/static/CV_Tydlacka.pdf", title: "Curriculum vitæ" },
            ]}
            scrollPosition={scrollPosition}
          ></Member>

          <Member
            name="Anna Luláková"
            avatar={require("../images/avatars/anicka.jpg")}
            masterSkill="UI and styling"
            secondarySkill="React (+Native)"
            skills={[
              "Worked at NCR, U.plus, Accenture",
              "6 years in development",
              "experience with testing",
            ]}
            links={[
              { href: "/static/CV_Lulakova.pdf", title: "Curriculum vitæ" },
            ]}
            scrollPosition={scrollPosition}
          ></Member>

          <div className="col-md-4">
            <div className="more-devs-card">
              <p>
                Need more devs?<br></br>
                No problem, <AnchorLink href="#contact">contact us!</AnchorLink>
              </p>
            </div>
          </div>
        </Row>
      </div>
    </Section>
    <footer className="contact" id="contact">
      <Section noBorder>
        <Row>
          <div className="col-12">
            <h2>Contact</h2>
            <p>
              We are based in Prague, Czech Republic. It doesn’t matter where
              you are from because{" "}
              <strong>we can seamlessly operate remotely</strong>.
              <br />
              <br />
              Are you interested? Drop us a line at the following email:
            </p>
            <a
              href="mailto:get@codehero.es"
              className="link-button hire-button"
            >
              get@codehero.es
            </a>
          </div>
        </Row>
      </Section>
      <Section className="footer-copy">
        <Row>
          <div className="col-12">
            <div className="footer-left">
              <a href="https://github.com/Nodonisko/Code-Heroes">
                Coded with 😷 during quarantine 2020
              </a>
            </div>
          </div>
        </Row>
      </Section>
    </footer>
  </Layout>
)

export default trackWindowScroll(IndexPage)
