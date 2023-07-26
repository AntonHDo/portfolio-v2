import React from 'react';
import * as myMainProjects from '../../data/main-projects.json'
import { projectImagePaths } from '../../data/paths'
import { MainProject } from './main_project';

const MainProjects = () => {
  return (
    <section id="projects" className="projects section">
      <h1 className="header" data-sal='slide-up' data-sal-easing="ease" data-sal-duration="1000">Portfolio</h1>
      {
        myMainProjects.mainProjects.map((project, idx) =>
          <MainProject
            filepath={projectImagePaths[idx]}
            key={idx}
            idx={idx}
            project={project}
          />
        )
      }
    </section>
  )
}

export default MainProjects
