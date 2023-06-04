import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/main/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Education />
            <Experience/>
            <Projects />
            {/* <Achievement /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
            {/* <Testimonials/> */}
            {/* <Services/> */}
        </div>
    )
}

export default Main
