import React from 'react';
import * as myOtherProjects from '../../data/other-projects.json'
import { OtherProject } from './other_project';

export const OtherProjects = () => {
  return (
    <section className="projects section">
      <h1 className="other-projects" data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">Other Projects</h1>
      <ul className="other-projects-list">
        {
          myOtherProjects.otherProjects.map((project, idx) =>
            <OtherProject
              key={idx}
              project={project}
            />
          )
        }
      </ul>
    </section>
  )
}
