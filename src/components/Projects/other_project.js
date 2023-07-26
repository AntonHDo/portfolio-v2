import React from 'react';

export const OtherProject = ({ project }) => {
  const { name, description, link, technologies, delay } = project

  return (
    <li
      className="other-project"
      data-sal="fade"
      data-sal-easing="ease"
      data-sal-duration="1000"
      data-sal-delay={delay}
    >
      <div className="title-and-links">
        <h2 className="name">{name}</h2>
        <a
          href={link}
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="description">{description}</p>
      <ul className="technologies">
        {
          technologies.map((technology, idx) =>
            <li className="technology" key={idx}>{technology}</li>
          )
        }
      </ul>
    </li>
  )
}
