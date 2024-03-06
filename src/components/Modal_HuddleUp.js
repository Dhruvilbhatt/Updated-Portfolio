import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_HuddleUp({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>HuddleUp</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>March 2022 - June 2020</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>New York, USA</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Collaborated with frontend team to build a custom LMS (Learning Management System).</li>
                    <li className='modal-div'>Companies can use this portal to educate their employees by adding their customized teaching modules, customizable workspaces, relevant course channels and quizzes.</li>
                    <li className='modal-div'>Executed web pages for adding new channels, challenges, and quizzes to a specific workspace, which can be utilized by the companies to impart most relevant skillset to its employees.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_HuddleUp