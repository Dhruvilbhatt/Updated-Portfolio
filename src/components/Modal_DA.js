import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_DA({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>DA-IICT</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>January 2022 - June 2022</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Gandhinagar, India</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Research Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Curated the largest open-source dataset (comprising of 7805 datapoint, which is 4 times larger than the previously available largest public dataset) for Corporate Credit Rating with Financial Ratios <a
                        style={{ color: 'yellow', fontSize: 'large' }}
                        href="https://www.kaggle.com/datasets/kirtandelwadia/corporate-credit-rating-with-financial-ratios"
                        target="_blank"
                        rel="noreferrer"
                    >(Dataset Link)</a>.</li>
                    <li className='modal-div'>Applied ML techniques on our custom dataset to formulate time-independent, simple, and human-interpretable rules which could be used by corporate firms to attain investment grade rating with a mean precision value of 95%.</li>
                    <li className='modal-div'>Boosted the interpretability of the results by applying Explainable AI technique (Decision Tree) for prediction and visualization purpose.</li>
                </ul>
            </div>
        </div >
    )
}

export default Modal_DA