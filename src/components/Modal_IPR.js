import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_IPR({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>Institute for Plasma Research (IPR)</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>October 2020 - August 2021</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Ahmedabad, India</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Research Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Worked as a research intern to generate the synthetic images of plasma.</li>
                    <li className='modal-div'>The process of generating plasma images computationally can replace the conventional method of plasma image generation (using scientific apparatus) due to significant economic and logistic benefits.</li>
                    <li className='modal-div'>The proposed methodology can generate synthetic plasma images having the feature statistics of actual images and can be used to create large data-sets for ML assisted plasma imaging diagnostics.</li>
                    <li className='modal-div'>The devised serial code has been further optimized into a parallel program (using OpenMP API) to generate a synthetic image of plasma in less than 0.65 seconds (which is 21 times faster than the serial algorithm).</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_IPR