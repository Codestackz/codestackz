import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import webDImg from '/images/services/webD1.webp'
import appDImg from '/images/services/appD1.webp'
import webMImg from '/images/services/webM1.webp'
import webCImg from '/images/services/webC1.webp'
import logoDImg from '/images/services/logodesign.webp'



import AOS from 'aos'
import 'aos/dist/aos.css'

import './services.css'
const Services = () => {

    useEffect(() => {

        const eles = document.getElementsByClassName('customCard');

        Array.from(eles).forEach(ele => {
            ele.setAttribute("data-aos", "zoom-in-up");
            ele.setAttribute("data-aos-once", "true");
            ele.setAttribute("data-aos-duration", "500");
        })
        AOS.init({ duration: 500, once: true, });



    })

    return (
        <>
            {/* id='ourservices' */}
            <div className="text-center p-4" style={{ backgroundColor: "", height: "fit-content" }} data-aos="zoom-in" duration="800">
                <h1 style={{ fontFamily: "Headers !important", fontSize: "30px" }}>Our Services</h1>
            </div>
            <div className="row  px-4 pb-4" style={{ backgroundColor: "" }} >
                <div className="col-md-6 col-lg-4 mb-3">
                    {/* <Link to={'services/webdevelopment'}> */}
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={webDImg} alt="" />
                            <span className="h5 ms-4">Web Development</span>
                        </div>
                        <div className="card-body">
                            <p>Our innovative web application development services are custom-built to meet the unique needs of businesses. Through the creation of responsive, user-friendly, and feature-rich web applications, we empower brands to enhance engagement and boost their online presence.</p>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={appDImg} alt="" />
                            <span className="h5 ms-4">Mobile App Development</span>
                        </div>
                        <div className="card-body">
                            <p>Experience the power of mobile application development tailored to your needs. Our expert team crafts intuitive, high-performance mobile apps that captivate users and drive business growth. Elevate your brand's presence in the palm of your users' hands.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={webMImg} alt="" />
                            <span className="h5 ms-4">Web Maintenance</span>
                        </div>
                        <div className="card-body">
                            <p>Ensure your website remains at its best with our comprehensive web maintenance services. From regular updates to performance optimizations, our team handles everything, allowing you to focus on your core business. Keep your online presence polished and secure with our reliable maintenance solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={webCImg} alt="" />
                            <span className="h5 ms-4">Web Consultation</span>
                        </div>
                        <div className="card-body">
                            <p>Unlock the full potential of your online presence with our expert web consultation services. From in-depth assessments to tailored strategies, we provide invaluable insights to enhance your digital footprint. Let us guide you through the complexities of the web landscape and pave the way for your online success.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={logoDImg} alt="" />
                            <span className="h5 ms-4">Logo Designing</span>
                        </div>
                        <div className="card-body">
                            <p>Elevate your brand with our custom logo design services. Our talented team crafts unique and impactful logos tailored to your company's identity, ensuring you stand out in today's competitive market. Let us bring your vision to life and create a logo that leaves a lasting impression.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
