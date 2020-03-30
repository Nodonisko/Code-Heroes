import React, { useRef } from "react"
import Image from "./image"
import FlipCard from "./flipCard"

const Member = ({
  name,
  masterSkill,
  secondarySkill,
  skills,
  avatar,
  links,
  scrollPosition,
}) => {
  const cardRef = useRef()

  const toggle = () => {
    cardRef.current.toggleFlip()
  }

  return (
    <div className="member col-lg-4 col-sm-6">
      <div className="member__content">
        <FlipCard
          ref={cardRef}
          FrontSide={() => (
            <div className="member__inner">
              <div className="member__avatar">
                <Image
                  className="member__avatar-img"
                  src={avatar}
                  alt={name}
                  scrollPosition={scrollPosition}
                />
              </div>
              <h3 className="member__name">{name}</h3>
              <div className="member__desc">
                <span className="member__desc-skill">{masterSkill}</span>
                <span className="member__desc-skill">{secondarySkill}</span>
              </div>
              <div className="member__flip-arrow" role="button" onClick={toggle}>
                <Image
                  src={require("../images/arrow-right.svg")}
                  alt="Flip card"
                />
              </div>
            </div>
          )}
          BackSide={() => (
            <div className="member__inner member__inner--back">
              <h3 className="member__name">{name}</h3>
              {skills && (
                <div className="member__desc">
                  <ul className="member__desc-list">
                    {skills.map((skill) => (
                      <li className="member__desc-list-item" key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="member__links">
                {links.map(({ href, title }) => (
                  <a className="member__link" key={title} href={href} target="_blank">
                    {title}
                  </a>
                ))}
              </div>
              <div className="member__flip-arrow" role="button" onClick={toggle}>
                <Image
                  src={require("../images/arrow-left.svg")}
                  alt="Flip card"
                />
              </div>
            </div>
          )}
        />
        <div className="member__flip-hitslop" role="button" onClick={toggle}></div>
      </div>
    </div>
  )
}

export default Member
