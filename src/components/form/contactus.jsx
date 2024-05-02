import { useState, useRef, useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import contactusImg from '/images/contactFormImg2.webp'
import contactusImgBW from '/images/formbg.jpeg'

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

  textFielsCustomMui: {
    // Root class for the input field
    "& .MuiOutlinedInput-root": {
      color: "#FFFFFF",
      fontFamily: "Arial",
      // fontWeight: "bold",
      // Class for the border around the input field
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FFFFFF",
        borderWidth: "2px",
      },

    },
    // Class for the label of the input field
    "& .MuiInputLabel-outlined": {
      color: "#FFFFFF",
      fontWeight: "bold",
    },
  }
})

// Define custom styles using makeStyles
const useStyles2 = makeStyles({
  // Add your custom styles here
  root: {
    '& .MuiOutlinedInput-root': {
      borderColor: '#FE0A06',
      borderWidth: '2px',
    },
    '& .MuiInputLabel-outlined': {
      color: '#24FE06',
      fontWeight: 'bold',
    },
  },
  greenFocus: {
    // Use the green-focus class defined in CSS
    '& .MuiOutlinedInput-root': {
      color: '#06FAFE',
    },
    '& .MuiInputLabel-outlined': {
      color: '#D8FE06',
    },
    // This will apply the focused color only when the TextField is focused
    '& .Mui-focused': {
      color: '#FE06FE'
    }
  }
});


import Axios from 'axios'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './contactus.css'
import { json } from 'react-router-dom';


