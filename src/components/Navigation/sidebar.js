import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="links">
        <li className="clickable link-content"><button onClick={() => scrollTo("#about")}>About</button></li>
        <li className="clickable link-content"><button onClick={() => scrollTo("#projects")}>Portfolio</button></li>
        <li className="clickable link-content"><button onClick={() => scrollTo("#skills")}>Skills</button></li>
        <li className="clickable link-content"><button onClick={() => scrollTo("#contact")}>Contact</button></li>
        <li className="clickable link-content"><a href={require('../../../assets/Anton_Do_Resume.pdf')} target="_blank">Resume</a></li>
      </ul>
      <ul className="other-links">
        <li className="clickable"><a href="https://github.com/VoChrisK" target="_blank"><i className="fab fa-github"></i></a></li>
        <li className="clickable"><a href="https://www.linkedin.com/in/chris-vo-/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
        <li className="clickable"><a href="https://angel.co/chris-vo-3" target="_blank"><i className="fab fa-angellist"></i></a></li>
      </ul>
      <i><a className="external" href="mailto:vo.chris.k@gmail.com">vo.chris.k@gmail.com</a></i>
    </nav>
  )
}

export default Sidebar
