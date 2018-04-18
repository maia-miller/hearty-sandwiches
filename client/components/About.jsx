import React from 'react'

export default (props) => {

return (
  <div className='about' id='about'>
    <div className='heading'>
      <h1 className='section-title' data-aos="fade-right" data-aos-duration="800">About</h1>
      <h3 className='section-subtitle' data-aos="fade-right" data-aos-duration="800">An empathetic, multidisciplinary approach to building the web</h3>
      <br />
    </div>

    <div className='columns'>
      <div className='column'>
        <img className='col-img' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200" src="../images/teamwork.png" />
        <h3 className='subject-title'><strong>Communication is Key</strong></h3>
        <p className="column-text">The days of the reclusive programmer are over. Today, developers work on teams with designers, marketers, project managers and other programmers. With practical teamwork experience, it has been my strong interpersonal and communication skills that has contributed time and time again to my team's success.</p>
      </div>

      <div className='column'>
        <img className='col-img' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="250" src="../images/problemsolve.png" />
        <h3 className='subject-title'><strong>Problem Solver</strong></h3>
        <p className="column-text">I am an analytic person by nature, so my approach to any challenge is to investigate and optimize solutions. Nothing is impossible if turned over enough times, and I have a track record of providing clients with results that are professional, clean and creative. I love brainstorming solutions and solving problems, with a team or on my own.</p>
      </div>

      <div className='column'>
        <img className='col-img' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" src="../images/fastlearner.png" />
        <h3 className='subject-title'><strong>Fast Learner</strong></h3>
        <p className="column-text">I learned how to code in just 18 weeks. Programmers need to be constantly learning in order to stay up-to-date with the field, and need to be able to do so quickly to stay relevant. I have a deep and insatiable curiosity for learning, and the self motivation and direction to put my intentions into action.</p>
      </div>

      <div className='column'>
        <img className='col-img' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="350" src="../images/multidisciplinary.png" />
        <h3 className='subject-title'><strong>Multidisciplinary</strong></h3>

        <p className="column-text">With an education in Humanities, professional experience in marketing and graphic design, and training in Human-Computer Interactions, I bring a knowledge base that is both wide and deep. I think creatively and unconventionally, yet am grounded by best practices and an emphasis on accessibility and inclusivity.</p>
      </div>
    </div>

    <div className=''>
      <p>When I'm not coding, I'm spending time doing acroyoga, cooking delicious vegan food, cylcing/hiking, or making pottery.</p>
    </div>
<br />
    <div>
      <Testimonial1 />
    </div>

    </div>

  )
}
