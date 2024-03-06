import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_Synaptics({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>Synaptics</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>June 2023 - September 2023</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Irvine, Califonia, USA</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Audio Software Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Engineered an Azure-based calling application integrating Microsoft Graph API v1.0 and MSAL (Microsoft Authentication Library) with Synaptics' headsets for audio testing.</li>
                    <li className='modal-div'>Integrated speech recognition feature into the Azure calling application, enabling automatic generation of speech-to-text transcripts for seamless headset debugging purposes.</li>
                    <li className='modal-div'>Created a software application on host side to parse UART (universal asynchronous receiver transmitter) data formatted in binary HCI format. Implemented extraction of debug messages from received data.</li>
                    <li className='modal-div'>Achieved clean production-level RTOS image file for gdaero SDK leveraging static analysis tools.</li>
                    <li className='modal-div'>Honed corporate communication and interpersonal skills: Owned project delivery by pitching to the CEO as well as Japanese counterparts and clients for Synaptics.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_Synaptics