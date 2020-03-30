import React from "react"

const SkillBox = ({ title, icon, content }) => (
  <div className="col-lg-4 col-sm-6">
    <div className="skill-box">
      <div className="skill-box__icon">
        <img src={require(`../images/${icon}-icon.svg`)} alt="" />
      </div>
      <h3 className="skill-box__title">{title}</h3>
      <p className="skill-box__content">{content}</p>
    </div>
  </div>
)

export default SkillBox
