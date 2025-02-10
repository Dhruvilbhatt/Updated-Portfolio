import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_AWS({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>Amazon Web Services</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>October 2024 - Present</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Seattle, Washington, USA</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer (Machine Learning)</div>
                </div>
                <ul>
                    <li className='modal-div'>Working with Bedrock organization, AWS' Gen AI service for serving propietary and open-source LLMs.</li>
                    <li className='modal-div'>Maintining containers for LLMs on Bedrock as a part of the Model Optimization team.</li>
                    <li className='modal-div'>Creating and using latency and performance optimization techniques to deliver state-of-the-art performance to Amazon customers worldwide.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_AWS