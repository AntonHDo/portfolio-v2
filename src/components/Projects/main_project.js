import React from 'react';

export const MainProject = ({ filepath, idx, project }) => {
  const { name, description, links, technologies } = project
  const { live, github } = links

  const addClassToContainer = () => {
    return idx !== 1 ? "right" : "left-align"
  }

  const addClassToInfo = () => {
    return idx !== 1 ? "left-align" : ""
  }

  const addClassToIcons = () => {
    return idx === 1 ? "left-align" : ""
  }

  const addClassToTechnologies = () => {
    return idx === 1 ? "left" : ""
  }

  return (
    <div
      className={`project container ${addClassToContainer()}`}
      data-sal='slide-up'
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <img
        className="project-image"
        src={filepath}
      />
      <div className="info">
        <div className={`title-and-links ${addClassToInfo()}`}>
          <h2 className="name">{name}</h2>
          <div className={`icons-group ${addClassToIcons()}`}>
            <a href={live} target="_blank">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href={github} target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p className="description">{description}</p>
        <ul className={`technologies ${addClassToTechnologies()}`}>
          {
            technologies.map((technology, idx) => <li className="technology" key={idx}>{technology}</li>)
          }
        </ul>
      </div>
    </div>
  )
}
