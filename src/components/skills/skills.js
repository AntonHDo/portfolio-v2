import React from 'react';
import * as mySkills from '../../data/skills.json'
import { Skill } from './skill';
import { skillIconPaths } from '../../data/paths'

export const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <h1 className="header" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">Skills</h1>


      <ul className="skills-list">
        {
          mySkills.skills.map((skill, idx) => {
            return (
              <Skill
                delay={skill.delay}
                filepath={skillIconPaths[idx]}
                key={idx}
                name={skill.name}
              />
            )
          })
        }
      </ul>
    </section>
  );
};
