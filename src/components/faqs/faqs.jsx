import './faqs.css'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Faqs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    })

    return (
        <>
            <section style={{backgroundColor:"aliceblue", padding: "0px 26px"}}>
                <h1 className="text-center faqheader" style={{fontSize:"30px"}}>
                    Frequently Asked Questions
                </h1>
                <div>
                    <div className="row pb-5">
                        <div className="col-md-9 col-sm-10 mx-auto p-0 mb-1 col-xs-11" data-aos="fade-up">
                            <div className="faqDiv">
                                <div className="que" data-bs-toggle="collapse" href="#faqans1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <a >
                                        <div className='row fw-bolder '>
                                            <div className="col-md-11 customWidthQuestion">
                                                Do you provide ongoing support after project completion?
                                            </div>
                                            <div className="col-md-1 customWidthBar">
                                                <div className='bardiv d-flex align-items-center'>
                                                    <span className='bar'></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='fw-bolder'>
                                            Do you provide ongoing support after project completion?
                                            <div className='bardiv '>
                                                <span className='bar'></span>
                                            </div>
                                        </div> */}
                                    </a>
                                </div>

                                <div className="collapse " id="faqans1">
                                    <div className="ans">
                                        Yes, we provide ongoing support to ensure that you are satisfied with our services even after the project is completed. Whether you have questions, need update, or require assistance, our team is here to help.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-10 mx-auto p-0 mb-1" data-aos="fade-up">
                            <div className="faqDiv">
                                <div className="que" data-bs-toggle="collapse" href="#faqans2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <a >
                                        <div className='row fw-bolder '>
                                            <div className="col-md-11 customWidthQuestion">
                                                How long does it take to complete a project?
                                            </div>
                                            <div className="col-md-1 customWidthBar">
                                                <div className='bardiv d-flex align-items-center'>
                                                    <span className='bar'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="collapse" id="faqans2">
                                    <div className="ans">
                                        The project timeline depends on various factors such as the scope of work, complexity, and client requirements. We'll provide you with a detailed timeline during the initial consultation phase so you know exactly what to expect.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-10 mx-auto p-0 mb-1" data-aos="fade-up">
                            <div className="faqDiv">
                                <div className="que" data-bs-toggle="collapse" href="#faqans3" role="button" aria-expanded="false" aria-controls="collapseExample">

                                    <a >
                                        <div className='row fw-bolder '>
                                            <div className="col-md-11 customWidthQuestion">
                                                Is it possible to request a customized service package?                                            </div>
                                            <div className="col-md-1 customWidthBar">
                                                <div className='bardiv d-flex align-items-center'>
                                                    <span className='bar'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="collapse" id="faqans3">
                                    <div className="ans">
                                        Absolutely! We understand that every client's needs are unique, so we offer customized service packages tailored to your specific requirements. Simply let us know your preferences, and we'll create package just for you.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-10 mx-auto p-0 mb-1" data-aos="fade-up">
                            <div className="faqDiv">
                                <div className="que" data-bs-toggle="collapse" href="#faqans4" role="button" aria-expanded="false" aria-controls="collapseExample">

                                    <a >
                                        <div className='row fw-bolder '>
                                            <div className="col-md-11 customWidthQuestion">
                                                What types of payment methods do you accept?
                                            </div>
                                            <div className="col-md-1 customWidthBar">
                                                <div className='bardiv d-flex align-items-center'>
                                                    <span className='bar'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="collapse" id="faqans4">
                                    <div className="ans">
                                        We accept various payment methods, including credit/debit cards, PayPal, bank transfer, and online payment gateways. You can choose the option that is most convenient for you.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-10 mx-auto p-0 mb-1" data-aos="fade-up">
                            <div className="faqDiv">
                                <div className="que" data-bs-toggle="collapse" href="#faqans5" role="button" aria-expanded="false" aria-controls="collapseExample">

                                    <a >
                                        <div className='row fw-bolder '>
                                            <div className="col-md-11 customWidthQuestion">
                                                How do I get started with your services?
                                            </div>
                                            <div className="col-md-1 customWidthBar">
                                                <div className='bardiv d-flex align-items-center'>
                                                    <span className='bar'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="collapse" id="faqans5">
                                    <div className="ans">
                                        To get started, simply reach out to us via phone, email, or our website contact form. Once we understand your requirements, we'll guide you through the process and provide you with a tailored solution.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-10 mx-auto p-0 mb-1" data-aos="fade-up">
                            <div className="faqDiv">
                                <div className="que" data-bs-toggle="collapse" href="#faqans6" role="button" aria-expanded="false" aria-controls="collapseExample">

                                    <a >
                                        <div className='row fw-bolder '>
                                            <div className="col-md-11 customWidthQuestion">
                                                How do you communicate and collaborate with you clients?
                                            </div>
                                            <div className="col-md-1 customWidthBar">
                                                <div className='bardiv d-flex align-items-center'>
                                                    <span className='bar'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="collapse" id="faqans6">
                                    <div className="ans">
                                        We believe in open communication and transparency. We assign dedicated project manager and utilize collaboration tools to keep you informed and involved throughout the process.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-10 mx-auto p-0 mb-1" data-aos="fade-up">
                            <div className="faqDiv">
                                <div className="que" data-bs-toggle="collapse" href="#faqans7" role="button" aria-expanded="false" aria-controls="collapseExample">

                                    <a >
                                        <div className='row fw-bolder '>
                                            <div className="col-md-11 customWidthQuestion">
                                                How much does it cost to work with your agency?
                                            </div>
                                            <div className="col-md-1 customWidthBar">
                                                <div className='bardiv d-flex align-items-center'>
                                                    <span className='bar'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="collapse" id="faqans7">
                                    <div className="ans">
                                        The cost depends on your specific needs and chosen services. We offer transparent pricing models and provide detailed proposals before work begins.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </section>

        </>
    )
}

export default Faqs;