import React from 'react'

const About = () => {
  return (
    <section id='about' className='about section'>
      <h1 className='header' data-sal='slide-up' data-sal-easing='ease' data-sal-duration='1000'>About Me</h1>

      <div className='container' data-sal="slide-up" data-sal-easing='ease' data-sal-duration="1000">
        <a className="nothing-yet" target="_blank" ><img className='nothing-yet-to-show-off' alt='nothing yet' /></a>

        <p className='description'>BlahblahblahBlahblahblahBlahblahblahBlahblahblahBlahblahblahBlahblahblah <strong className='bold'>Blahblahblah</strong>, BlahblahblahBlahblahblahBlahblahblahBlahblahblah</p>
      </div>

      <div className='container adjust' data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
        <p className='description'>BlahblahblahBlahblahblahBlahblahblahBlahblahblah <strong>SJSU</strong> BlahblahblahBlahblahblahBlahblahblah</p>
        <img alt='picture of me' />

      </div>
    </section>
  )
}

export default About;
