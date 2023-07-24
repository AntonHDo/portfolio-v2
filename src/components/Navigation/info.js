import React from 'react';

const Info = () => {
  return (
    <nav className="info-navbar" >
      <ul className="links">
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="550"><a href="https://github.com/AntonHDo" target="_blank"><i className="fab fa-github"></i></a></li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="600"><a href="https://www.linkedin.com/in/anton-do/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="650"><a href="https://angel.co/chris-vo-3" target="_blank"><i className="fab fa-angellist"></i></a></li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="700"><a href={require('portfolio-v2/assets/Anton_Do_Resume.pdf')} target="_blank"><i className="resume"></i></a></li>
      </ul>
    </nav>
  )
};

export default Info;
