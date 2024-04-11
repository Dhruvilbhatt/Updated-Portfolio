import React, { useEffect } from 'react'
import LandImg from '../assets/SF_Pic.jpg'
import blurred_bg from '../assets/blurred-bg.webp'
import '../Styles/LandingPage.css'
import { Element } from 'react-scroll'
import AboutTiles from './AboutTiles'
import Terminal from './Terminal'

function LandingPage() {
    useEffect(() => {
        const spans = document.querySelectorAll('.flickering-text');

        spans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, 2000)
        });
    }, []);

    return (
        <div className="landing" id="Home" name="Home">
            <div className="landing-left">
                {/* <div className='modal'>
                    <img src={blurred_bg} className='' />
                </div> */}
                <div className='about-me'>
                    {/* <div>
                        I'm a dynamic computer science professional with a Master's degree from the University of California, Irvine, and a Bachelor's from DA-IICT, India. With a track record of success in software development, data analysis, and machine learning, I thrive on solving complex problems and delivering innovative solutions. My diverse experiences include internships at Synaptics Incorporated (CA), HuddleUp (NY), Indian Institute of Technology (IIT) - Bombay, where I engineered Azure-based applications, worked as a full-stack engineer, served as an open-source contributor, and led teams in data curation projects. Proficient in AWS (certified Cloud Practitioner), Azure, Java, Python, and more, I stay updated with the latest technologies to drive continuous improvement. Outside of work, I'm passionate about research, contributing to publications in computational finance, parallel computing, and computational plasma. I'm driven by a commitment to push the boundaries of technology and make a positive impact through collaborative projects.
                    </div> */}
                    {/* <AboutTiles /> */}
                    <Terminal />
                </div>
            </div>
            <div className="landing-right">
                <div className='hero-image-wrapper'>
                    <img src={LandImg} />
                </div>
                <div class="container1">
                    <div class="container">
                        <div class="box">
                            <div class="title">
                                <span class="block"></span>
                                <h1>DHRUVIL BHATT<span></span></h1>
                            </div>
                            <div class="role">
                                <div class="block"></div>
                                <p>Software Engineer</p>
                            </div>

                        </div>
                    </div>
                    {/* <div class="container">
                        <div class="glitch" data-text="DHRUVIL">DHRUVIL</div>
                        <div class="glow">DHRUVIL</div>
                    </div>
                    <div class="scanlines"></div> */}
                    {/* <div className='line' />
                    <div class="word">
                        <span className='flickering-text'>DHRUVIL</span>
                        <span className='space'></span>
                        <span className='flickering-text'>BHATT</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LandingPage