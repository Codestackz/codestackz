import AOS from 'aos'
import 'aos/dist/aos.css'

import './contactusicons.css'
import { useEffect } from 'react'

const Contactusicons = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    })

    return (
        <>
            <div className="row justify-content-around ">
                <div className="col md-10 col-lg-9  mx-auto ">
                    <div className="row  p-5 pt-0 p-sm-5">
                        <div className='col-md-4 text-center mb-4' data-aos="fade-right">
                            <a href="tel:+919781789405">
                                <div className="iconshadow px-3 py-3">
                                    <i className="fa-solid fa-phone fs-2 mb-3" style={{ color: "#3652AD" }}></i> <br />
                                    <p className='fw-bold fs-5 mb-2'>Phone Number</p>
                                    <p>+91 9781789405</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-md-4 text-center mb-4' data-aos="fade-up">
                            <a href="mailto:info@codestackz.in">
                                <div className="iconshadow px-3 py-3">
                                    <i className="fa-solid fa-envelope fs-2 mb-3" style={{ color: "#3652AD" }}></i> <br />
                                    <p className='fw-bold fs-5 mb-2'>Email Address</p>
                                    <p>info@codestackz.in</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-md-4 text-center mb-4' data-aos="fade-left">
                            <div className="iconshadow px-3 py-3">
                                <i className="fa-brands fa-skype fs-2 mb-3" style={{ color: "#3652AD" }}></i> <br />
                                <p className='fw-bold fs-5 mb-2'>Skype</p>
                                <p>info@codestackz.in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactusicons;