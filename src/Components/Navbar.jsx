import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import {Link,animateScroll} from 'react-scroll';



const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const [head, setHead] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80 || head){
         setColorchange(true);
         
       }
       else{
         setColorchange(false);
       }
       
    };
    window.addEventListener('scroll', changeNavbarColor);

    useEffect(()=>{
        if(head || colorChange ){
            setColorchange(true)
        }else{
            setColorchange(false)
        }
    },[head,colorChange])
    return (
        <Container id="nav-menu">
                <header className="header" style={{backgroundColor:`${colorChange?'white':'transparent'}`}}>
                    <a href="/" className="logo">Shekhar Suman</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu" >
                        <li><Link activeClass="active" to="/" className="nav-link home" onClick={() => animateScroll.scrollToTop()} spy={true} smooth={true}>Home</Link></li>
                        <li><Link activeClass="active" to="about" className="nav-link about" onClick={() => setHead(true)} spy={true} smooth={true}>About</Link></li>
                        <li><Link activeClass="active" to="skills" className="nav-link skills" onClick={() => setHead(true)} spy={true} smooth={true}>Skills</Link></li>
                        <li><Link activeClass="active" to="projects" className="nav-link projects" onClick={() => setHead(true)} spy={true} smooth={true}>Projects</Link></li>
                        <li><Link activeClass="active" to="contact" className="nav-link contact" onClick={() => setHead(true)} spy={true} smooth={true}>Contact Me</Link></li>
                        <li id="resume-button-1"><a id="resume-link-1" className="nav-link resume" href="https://drive.google.com/uc?export=download&id=1e9YYU1Gq6lMYG83eB70nCGR98newj81G" activeClass="active" rel="noreferrer" target="_blank">
                            Resume</a></li>
                    </ul>
                </header>
         </Container>
    )
    
}

const Container = styled.div`
    width:100%;
    height:70px;
    background-color:white;

    a {
        color: #000;
    }
    
    /* header */
    
    .header {
        position:fixed;
        width:100%;
        z-index: 3;
        padding-top:10px;
    }
    
    .header ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        padding-right:50px;
    }
    
    .header li a {
        display: block;
        padding: 20px 25px;
        text-decoration: none;
    }
    
    .header .logo {
        display: flex;
        float: left;
        font-size: 2em;
        padding: 10px 30px;
        text-decoration: none;
        color:#343a40;
    }
    
    /* menu */
    
    .header .menu {
        clear: both;
        max-height: 0;
        transition: max-height .2s ease-out;
        text-transform:uppercase;
        font-size:15px;
        font-weight:700;
        color:#343a40;
    }

    li a{
        color:#343a40;
    }

    li a:hover{
        color:green;
        cursor:pointer;
    }
    
    
    /* menu icon */
    
    .header .menu-icon {
        cursor: pointer;
        display: inline-block;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
    }
    
    .header .menu-icon .navicon {
        background: #333;
        display: block;
        height: 2px;
        position: relative;
        transition: background .2s ease-out;
        width: 18px;
    }
    
    .header .menu-icon .navicon:before,
    .header .menu-icon .navicon:after {
        background: #333;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all .2s ease-out;
        width: 100%;
    }
    
    .header .menu-icon .navicon:before {
        top: 5px;
    }
    
    .header .menu-icon .navicon:after {
        top: -5px;
    }
    
    /* menu btn */
    
    .header .menu-btn {
        display: none;
    }
    
 
    .header .menu-btn:checked ~ .menu {
        width:100%;
        max-height: 300px;
        background-color:white;
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon {
        background: transparent;
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:before {
        transform: rotate(-45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:after {
        transform: rotate(45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
        top: 0;
    }
    
    /* 48em = 768px */
    
    @media (min-width: 55em) {
        .header li {
            float: left;
        }
        
        .header li a {
            padding: 20px 30px;
        }

        .header .menu {
            clear: none;
            float: right;
            max-height: none;
        }

        .header .menu-icon {
            display: none;
        }
    }
`

export default Navbar