import React from 'react'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Github from '../Components/Github'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const Homepage = () => {
    return (
        <div  id="home">
            <Navbar />
            <About />
            <Skills/>
            <Projects/>
            <Github/>
            <ContactUs/>
        </div>
    )
}

export default Homepage