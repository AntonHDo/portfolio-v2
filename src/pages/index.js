import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import Email from "../components/Navigation/email"
import Contact from "../components/contact"
import About from "../components/about"
import Footer from "../components/footer"
import Intro from "../components/intro"
import Info from "../components/Navigation/info"
import Navbar from "../components/Navigation/navbar"
import { Skills } from "../components/skills/skills"
import { MainProjects } from "../components/Projects/main_projects"
import { OtherProjects } from "../components/Projects/other_projects"

const Home = ({ data }) => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    let currentScroll = 0;
    window.setTimeout(() => {
      document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
      document.getElementsByClassName("email-navbar")[0].classList.add("show-up");
    }, 500)

    document.addEventListener("scroll", event => {
      if (document.documentElement.scrollTop === 0 || document.documentElement.scrollTop > 5940) {
        document.getElementsByClassName("navbar")[0].classList.remove("show-down");
        document.getElementsByClassName("info-navbar")[0].classList.remove("hide-down");
        document.getElementsByClassName("email-navbar")[0].classList.remove("hide-down");
        document.getElementsByClassName("navbar")[0].classList.add("show-down");
        document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
        document.getElementsByClassName("email-navbar")[0].classList.add("show-up");
        currentScroll = document.documentElement.scrollTop;
      }
      else if (document.documentElement.scrollTop > currentScroll) {
        document.getElementsByClassName("navbar")[0].classList.remove("show-down");
        document.getElementsByClassName("navbar")[0].classList.add("hide-up");
        document.getElementsByClassName("info-navbar")[0].classList.remove("hide-down");
        document.getElementsByClassName("info-navbar")[0].classList.add("show-up");
        document.getElementsByClassName("email-navbar")[0].classList.remove("hide-down");
        document.getElementsByClassName("email-navbar")[0].classList.add("show-up");
        currentScroll = document.documentElement.scrollTop;
      } else if (document.documentElement.scrollTop < currentScroll) {
        document.getElementsByClassName("navbar")[0].classList.remove("hide-up");
        document.getElementsByClassName("navbar")[0].classList.add("show-down");
        document.getElementsByClassName("info-navbar")[0].classList.remove("show-up");
        document.getElementsByClassName("info-navbar")[0].classList.add("hide-down");
        document.getElementsByClassName("email-navbar")[0].classList.remove("show-up");
        document.getElementsByClassName("email-navbar")[0].classList.add("hide-down");
        currentScroll = document.documentElement.scrollTop;
      }
    })
  })

  return (
    <div id="root">
      <title>{data.site.siteMetadata.title}</title>
      <Navbar />
      <Info />
      <Email />
      <Intro />
      <About />
      <MainProjects />
      <OtherProjects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`;
