import React from 'react'
import '../Styles/Tiles.css';
import { Link } from 'react-scroll'


function Tiles() {
    return (
        <div class="wrapper">
            <div class="row">
                <div class="hex member" data-name="William Herr" data-title="Data Analyst" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="About" smooth duration={800}>
                                <div class="avatar">
                                    About
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hex member" data-name="Paul Gerald" data-title="Data Scientist" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="Education" smooth duration={800}>
                                <div class="avatar">
                                    Education
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="hex member" data-name="Nick Fahre" data-title="Bioinformatician" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="Experience" smooth duration={800}>
                                <div class="avatar">
                                    Experience
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hex">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <div class="info">
                                <div class="links">
                                    <div class="cv"></div>
                                    <div class="web"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hex member" data-name="Paul Gerald" data-title="Data Scientist" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="Education" smooth duration={800}>
                                <div class="avatar">
                                    Education
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="hex member" data-name="Nick Fahre" data-title="Bioinformatician" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="Experience" smooth duration={800}>
                                <div class="avatar">
                                    Experience
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hex member" data-name="William Herr" data-title="Data Analyst" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="About" smooth duration={800}>
                                <div class="avatar">
                                    About
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="row">
                <div class="hex member" data-name="Giannis Gianniou" data-title="FE Engineer" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="Projects" smooth duration={800}>
                                <div class="avatar">
                                    Projects
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="hex member" data-name="Dimitris Dimitriou" data-title="Software Developer" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="Publications" smooth duration={800}>
                                <div class="avatar">
                                    Publications
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hex member" data-name="Giorgos Georgiou" data-title="Web Developer" data-dept="Department of dummies" data-cv="#" data-web="https://google.gr/">
                    <div class="hexLeft">
                        <div class="hexRight">
                            <Link to="Teachings" smooth duration={800}>
                                <div class="avatar">
                                    Teaching
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Tiles