const ContactusForm = () => {

  const classes = useStyles();


  useEffect(() => {
    AOS.init({ duration: 1000 });
  })



  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const serviceTypeRef = useRef(null);
  const aboutProjectRef = useRef(null);

  const [inputErr, setInputErr] = useState({ name: "", email: "", contact: "", serviceType: "", aboutProject: "", submitted: "", submitErr: "", loading: "" })
  const [selectValue, setSelectValue] = useState('none');
  console.log(selectValue);

  const emptyErr = () => {
    setInputErr(prevState => ({ ...prevState, loading: "" }))

    setTimeout(() => {
      let eles = document.getElementsByClassName('alert');
      for (let i = 0; i < eles.length; i++) {
        eles[i].classList.add('fadeOut');
      }

    }, 2000);

    setTimeout(() => {
      setInputErr({ name: "", email: "", contact: "", serviceType: "", aboutProject: "", submitted: "", submitErr: "", loading: "" });
    }, 3700)

  }

  const handleSelect = (e) => {
    setSelectValue(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(nameRef.current.value)

    let name = nameRef.current.value.trim();
    let email = emailRef.current.value.trim();
    let contact = contactRef.current.value.trim();
    let serviceType = selectValue;
    let aboutProject = aboutProjectRef.current.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name == "") {
      setInputErr(prevState => ({ ...prevState, name: "Please enter" }));
      emptyErr();
      nameRef.current.focus();
      return;
    } else {
      setInputErr(prevState => ({ ...prevState, name: "" }));
    }
    if (email == "") {
      setInputErr(prevState => ({ ...prevState, email: "Please enter" }));
      emptyErr();
      emailRef.current.focus();
      return;
    }
    else if (!emailRegex.test(email)) {
      setInputErr(prevState => ({ ...prevState, email: "Please enter correct" }));
      emptyErr();
      emailRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, email: "" }));
    }

    if (contact == "") {
      setInputErr(prevState => ({ ...prevState, contact: "Please enter" }));
      emptyErr();
      contactRef.current.focus();
      return;
    } else if (contact.length < 10) {
      setInputErr(prevState => ({ ...prevState, contact: "Please enter correct" }));
      emptyErr();
      contactRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, contact: "" }));
    }

    if (serviceType == "none") {
      setInputErr(prevState => ({ ...prevState, serviceType: "Please select" }));
      emptyErr();
      serviceTypeRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, serviceType: "" }));
    }

    if (aboutProject == "") {
      setInputErr(prevState => ({ ...prevState, aboutProject: "Please tell something" }));
      emptyErr();
      aboutProjectRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, aboutProject: "" }));
    }

    if (grecaptcha.getResponse() == "") {
      var submitButton = document.getElementById('formSubmitBtn');
      submitButton.classList.add('shake');
      setTimeout(function () {
        submitButton.classList.remove('shake');
      }, 1000);
      return false;
    }

    // alert("form is valid to submit.")
    setInputErr(prevState => ({ ...prevState, loading: "yes" }))

    const submitFunc = async () => {
      const obj = { name: name, email: email, contact: contact, serviceType: serviceType, aboutProject: aboutProject }
      obj["g-recaptcha-response"] = grecaptcha.getResponse();

      try {
        const response = await Axios({
          url: 'https://formspree.io/f/xnqeggpo',
          method: 'post',
          headers: {
            'Accept': 'application/json'
          },
          data: obj
        });
        // console.log("aaaaaaaaaaaaaaa", response)
        if (response && response.status == 200) {
          setInputErr(prevState => ({ ...prevState, submitted: "Submitted Successfully." }))
          emptyErr();
          nameRef.current.value = ""
          emailRef.current.value = ""
          contactRef.current.value = ""
          serviceTypeRef.current.value = "none"
          aboutProjectRef.current.value = ""

        }
      } catch (err) {
        // console.log("BBBBBBBBBBBBBBBBBB", err)
        if (err) {
          setInputErr(prevState => ({ ...prevState, submitErr: "Something went wrong." }))
          emptyErr();
        }

      }
    };
    submitFunc();

  }



  return (
    <>
      <section>


        <div className="text-center p-5 pb-2 pb-sm-4 letConnectHeading ">
          <h1 style={{ fontFamily: "Headers !important", fontSize: "30px", fontWeight: "500" }} data-aos="flip-right">Lets Connect</h1>
        </div>

        <div className="row letConnectMain ">

          <div className="col-md-12 d-block d-lg-none" data-aos="fade-right">
            <div id='formbg' style={{ backgroundImage: `url(${contactusImgBW})`, backgroundPosition:"right" }}>

            </div>
          </div>

          <div className="offset-lg-1 col-md-12 col-lg-6 mdForm">
            <div className='' data-aos="fade-left">
              <form action=" " id='contactusForm' >
                <div className="row" >
                  <div className="col-xs-12 col-sm-9 col-md-6 mx-auto">
                    <div className="inputFieldOuterDiv" >
                      <TextField
                        id=""
                        label="Name"
                        type='text'
                        fullWidth
                        inputRef={nameRef}
                        // className={`${classes.textFielsCustomMui}`}
                        sx={{
                          // Root class for the input field
                          "& .MuiOutlinedInput-root": {
                            color: "#FFFFFF",
                            fontFamily: "Arial",
                            // fontWeight: "bold",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FFFFFF",
                              borderWidth: "2px",
                            },
                          },
                          "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                          },
                          // Class for the label of the input field
                          "& .MuiInputLabel-outlined": {
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          },
                        }}
                      />
                      <br />
                    </div>
                    <div className='errField'>
                      <div id='errAlertName' className={`alert alert-danger d-flex align-items-center ${inputErr.name ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-9 col-md-6 mx-auto">
                    <div className="inputFieldOuterDiv" >
                      <TextField
                        id=""
                        label="Email"
                        type='email'
                        fullWidth
                        inputRef={emailRef}
                        // className={`${classes.textFielsCustomMui}`}
                        sx={{
                          // Root class for the input field
                          "& .MuiOutlinedInput-root": {
                            color: "#FFFFFF",
                            fontFamily: "Arial",
                            // fontWeight: "bold",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FFFFFF",
                              borderWidth: "2px",
                            },
                          },
                          "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                          },
                          // Class for the label of the input field
                          "& .MuiInputLabel-outlined": {
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          },
                        }}
                      />
                      <br />
                    </div>
                    <div className='errField'>
                      <div id='errAlertEmail' className={`alert alert-danger d-flex align-items-center ${inputErr.email ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-9 col-md-6 mx-auto">
                    <div className="inputFieldOuterDiv" >
                      <TextField
                        id=""
                        label="Contact"
                        type='number'
                        fullWidth
                        inputRef={contactRef}
                        // className={`${classes.textFielsCustomMui}`}
                        sx={{
                          // Root class for the input field
                          "& .MuiOutlinedInput-root": {
                            color: "#FFFFFF",
                            fontFamily: "Arial",
                            // fontWeight: "bold",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FFFFFF",
                              borderWidth: "2px",
                            },
                          },
                          "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                          },
                          // Class for the label of the input field
                          "& .MuiInputLabel-outlined": {
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          },
                        }}
                      />
                      <br />
                    </div>
                    <div className='errField'>
                      <div id='errAlertContact' className={`alert alert-danger d-flex align-items-center ${inputErr.contact ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-9 col-md-6 mx-auto">
                    <div className="inputFieldOuterDiv" >
                      {/* <Box sx={{ minWidth: 10 }}> */}
                      {/* <FormControl fullWidth> */}
                      <TextField
                        select
                        label="Service Type"
                        value={selectValue}
                        fullWidth
                        inputRef={serviceTypeRef}
                        onChange={handleSelect}
                        SelectProps={{
                          sx: {
                            "& .MuiSelect-icon": {
                              color: '#FFFFFF',
                            },
                          },
                        //   multiple:true
                        }}
                        sx={{
                          // Root class for the input field
                          "& .MuiOutlinedInput-root": {
                            color: "#FFFFFF",
                            fontFamily: "Arial",
                            // fontWeight: "bold",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FFFFFF",
                              borderWidth: "2px",
                            },
                          },
                          "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                          },
                          // Class for the label of the input field
                          "& .MuiInputLabel-outlined": {
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        <MenuItem value={'none'} sx={{}}  >None</MenuItem>
                        <MenuItem value={'webDev'}>Web Development</MenuItem>
                        <MenuItem value={'appDev'}>App Development</MenuItem>
                        <MenuItem value={'webMaintenance'}>Web Maintenance</MenuItem>
                        <MenuItem value={'webConsultancy'}>Web Consultancy</MenuItem>
                        <MenuItem value={'logoDesigning'}>Logo Designing</MenuItem>
                      </TextField>
                      {/* </FormControl> */}
                      {/* </Box> */}
                      <br />
                    </div>
                    <div className='errField'>
                      <div id='errAlertServiceType' className={`alert alert-danger d-flex align-items-center ${inputErr.serviceType ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.serviceType}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-9 col-md-8 mx-auto">
                    {/* <div className="col-xs-12 col-sm-9 col-md-6 mx-auto"> */}
                    <div className="inputFieldOuterDiv" >
                      <TextField
                        id=""
                        label="Tell us more about your project     "
                        multiline
                        fullWidth
                        rows={5}
                        inputRef={aboutProjectRef}
                        // className={`${classes.textFielsCustomMui}`}
                        sx={{
                          // Root class for the input field
                          "& .MuiOutlinedInput-root": {
                            color: "#FFFFFF",
                            fontFamily: "Arial",
                            // fontWeight: "bold",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FFFFFF",
                              borderWidth: "2px",
                            },
                          },
                          "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#ccc",
                            },
                          },
                          // Class for the label of the input field
                          "& .MuiInputLabel-outlined": {
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          },
                        }}
                      />
                      <br />
                    </div>
                    <div className='errField'>
                      <div id='errAlertAboutProject' className={`alert alert-danger d-flex align-items-center ${inputErr.aboutProject ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.aboutProject}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                </div>
                <div className='row'>
                  <div id='captchaDiv' className='col-xs-12 col-sm-12 col-md-12 mx-auto mb-4'>
                    <ReCAPTCHA
                      sitekey="6LfxLKopAAAAAML1BnOqMysKyMr1cn4E7HCE1Aqa"
                    // localhost:6LelFqspAAAAABsFc1tSuUzd2WADcMLj5wkzquon
                    // production:6LfxLKopAAAAAML1BnOqMysKyMr1cn4E7HCE1Aqa
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-xs-12 col-sm-9 col-md-4 mx-auto ">
                    <button id='formSubmitBtn' className='btn btn-lg' style={{}} onClick={handleSubmit}>
                      <div className={`fs-5 my-1 ${inputErr.loading ? "d-none" : ""}`}>Submit</div>

                      <div className={`spinner-border text-white ${inputErr.loading ? "" : "d-none"}`} style={{ maxHeight: "32px" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </button>
                  </div>
                  <div className="col-md-8"></div>

                </div>
                <div className="row " style={{ minHeight: "60px" }}>
                  <div className="col-md-12 mx-auto ">
                    <div className='successField w-100 ' >
                      <div id='successAlert' className={`alert alert-success d-flex align-items-center px-5 p-2 ${inputErr.submitted ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-check text-success"></i>
                        </div>
                        <div>
                          {inputErr.submitted}
                        </div>
                      </div>
                    </div>

                    <div className='successFailed w-100  ' >
                      <div id='failedAlert' className={`alert alert-danger d-flex align-items-center px-5 p-2   ${inputErr.submitErr ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.submitErr}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4 d-none d-lg-block" data-aos="fade-right">
            <div style={{ border: "0px solid rgba(19, 6, 34, 0.926)", backgroundImage: `url(${contactusImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom", width: "100%", height: "100%" }}>

            </div>
          </div>

        </div >
      </section >
    </>
  )
}

export default ContactusForm;