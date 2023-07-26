import React, { useState, useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Sidebar from './sidebar'
import { CSSTransition } from 'react-transition-group'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    document.getElementsByTagName("body")[0].addEventListener("click", event => {
      if (event.target === document.getElementsByTagName("span")[0] || document.getElementsByClassName("sidebar")[0].contains(event.target)) return;

      document.getElementsByClassName("fa-bars")[0].classList.remove("hide");
      document.getElementsByTagName("body")[0].classList.remove("lock");
      setVisible(false);
      changeIcon();
    })
    for (let i = 0; i < document.getElementsByClassName("clickable").length; i++) {
      document.getElementsByClassName("clickable")[i].addEventListener("click", event => {
        document.getElementsByClassName("fa-bars")[0].classList.remove("hide");
        setVisible(false);
        changeIcon();
      })
    }
  });
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    if (!visible) {
      document.getElementsByTagName("body")[0].classList.remove("lock");
    } else {
      document.getElementsByTagName("body")[0].classList.add("lock");
    }
  }, [visible])

  const setVisibility = () => {
    setVisible(!visible);
    changeIcon();
  }

  const changeIcon = () => {
    window.clearTimeout();

    if (!visible) {
      window.setTimeout(() => {
        document.getElementsByClassName("fa-bars")[0].classList.add("fa-times");
      }, 200);
    } else {
      window.setTimeout(() => {
        document.getElementsByClassName("fa-bars")[0].classList.remove("fa-times");
      }, 200);
    }
  }

  return (
    <nav className="navbar" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500">
      <a href="https://chrisvo.dev/"><img className="cv-logo" alt='nothing' data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="500" /></a>
      <ul className="links">
        <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="300"><a onClick={() => scrollTo("#about")}>About</a></li>
        <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="350"><a onClick={() => scrollTo("#projects")}>Portfolio</a></li>
        <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="400"><a onClick={() => scrollTo("#skills")}>Skills</a></li>
        <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="450"><a onClick={() => scrollTo("#contact")}>Contact</a></li>
        <li className="link-content" data-sal="slide-down" data-sal-easing="ease" data-sal-duration="500" data-sal-delay="500"><a href={require('../../../assets/Anton_Do_Resume.pdf')} target="_blank">Resume</a></li>
      </ul>

      <CSSTransition in={visible} timeout={500} classNames="rotate">
        <span onClick={setVisibility} className="fas fa-bars"></span>
      </CSSTransition>


      <CSSTransition in={visible} timeout={300} classNames="fade-left">
        <Sidebar />
      </CSSTransition>
    </nav>
  )
}

export default Navbar
