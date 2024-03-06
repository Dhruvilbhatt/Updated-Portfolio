import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_IIT({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>Indian Institute of Technology (IIT) – Bombay</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>April 2020 - June 2020</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Mumbai, India</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Worked with the content migration team of Drupal CMS.</li>
                    <li className='modal-div'>Built custom plugins for content migration from Drupal 6 and 7 to Drupal 8 <a
                        style={{ color: 'yellow', fontSize: 'large' }}
                        href="https://static.fossee.in/fossee/fellowship2020/Fellowship-Reports/Web-Development/Web-Development-DhruvilBhatt-FSF-2020.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >(Fellowship Report)</a>.</li>
                    <li className='modal-div'>Explored Drush command line and Drupal UI to migrate Drupal websites.</li>
                    <li className='modal-div'>Migrated <span style={{ fontStyle: 'italic' }}>hss.iitb.ac.in</span> from Drupal 7 to 8 without any data loss, using custom-made plugins and other modules.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_IIT