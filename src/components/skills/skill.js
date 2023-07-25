import React from 'react'

const Skill = ({ name, filepath, delay }) => {
  return (
    <div
      className="skill"
      data-sal="fade"
      data-sal-duration="500"
      data-sal-delay={delay}
    >
      <img
        className="technology-image"
        src={filepath}
      />
      <h2 className="name">{name}</h2>
    </div>
  )
}

export default Skill
