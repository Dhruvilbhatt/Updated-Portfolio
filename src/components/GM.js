import React from 'react'
import '../Styles/GM.css'
import InfoIcon from '@mui/icons-material/Info';

function GM() {
    return (
        <div className='GM-container' name="About">
            <div className='ed-intro'>
                <div className='school-logo-container'>
                    <InfoIcon className='school-logo' fontSize='40px' style={{ color: "white" }} />
                </div>
                <div className='section-title'>
                    About Me!
                </div>
            </div>
            <div className='ed-line'>
                A peek into my life...
            </div>
            <div className='GM-card'>
                <div>
                    I'm a highly driven and versatile individual with a strong background in computer science and information technology. My educational journey includes a Bachelor's degree in Information and Communication Technology from DA-IICT and a Master's in Computer Science from the University of California, Irvine. Throughout my academic and professional career, I've maintained a stellar GPA and have been actively involved in coursework ranging from data structures to machine learning.
                    <br />
                    <br />
                    <br />
                    My professional experience spans across various internships, where I've honed my technical skills and collaborated with cross-functional teams to develop innovative solutions. At Synaptics Incorporated, I engineered an Azure-based calling application and bridged the gap between business and technology by integrating speech recognition features. Similarly, at HuddleUp, I contributed to building a custom Learning Management System, showcasing my ability to thrive in dynamic environments.
                    <br />
                    <br />
                    <br />
                    Leading a team of researchers at the DA-IICT Research Lab, I curated a large open-source Corporate Credit Rating dataset and devised strategies using Explainable AI techniques. Additionally, my involvement in the placement cell of my undergraduate college allowed me to help over 600 students land their dream jobs, reflecting my commitment to fostering success in others.
                    <br />
                    <br />
                    <br />
                    Beyond technology, I'm also passionate about music. As a percussionist, Cajon player, and drummer, I've had the privilege of performing alongside famous Indian musicians like Amit Trivedi and Gajendra Verma. This dual passion for technology and music defines my multifaceted identity and drives me to excel in both realms.
                </div>
            </div>
        </div>
    )
}

export default GM