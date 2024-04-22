import htmlLogo from '/images/techs/html.webp'
import bootstrapLogo from '/images/techs/boots.webp'
import sqlLogo from '/images/techs/sql-server.webp'
import cssLogo from '/images/techs/css-3.webp'
import nodejsLogo from '/images/techs/nodejs.webp'
import mongoLogo from '/images/techs/mongo.webp'
import javascript from '/images/techs/javascript.webp'
import react from '/images/techs/react.webp'


import AOS from 'aos'
import 'aos/dist/aos.css'
import './technologies.css'
import { useEffect } from 'react'

const Technologies = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: "true" })
  })

  return (
    <>
      <section className="mb-3  technoDiv">
        <div className="p-4 text-center">
          <h1 style={{fontSize:"30px", fontWeight:"500"}} data-aos="flip-right">Technologies We work with</h1>
        </div>
        <div className="row fs-5">
          <div className="col-xl-9 col-lg-11 col-md-9 col-sm-10 mx-auto techText" data-aos="zoom-in" duration="800">
            <p className=''>We understand that technology in web development changes frequently, and it's important for businesses to utilize the latest tools. We stay up-to-date with the latest trends and technologies to offer creative web solutions. </p>
            <p className='d-none d-md-block'>Our dedicated and experienced team works with a variety of tools such as HTML5, CSS, Bootstrap, JavaScript, React js, Node js, Angular, MERN, MEAN, UI/UX Design, WordPress, Shopify, Android, and more. All these technologies allow us to develop scalable websites and apps for our clients.</p>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-xl-9 col-lg-11 col-md-9  mx-auto">
            <div className="row">
              <div className="col-sm-6  col-md-6 col-lg-4  col-xs-6-custom  my-3" data-aos="fade-right">
                <div className='text-center  techCard'>
                  <div className='mb-3'>
                    <img src={htmlLogo} alt="" className="techimg" />
                  </div>
                  <span className='h5'>HTML 5</span>
                </div>
              </div>
              <div className="col-sm-6  col-md-6 col-lg-4  col-xs-6-custom  my-3 " data-aos="fade-up">
                <div className='text-center  techCard'>
                  <div className='mb-3'>
                    <img src={cssLogo} alt="" className="techimg" />
                  </div>
                  <span className='h5'>CSS 3</span>
                </div>
              </div>
              <div className="col-sm-6  col-md-6 col-lg-4  col-xs-6-custom  my-3 " data-aos="fade-left">
                <div className='text-center  techCard techcard-bs'>
                  <div className='mb-3 mt-3'>
                    <img src={bootstrapLogo} alt="" className="techimg" />
                  </div>
                  <span className='h5'>Bootstrap</span>
                </div>
              </div>
              <div className="col-sm-6  col-md-6 col-lg-4  col-xs-6-custom  my-3" data-aos="fade-right">
                <div className='text-center  techCard techcard-js'>
                  <div className='mb-3'>
                    <img src={javascript} alt="" className="techimg" />
                  </div>
                  <span className='h5'>Javascript</span>
                </div>
              </div>
              <div className="col-sm-6  col-md-6 col-lg-4  col-xs-6-custom  my-3" data-aos="fade-up">
                <div className='text-center  techCard'>
                  <div className='mb-3'>
                    <img src={react} alt="" className="techimg" />
                  </div>
                  <span className='h5'>React</span>
                </div>
              </div>
              <div className="col-sm-6  col-md-6 col-lg-4  col-xs-6-custom  my-3 " data-aos="fade-left">
                <div className='text-center  techCard'>
                  <div className='mb-3'>
                    <img src={nodejsLogo} alt="" className="techimg" />
                  </div>
                  <span className='h5'>Node.js</span>
                </div>
              </div>
              <div className="col-sm-6  col-md-6 col-lg-4  col-xs-6-custom offset-lg-2  my-3 " data-aos="fade-up">
                <div className='text-center  techCard ms-xl-5 '>
                  <div className='mb-3'>
                    <img src={sqlLogo} alt="" className="techimg" />
                  </div>
                  <span className='h5'>My SQL</span>
                </div>
              </div>
              <div className=" col-sm-6  col-md-6 col-lg-4  col-xs-6-custom  my-3 " data-aos="fade-up">
                <div className='text-center  techCard techcard-md'  >
                  <div className='mb-3'>
                    <img src={mongoLogo} alt="" className="techimg" />
                  </div>
                  <span className='h5' >MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technologies;