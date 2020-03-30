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
import SkillBox from "../components/skillBox"
import Stars from "../components/stars"
import ShowBreakpoint from "../components/showBreakpoint"
import useGoogleAnalytics from "../hooks/useGoogleAnalytics"

const IndexPage = ({ scrollPosition }) => {
  const { createGAEventHandler } = useGoogleAnalytics()

  return (
    <Layout>
      <SEO title="Code Heroes" />
      <div className="intro">
        <Stars />
        <Section noBorder>
          <div className="intro__column">
            <AnchorLink href="#contact" class="intro__banner">
              Hire us
            </AnchorLink>
            <h1 className="intro__title">
              We are
              <span className="intro__title-name secondary-color">
                Code Her<span className="intro__title-shield">o</span>es
              </span>
            </h1>
          </div>
          <div className="intro__description">
            <p>
              <strong>
                A team of Javascript developers with web&nbsp;&&nbsp;mobile in
                our DNA.
              </strong>
              <br />
              Hire us and we will transform your ideas into the reality!
            </p>
          </div>
        </Section>
        <div className="intro__arrow d-none d-md-block">
          <AnchorLink
            href="#skills"
            onClick={createGAEventHandler("Clicked intro scroll arrow")}
            className="intro-arrow"
          >
            <Image
              src={require("../images/arrow-down-big.svg")}
              alt="Read more"
              className="beat"
            />
          </AnchorLink>
        </div>
      </div>
      <Section id="skills">
        <h2>We speak JavaScript</h2>
        <p>
          Our dream finally came true – we are looking for new challenges
          together as a team, not as individuals. We have gained a lot of
          experience during our careers and everyone on the team is an expert in
          his field. Our <strong>secret power</strong> lies in the combination
          of both – hard skills and soft skills. This way we can offer a real
          difference to our customers.
        </p>
        <p>
          We develop complex apps for{" "}
          <strong>web, mobile or multi-platform</strong>. Let us deliver your
          project from scratch – robust architecture, suitable tech stack and
          reliable CI/CD is all an essence of what we do. You may be assured
          that analysis, user experience, and testing are always our main focus.
        </p>
        <p>
          Languages of our choice are <strong>TypeScript</strong>, JavaScript
          and English. Our favorite tech stack utilizes React, React Native,
          GraphQL and NodeJS. We also give talks and workshops on advanced
          topics.
        </p>
        <Row className="skills-wrapper">
          <SkillBox
            icon="web-apps"
            title="Web apps"
            content="React / React Native Web, NextJS, Apollo, Relay Modern"
          />
          <SkillBox
            icon="mobile-apps"
            title="Mobile apps"
            content="React Native – iOS/Android native modules"
          />
          <SkillBox
            icon="backend"
            title="Backend"
            content="NodeJS, GraphQL, REST, gRPC"
          />
          <SkillBox
            icon="ux-design"
            title="UX/Design"
            content="Figma, Sketch, Photoshop, Avocode, Zeplin"
          />
          <SkillBox
            icon="ci-cd"
            title="CI/CD"
            content="Bitrise, CircleCI, MS App Center, Github Actions, Gitlab pipelines"
          />
          <SkillBox
            icon="other-skills"
            title="Other skills"
            content={
              <>
                Git, TypeScript, Redux,
                <br />
                Heroes of Might and Magic 3{" "}
                <span className="smile">
                  <Image
                    src={require("../images/smile.svg")}
                    width="13"
                    height="13"
                  />
                </span>
              </>
            }
          />
        </Row>
      </Section>
      <Section id="experience">
        <h2>Work experience</h2>
        <p>
          As individuals or together, we have worked for many companies solving
          different problems. From small startups to large corporate
          environments, we learned valuable lessons. Given that communication is
          our most important skill and we believe our shared knowledge will
          amaze you.
        </p>

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
              We are four senior developers. Radek is our Project Manager and
              Quality Engineer. In case you need more engineering power, feel
              free to ask for options.
            </p>
          </div>
        </Row>
        <div className="members-cards">
          <Row>
            <Member
              name="Jan Václavík"
              avatar={require("../images/avatars/honza.jpg")}
              masterSkill="Dev, UX"
              secondarySkill="React, React Native, NodeJS"
              skills={[
                "Worked at Kiwi.com, NCR",
                "Co-founder of Ackee",
                "16 years of experience",
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
              secondarySkill="React, React Native"
              skills={[
                "Worked at MALL Pay,  NCR",
                "10 years of experience",
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
              secondarySkill="React, React Native, NodeJS"
              skills={[
                "Worked at Kiwi.com, GoodData, NCR, etc.",
                "15 years of experience",
                "OpenStreetMap enthusiast",
              ]}
              links={[
                {
                  href: "https://zby.cz/cv-zbytovsky.pdf",
                  title: "Curriculum vitæ",
                },
                { href: "https://zby.cz/", title: "Personal website" },
              ]}
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
                { href: "/CV_Tydlacka.pdf", title: "Curriculum vitæ" },
              ]}
              scrollPosition={scrollPosition}
            ></Member>

            <Member
              name="Anna Luláková"
              avatar={require("../images/avatars/anicka.jpg")}
              masterSkill="UI, UX and styling"
              secondarySkill="React, React Native"
              skills={[
                "Worked at NCR, U.plus, Accenture",
                "6 years of experience",
                "Graphical thinking, experience with testing",
              ]}
              links={[{ href: "/CV_Lulakova.pdf", title: "Curriculum vitæ" }]}
              scrollPosition={scrollPosition}
            ></Member>

            <div className="col-md-4 col-sm-6">
              <div className="more-devs-card">
                <p>
                  Need more devs?<br></br>
                  No problem,{" "}
                  <AnchorLink href="#contact">contact us!</AnchorLink>
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
                We are based in Prague, Czech Republic – but the internet is our
                second home and{" "}
                <strong>we cooperate remotely without problem</strong>.
              </p>
              <p>Are you interested? Drop us a line:</p>
              <a
                href="mailto:hire@codehero.es"
                className="link-button hire-button"
                onClick={createGAEventHandler("Clicked email in Contact")}
              >
                hire@codehero.es
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
}

export default trackWindowScroll(IndexPage)
