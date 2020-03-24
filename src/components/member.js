import React from "react"
import Image from "./image"

const Member = ({
  name,
  masterSkills,
  skills,
  prevWork,
  avatar,
  children,
  scrollPosition,
}) => (
  <div className="col-md-4">
    <div className="member">
      <div className="member-avatar">
        <Image
          src={avatar}
          alt={name.replace("<br />", "")}
          scrollPosition={scrollPosition}
        />
      </div>
      <h3 dangerouslySetInnerHTML={{ __html: name }} />
      <div className="member-desc">
        <strong>Master Skill</strong>
        <ul>
          {masterSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="member-desc">
        <strong>Skillset</strong>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="member-desc">
        <strong>Previous work</strong>
        <ul>
          {prevWork.map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </div>
      <div className="member-links">{children}</div>
    </div>
  </div>
)

export default Member
