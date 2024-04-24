import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


import './footer.css'
import cszlogo from '/images/cszlogo.webp'
const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: "true" });
    })


    return (
        <>
            <div>
                <div className="row p-5 footerMain " data-aos="fade-up">
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter'>
                            <span className="h5">CodeStackZ</span>
                            <ul style={{ padding: "10px 20px", }}>
                                <Link to={'/'} onClick={() => window.scrollTo(0, 0)}><li>Home</li></Link>
                                <Link to={'/'} onClick={() => {
                                    // const section = document.getElementById("ourservices");
                                    // // if (section) {
                                    // //     section.scrollIntoView();
                                    // // }
                                    // // const path = window.location.pathname;
                                    // if (section) {
                                    //     const topOffset = section.getBoundingClientRect().top + window.scrollY - 92;
                                    //     window.scrollTo({ top: topOffset, behavior: 'smooth' });
                                    // } else {
                                    //     setTimeout(() => {
                                    //         window.location.href = "/#ourservices";
                                    //     }, 100);
                                    // }
                                    setTimeout(() => {
                                        const section = document.getElementById("ourservices");
                                        // alert(section);
                                        if (section) {
                                            const topOffset = section.getBoundingClientRect().top + window.scrollY - 92;
                                            window.scrollTo({ top: topOffset, behavior: 'smooth' });
                                        }       
                                    }, 50);
                                    // window.scrollTo(0, 930);

                                }}><li>Services</li></Link>
                                <Link to={'/aboutus'} onClick={() => window.scrollTo(0, 0)}><li>About us</li></Link>
                                <Link to={'/contactus'} onClick={() => window.scrollTo(0, 0)}><li>Contact us</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter' >

                            <span className="h5">Web Development</span>
                            <ul style={{ padding: "10px 20px" }}>
                                <li>Custom Web</li>
                                <li>NodeJs</li>
                                <li>ReactJs</li>
                                <li>More</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter'>

                            <span className="h5">Mobile App Development </span>
                            <ul style={{ padding: "10px 20px" }}>
                                <li>Android App</li>
                                <li>iOS App</li>
                                <li>Hybrid App</li>
                                <li>React Native</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter' >

                            <span className="h5">Contact Us</span>
                            <ul style={{ padding: "10px 20px" }}>
                                <li><a href="tel:9781789405" style={{ textDecoration: "none" }}>978 1789 405</a></li>
                                <li><a href="mailto:info@codestackz.in" style={{ textDecoration: "none" }}>info@codestackz.in</a></li>
                                <li type="none" className='mt-3'>
                                    <a href="https://www.instagram.com/codestackz" target='_blank'>
                                        <i className="fa-brands fa-instagram fw-bold fs-3 me-2"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa-brands fa-linkedin-in fs-3 me-2"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa-brands fa-skype fs-3"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row footerBottom " style={{ backgroundColor: "#E9F6FF" }}>
                    <div className="col d-flex align-items-center justify-content-between">
                        <div id='footerBottomBrandname'>
                            <Link to={'/'}  onClick={() => window.scrollTo(0, 0)}>
                                <img src={cszlogo} style={{ width: "40px", height: "40px", marginRight: "5px" }}></img>
                            </Link>
                            <i className="fa-regular fa-copyright" style={{ color: "#000000" }}></i> <span className='fw-bold'>2024 Codestackz</span>
                        </div>
                        {/* <div className="float-end" id='footberBottomSocial'>
                            <i className="fa-brands fa-instagram fs-3 fw-bold me-3" style={{ color: "#000000" }}></i>
                            <i className="fa-brands fa-linkedin-in fs-3 me-3" style={{ color: "#000000" }}></i>
                            <i className="fa-brands fa-x-twitter fs-3" style={{ color: "#000000" }}></i>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;