import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
    const [submit, setSubmit] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        Aos.init({duration:2000})
       })


    const handleSubmission = (e) => {
        e.preventDefault();
        if (data.name && data.email && data.subject && data.message) {
            emailjs.send('service_2yxrxru', 'template_19ubugu', data, 'ygbAjDlYK-Hd1Hn7Y')
                .then((response) => {
                    setSubmit(true)
                }).catch((error) => {
                    setSubmit(false)
                    setData({...data,
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                });
        }
    };

    useEffect(() => {
        let id = setInterval(() => {
            setSubmit(false);
            
        }, 5000)

        if(!submit){
            setData({...data,
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        };

        return() =>{
            clearInterval(id)
        }
        
    }, [submit]);

    return (
        <Container id='contact'>
            <div className='contact'>
                <div className='contactText'>
                    <div>
                        <h1 style={{ color: 'teal' }}>Contact Me</h1>
                    </div>
                    <div className='middleSection'>
                        <div data-aos='fade-right'>
                            <PhoneIcon fontSize="large" />
                            <h1>Phone</h1>
                            <p>Here is My Phone Number</p>
                            <a href="tel:+91-9501861901" rel="noreferrer" target="_blank">
                                <p>+91-9501861901</p>
                            </a>
                        </div>
                        <div  data-aos='fade-up'>
                            <EmailIcon fontSize="large"/>
                            <h1>Email</h1>
                            <p>You can Simply mail me just by clicking on my email</p>
                            <a href='mailto:shekhar74suman@gmail.com' rel="noreferrer" target="_blank"><p>shekhar74suman@gmail.com</p></a>
                        </div>
                        <div data-aos='fade-left'>
                            <LocationOnIcon fontSize="large" />
                            <h1>Location</h1>
                            <p>Deoghar, Jharkhand</p>
                            <a href="https://www.google.com/maps/place/Deoghar,+Jharkhand/@24.4741375,86.6301659,12z/data=!3m1!4b1!4m5!3m4!1s0x39f116280f130f01:0xed8ba5a38d873e4b!8m2!3d24.485179!4d86.694785" rel="noreferrer" target="_blank">
                                <p>View on Google map</p>
                            </a>
                        </div>
                    </div>
                </div>
                {submit && <>
                    <div className='emailSent'>
                        <h1 style={{ color: '#01a479' }}>Email Sent Successfully.</h1>
                        <p>Thank you <span style={{ fontWeight: 'bold' }}>{data.name}</span>, your message has been submitted to us.</p>
                    </div>
                </>}
                <div className='contactForm'>
                    <form action="" onSubmit={handleSubmission}>
                        <div>
                            <input value={submit?'':data.name} type="text" name='name'  placeholder='Name' onChange={(e) => setData({ ...data, name: e.target.value })} />
                            <input value={submit?'':data.email} type="email" name='email' placeholder='Email' onChange={(e) => setData({ ...data, email: e.target.value })} />
                            <input value={submit?'':data.subject} type="text" name='subject' placeholder='Subject' onChange={(e) => setData({ ...data, subject: e.target.value })} />
                        </div>
                        <div>
                            <textarea value={submit?'':data.message} type="text" name='message' placeholder='Your Message' onChange={(e) => setData({ ...data, message: e.target.value })} />
                            <div>
                                <button type='submit'  data-aos='flip-left'>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className='endSection'>
                <p>© 2022 Shekhar Suman.</p>
            </div>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    // background-color:white;
    .contact{
        width:85%;
        margin:auto;
        padding-top:20px;
        display:flex;
        flex-direction:column;
        gap:30px;
        
        
    }

    .middleSection{
        display:flex;
        justify-content:space-around;
    }

    .middleSection>div{
        padding:10px;
    }

    .middleSection>div>h1{
       font-size:x-large;
       margin-top:0px;
       
    }
    .middleSection>div p{
        margin-top:0px;
    }

    .middleSection>div a{
        text-decoration:none;
        color:teal;
     }

    .contactForm>form{
        display:flex;
        gap:10px;
    }
    .contactForm>form>div{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:50%;
    }
    .contactForm>form>div>input{
        width:95%;
        padding:5px 5px 5px 15px;
        border:1px solid #e9ecef;
        border-radius:8px;
    }
    
    .contactForm>form>div:first-child>input{
        height:30px;
        margin-bottom:30px;
    }

    .contactForm>form>div:last-child>textarea{
        width:95%;
        height:175px;
        margin-bottom:30px;
        position:relative;
        padding:5px 5px 5px 10px;
        border:1px solid #e9ecef;
        border-radius:8px;
    }

    .contactForm>form>div:last-child>input::placeholder{
        position:absolute;
        top:15px;
    }

    .contactForm>form>div:last-child>div{
        width:95%;
        display:flex;
        align-items:center;
        justify-content:right;
    }

    .contactForm>form>div:last-child>div>button{
        background-color:teal;
        color:white;
        border:none;
        padding:10px 20px 10px 20px;
        border-radius:10px;
        cursor:pointer;
        font-weight:bold;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .endSection{
        display:flex;
        align-items:center;
        justify-content:center;
        height:70px;
        background-color:black;
        color:white;
        margin-top:20px;
    }
    .endSection>p{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
    }

    .emailSent{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }

    .emailSent>h1,.emailSent>p{
       margin-top:0px;
    }


    @media only screen and (min-width: 768px) and (max-width:1120px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:70%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:90%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }
    
    @media only screen and (min-width: 481px) and (max-width:768px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .emailSent>h1{
            font-size:x-large;
        }

        .emailSent>p{
            width:80%;
            font-size:small;
        }
    }

    @media only screen and (min-width:320px) and (max-width:480px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .endSection>p{
            font-size:15px;
        }

        .emailSent>h1{
            font-size:large;
        }

        .emailSent>p{
            width:70%;
            font-size:12px;
        }
    }

    @media only screen and (max-width: 320px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:70%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .endSection>p{
            font-size:10px;
        }

        .emailSent>h1{
            font-size:small;
        }

        .emailSent>p{
            width:70%;
            font-size:10px;
        }
    }


    @media only screen and (max-width: 319px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .endSection>p{

            font-size:8px;
        }
    }
    

`
export default ContactUs