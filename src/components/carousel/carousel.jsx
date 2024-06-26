import carouselImg from '/images/mainCarouselImg.webp'
import { Link } from 'react-router-dom';
import './carousel.css'
const Carousel = () => {
    return (
        <>
            <div id="carouselDiv">
                <div className='row ' style={{ height: "100%" }}>
                    <div className="col-md-12 d-block d-lg-none p-0" style={{position:"relative"}}>
                        <div className='mx-auto ' style={{ width: "100%", height: "100%", backgroundImage: `url(${carouselImg})`, backgroundSize: "cover", backgroundPositionX: "center", backgroundRepeat: "no-repeat", filter: "blur(10px)" }}>
                        </div>
                        <div className='w-75 text-center' style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "4" }}>
                            <h1 className='fw-bold mb-4' style={{ textShadow: "3px 3px 4px white" }}>Web Designing and Mobile App <span style={{color:"#3652AD"}}>Development Company</span></h1>
                            <p className='fw-5 fs-5 mb-xl-5 mb-lg-3'>Embrace innovation and elevate your company's trajectory with our specialized development solutions.</p>
                            <Link className='btn btn-lg carouselBtn d-none d-sm-block mx-auto'  style={{width:"fit-content", }} to={'/contactus'} onClick={() => window.scrollTo(0, 0)}>Seek A Consultation</Link>
                            <Link className='btn btn-lg carouselBtn d-block d-sm-none mx-auto'  style={{ width:"fit-content"}} to={'/contactus'} onClick={() => window.scrollTo(0, 0)}>Explore</Link>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 p-0 my-auto d-none d-lg-block ">
                        <div className="mx-auto ms-lg-auto me-lg-5 p-md-4" style={{ width: "70%", color: "black" }}>
                            <h1 className='fw-bold mb-4'>Web Designing and Mobile App Development Company</h1>
                            <p className='fw-bold fs-5 mb-xl-5 mb-lg-3 d-none d-sm-block'>Embrace innovation and elevate your company's trajectory with our specialized development solutions.</p>
                            <Link className='btn btn-lg  carouselBtn'to={'/contactus'} onClick={() => window.scrollTo(0, 0)}>Seek a Consultation</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 d-none d-lg-block ">
                        <div className='' style={{ width: "70%", height: "100%", backgroundImage: `url(${carouselImg})`, backgroundSize: "cover",backgroundPositionX:"center", backgroundRepeat: "no-repeat"}}>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Carousel;