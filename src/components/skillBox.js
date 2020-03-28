import React from "react"

const SkillBox = ({ title, icon, content }) => (
  <div className="col-md-4 col-sm-6">
    <div className="skill-box">
      <div className="skill-box-icon">
        <img src={require(`../images/${icon}-icon.svg`)} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
)

export default SkillBox
