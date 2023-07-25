import React from 'react';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaAngellist } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'


const Info = () => {
  return (
    <nav className="info-navbar" >
      <ul className="links">
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="550">
          <a
            href="https://github.com/AntonHDo" target="_blank">
            <FaGithub />
          </a>
        </li>

        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="600">
          <a href="https://www.linkedin.com/in/anton-do/" target="_blank">
            <FaLinkedin />
          </a>
        </li>

        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="650">
          <a href="https://wellfound.com/u/anton-do" target="_blank">
            <FaAngellist />
          </a>
        </li>

        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="700">
          <a href={require('/home/antondo/appAcademy/Personal Portfolio v2/portfolio-v2/assets/Anton_Do_Resume.pdf')} target="_blank">
            <ImProfile />
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default Info;
