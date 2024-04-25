import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_QBurst({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>QBurst</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>February 2024 - Present</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Chantilly, Virginia, USA</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Developed a scalable, cloud-based grocery store portal using React, TypeScript, and Redux.</li>
                    <li className='modal-div'>Implemented Agile UI, inventory management, and unit testing to meet system design goals.</li>
                    <li className='modal-div'>Improved UI refinement through optimized API calls, enhancing interactions with MongoDB and .NET backend for 30% performance improvement.</li>
                    <li className='modal-div'>Managed code deployment through Azure DevOps, utilizing pipelines for automation and SonarCloud for quality checks to streamline development and ensure code integrity</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_QBurst