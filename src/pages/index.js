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
              <span className="secondary-color">
                Code Her<span className="shield">o</span>es
              </span>
            </h1>
          </div>
          <div className="col-md-3 d-none d-md-block">
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
            Everyone in the team is an expert in his field but we still learn
            from each other something new every day. We believe that we can make
            a real difference to our customers in compare to the others. Our
            power is in hard skills, effective cooperation and eagerness to
            build something for better future. <br />
            <br />
            Our primary focus is{" "}
            <strong>web and mobile app development.</strong> We are able to
            deliver apps from scratch to real valuable product. During the
            development{" "}
            <strong>
              we care about analysis, user experience and testing.
            </strong>{" "}
            We all use speak in <strong>Javascript</strong> and we use modern
            technologies like
            <strong>React, React Native, GraphQL, NodeJS.</strong> Our
            experience involves also making courses and lectures about
            Javascript-based topics.
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

        <div className="col-md-4">
          <div className="skill-box">
            <h3>UI</h3>
            <p>Figma, Sketch</p>
          </div>
        </div>
      </Row>
    </Section>
    <Section id="experience">
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
              We are based mostly in Prague, Czech Republic, but{" "}
              <strong>we cooperate remotely without problem.</strong>
              <br></br>
              You can reach us on following e-mail:
            </p>
            <a
              href="mailto:hire@codehero.es"
              className="link-button hire-button"
            >
              hire@codehero.es
            </a>
          </div>
        </Row>
      </Section>
      <Section className="footer-copy">
        <Row>
          <div className="col-12">
            <div class="footer-left">
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
