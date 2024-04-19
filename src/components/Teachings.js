import React from 'react'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import '../Styles/Teachings.css';
import UCI from '../assets/UCI.png'
import DA from '../assets/DA.jpg'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Teachings() {
    return (
        <div>
            <div className='pb-intro-wrapper' name="Teachings">
                <div className='ed-intro'>
                    <div className='school-logo-container'>
                        <LocalLibraryIcon className='school-logo' fontSize='20px' style={{ color: "white" }} />
                    </div>
                    <div className='section-title'>
                        Teaching Experience
                    </div>
                </div>
                <div className='ed-line'>
                    A few of my teaching experiences till date...
                </div>
            </div>
            <div className='teaching-container'>
                <img className='teaching-image' src={UCI} />
                <div className='teaching-center-wrapper'>
                    <div className='teaching-wrapper'>
                        <div className='teaching-header-wrapper'>
                            <div className='paper-title'>University of California - Irvine <span className='location'>(Irvine, California, USA)</span></div>
                            <div className='paper-skills'>Teaching Assistant</div>
                            <div className='teach-time'>September 2023 - December 2023</div>
                        </div>
                        <div>
                            <div className='paper-author-list'>• Teaching Assistant for the MSWE (Master of Software Engineering) 245P (GUI Programming), and MSWE 250P (Web Programming).</div>
                            <div className='paper-author-list'>• MSWE 245P GUI Programming: Exploration of interactive software with substantial graphical user interface elements. Topics include: libraries and frameworks for GUI programming, layout design and alternatives, and event-driven programming.</div>
                            <div className='paper-author-list'>• MSWE 250P Web Programming: Exploration of the concepts, terminology, and popular frameworks for developing full-stack web applications. Students develop simple applications using multiple development stacks, and deploy them on the cloud.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='teaching-container'>
                <img className='teaching-image' src={UCI} />
                <div className='teaching-center-wrapper'>
                    <div className='teaching-wrapper'>
                        <div className='teaching-header-wrapper'>
                            <div className='paper-title'>University of California - Irvine <span className='location'>(Irvine, California, USA)</span></div>
                            <div className='paper-skills'>Teaching Assistant</div>
                            <div className='teach-time'>April 2023 - June 2023</div>
                        </div>
                        <div>
                            <div className='paper-author-list'>• Teaching Assistant for the STATS 8 course (Introduction to Biological Statistics).</div>
                            <div className='paper-author-list'>• Introductory statistical techniques used to collect and analyze experimental and observational data from health sciences and biology. Includes exploration of data, probability and sampling distributions, statistical inference for means and proportions, linear regression, and analysis of variance.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='teaching-container'>
                <img className='teaching-image' src={DA} />
                <div className='teaching-center-wrapper'>
                    <div className='teaching-wrapper'>
                        <div className='teaching-header-wrapper'>
                            <div className='paper-title'>DA-IICT <span className='location'>(Gandhinagar, India)</span></div>
                            <div className='paper-skills'>Teaching Assistant</div>
                            <div className='teach-time'>August 2021 - December 2021</div>
                        </div>
                        <div>
                            <div className='paper-author-list'>• Teaching Assistant for the course on Computational Finance, which involves formulation of lab assignments, and coding contests based on the concepts of finance for the MSc Data Science batch at DA-IICT.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachings