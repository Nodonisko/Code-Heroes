import React from "react"

const Member = ({ name, masterSkills, skills, prevWork, avatar, children }) => (
  <div className="col-md-4">
    <div className="member">
      <div className="member-avatar">
        <img src={avatar} alt={name.replace("<br />", "")} />
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
