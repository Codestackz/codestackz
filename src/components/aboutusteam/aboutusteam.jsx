import gursewak from '/images/ourteam/gursewak.webp'
import parshant from '/images/ourteam/parshant.webp'
import balwinder from '/images/ourteam/balwinder.webp'
import akashdeep from '/images/ourteam/akashdeep.webp'
import lovish from '/images/ourteam/lovish.webp'

import AOS from 'aos'

import './aboutusteam.css'
import { useEffect } from 'react'
const AboutusTeam = () => {


    useEffect(()=>{
        const eles = document.getElementsByClassName('iconshadow');
        Array.from(eles).forEach(ele=>{
            ele.setAttribute('data-aos',"fade-up");
        })
        AOS.init({duration:1000,once:"true"})
    })

    return (
        <>
            <section>
                <h1 className="text-center py-4" style={{fontSize:"30px"}}>
                    Our Leadership
                </h1>
                <div className="row justify-content-evenly  px-5 pb-5">
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card imgCardWidth">
                            <div className="card-body p-0 imgWidth"  >
                                <img src={gursewak} alt="Gursewak Singh" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Gursewak Singh</h3>
                                <h5 className='text-danger'>Project Manager</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card imgCardWidth">
                            <div className="card-body p-0 imgWidth"  >
                                <img src={parshant} alt="Parshant Khichi" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Parshant Khichi</h3>
                                <h5 className='text-danger'>UI/UX Designer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card imgCardWidth">
                            <div className="card-body p-0 imgWidth"  >
                                <img src={balwinder} alt="Balwinder Singh" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Balwinder Singh</h3>
                                <h5 className='text-danger'>Content Writer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card imgCardWidth">
                            <div className="card-body p-0 imgWidth"  >
                                <img src={akashdeep} alt="Akashdeep Singh" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Akashdeep Singh</h3>
                                <h5 className='text-danger'>Business Developer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card imgCardWidth">
                            <div className="card-body p-0 imgWidth"  >
                                <img src={lovish} alt="Lovish Bansal" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Lovish Bansal</h3>
                                <h5 className='text-danger'>Web Developer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutusTeam;