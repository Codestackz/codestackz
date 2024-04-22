import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos'

import "./navbar.css"
import cszlogo from '/images/cszlogo.webp'
const NavBar = () => {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    // Even listern to fix Navbar after scrolling a bit 
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);


    // AOS 

    AOS.init({ duration: 2000 });


    // Clean up the event listener

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <>
      <nav className={`navbar navbar-expand-xl py-3 ltblue ${isNavbarFixed ? 'fixed-top' : ''}`}  >
        <div className="container" >
          <Link className="navbar-brand fs-3 fw-bold text-white d-block d-xl-none" id="brandName" to={'/'} data-aos="fade-right" onClick={() => window.scrollTo(0, 0)}><img src={cszlogo} style={{ width: "50px", height: "50px", marginRight: "5px" }}></img>CodeStack<span className="text-danger">Z</span></Link>
          <Link className="navbar-brand fs-3 fw-bold text-white d-none d-xl-block" id="brandName" to={'/'} onClick={() => window.scrollTo(0, 0)}><img src={cszlogo} style={{ width: "50px", height: "50px", marginRight: "5px" }}></img>CodeStack<span className="text-danger">Z</span></Link>
          <a className="btn ltblue me-3 ms-auto d-md-none navButton xxsHide" href='tel:9781789405' style={{ paddingInline: ".8rem " }} data-aos="fade-left"><i className="fa-solid fa-phone fs-5"></i></a>
          <Link className="btn ltblue px-3 me-4 d-md-none navButton xxsHide" to={'/contactus'} data-aos="fade-left" onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-clipboard-question fs-4"></i></Link>
          <a className="btn px-3 me-3 ms-auto d-none d-md-block d-xl-none float-end ltblue navButton" href='tel:9781789405' data-aos="fade-left">978 1789 405</a>
          <Link className="btn ltblue px-3 me-4 d-none d-md-block d-xl-none  float-end navButton" to={'/contactus'} data-aos="fade-left" onClick={() => window.scrollTo(0, 0)}>Quote on the house</Link>
          <button className="rounded-3 ltblue text-white d-block d-xl-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" data-aos="fade-left">
            <i className="fa-solid fa-bars" style={{ fontSize: "36px" }}></i>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><a className="navbar-brand fs-3 fw-bold text-white" id="brandName" href="#"><img src={cszlogo} style={{ width: "47px", height: "47px", marginRight: "5px" }}></img></a></h5>
              <button className="fa-solid fa-xmark border-0 bg-white " style={{ fontSize: "38px" }} data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body  ps-0 customCanvas" style={{ minWidth: "600px" }}>
              <ul className="navbar-nav justify-content- flex-grow-1 pe-3">
                <li className="nav-item ms-xl-auto me-2 custombg">
                  <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link className="nav-link navLink" aria-current="page" to={'/'} onClick={() => window.scrollTo(0, 0)} >Home</Link>
                  </div>
                </li>
                {/* <li className="nav-item me-2 custombg">
                <div  data-bs-dismiss="offcanvas" aria-label="Close">
                  <a className="nav-link navLink" href="#">Link</a>
                  </div>
                </li> */}
                <li className="nav-item dropdown custombg">
                  <span className="nav-link dropdown-toggle navLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </span>
                  <div className="dropdown-menu w-100 border-0 text-white servicesDropdownDiv ms-4 mb-4" >
                    <ul type='none' className="p-0">
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        {/* <Link to={'/services/webdevelopment'}> */}
                          <li className="servicesNavLink">
                            Web Development
                          </li>
                        {/* </Link> */}
                      </div>
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        {/* <Link to={'/services/webdevelopment'}> */}
                          <li className="servicesNavLink">
                            Mobile App Development
                          </li>
                        {/* </Link> */}
                      </div>
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        {/* <Link to={'/services/webdevelopment'}> */}
                          <li className="servicesNavLink">
                            Web Maintenance
                          </li>
                        {/* </Link> */}
                      </div>
                      <div data-bs-dismiss="offcanvas" aria-label="Close">
                        {/* <Link to={'/services/webdevelopment'}> */}
                          <li className="servicesNavLink servicesNavLinkWebConsult">
                            Web Consultancy
                          </li>
                        {/* </Link> */}
                      </div>
                    </ul>
                  </div>
                </li>
                <li className="nav-item me-2 custombg">
                  <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link className="nav-link navLink" aria-current="page" to={'/aboutus'} onClick={() => window.scrollTo(0, 0)}>About us</Link>
                  </div>
                </li>
                <li className="nav-item me-2 custombg navLinkContact" >
                  <div data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link className="nav-link navLink" to={'/contactus'} onClick={() => window.scrollTo(0, 0)}>Contact us</Link>
                  </div>
                </li>

                <li className="ms-auto d-none d-xl-block">
                  <a className="btn ltblue px-4  d-none d-lg-block d-xl-block navButton" href='tel:9781789405'>978 1789 405</a>
                </li>
                <li className="ms-3 d-none d-xl-block">
                  <Link className="btn ltblue px-4  d-none d-lg-block d-xl-block navButton" to={'/contactus'} onClick={() => window.scrollTo(0, 0)}>Quote on the house</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className={`${isNavbarFixed ? 'd-block' : 'd-none'}`} style={{ height: "92px" }}>
      </div>
    </>
  )
}

export default NavBar;