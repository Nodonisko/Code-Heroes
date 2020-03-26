import React from "react"

const SkillBox = ({ title, content }) => (
  <div className="col-md-4 col-sm-6">
    <div className="skill-box">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
)

export default SkillBox
