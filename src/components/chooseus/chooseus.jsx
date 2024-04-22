import chooseusimg1 from '/images/chooseus/investigation.webp'
import chooseusimg2 from '/images/chooseus/solution.webp'
import chooseusimg3 from '/images/chooseus/proof-of-concept.webp'
import chooseusimg4 from '/images/chooseus/customer-satisfaction.webp'
import chooseusimg5 from '/images/chooseus/continuous-improvement.webp'

import AOS from 'aos'
import 'aos/dist/aos.css'


import './chooseus.css'
import { useEffect } from 'react'

const Chooseus = () => {

    useEffect(()=>{
        AOS.init({duration:700,once:"true"});
    })
    return (
        <>
            <section className='reasonsDiv' data-aos="fade-up">
                <h1 className="py-4 text-center mb-4" style={{fontSize:"30px"}}>
                    Reasons to choose Codestackz
                </h1>
                <div className="row p-4 pb-5">
                    <div className="col-lg-4 col-md-6 mb-4  ">
                        <div className="pb-2 h-100 reasonshov">
                            <div className='p-4 bg-white h-100 chooseusCards'>
                                <div className='d-flex align-items-center'>
                                    <img className="me-4" src={chooseusimg1} alt="" style={{ width: "60px", height: "60px" }} />
                                    <h6 className='h5'>Problem Identification</h6>
                                </div>
                                <div className='mt-3'>
                                    <p>Clearly articulate the problem or pain point that your product or service addresses. Identify the challenges or frustrations faced by your target audience that your solution aims to solve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 ">
                        <div className="pb-2 h-100 reasonshov" >
                            <div className='p-4 bg-white h-100 chooseusCards'>
                                <div className='d-flex align-items-center'>
                                    <img className="me-4" src={chooseusimg2} alt="" style={{ width: "60px", height: "60px" }} />
                                    <h5 className='h5'>Unique Solution</h5>
                                </div>
                                <div className='mt-3'>
                                    <p>Highlight how your product or service provides a unique and innovative solution to the identified problem. Explain what sets your offering apart from existing alternatives in the market.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="pb-2 h-100 reasonshov">
                            <div className='p-4 bg-white h-100 chooseusCards'>
                                <div className='d-flex align-items-center'>
                                    <img className="me-4" src={chooseusimg3} alt="" style={{ width: "60px", height: "60px" }} />
                                    <h5 className='h5'>Proof of Concept</h5>
                                </div>
                                <div className='mt-3'>
                                    <p>Provide evidence or examples that demonstrate the effectiveness and reliability of your solution. Share case studies, success stories, or testimonials from satisfied customers to validate your value proposition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="pb-2 h-100 reasonshov">
                            <div className='p-4 bg-white h-100 chooseusCards'>
                                <div className='d-flex align-items-center'>
                                    <img className="me-4" src={chooseusimg4} alt="" style={{ width: "60px", height: "60px" }} />
                                    <h5 className='h5'>Customer Value</h5>
                                </div>
                                <div className='mt-3'>
                                    <p>Emphasize the value that your solution delivers to customers in terms of time savings, cost efficiency, convenience, improved productivity, or other tangible benefits. Explain how your offering improves the lives or businesses of your target audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="pb-2 h-100 reasonshov">
                            <div className='p-4 bg-white h-100 chooseusCards'>
                                <div className='d-flex align-items-center'>
                                    <img className="me-4" src={chooseusimg5} alt="" style={{ width: "60px", height: "60px" }} />
                                    <h5 className='h5'>Continuous Improvement</h5>
                                </div>
                                <div className='mt-3'>
                                    <p>Be open to feedback from customers and iterate on your value proposition based on their insights and experiences. Stay agile and adaptable to evolving market trends and customer preferences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chooseus;