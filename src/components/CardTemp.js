import React from 'react'
import '../Styles/CardTemp.css'

function CardTemp({ college_name, icon, degree }) {
    return (
        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        <div className='college-icon'><img src={icon} /></div>
                        <div className='college-name'>{college_name}</div>
                        <div className='degree-name'>{degree}</div>
                    </div>
                </div>
                {/* <div class="front">ff
                    <div class="img">
                        <div class="circle">
                        </div>
                        <div class="circle" id="right">
                        </div>
                        <div class="circle" id="bottom">
                        </div>
                    </div>
                    <div className='about-college'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et. Nunc sed id semper risus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Vitae tortor condimentum lacinia quis. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi tincidunt ornare massa eget egestas. Diam vulputate ut pharetra sit amet aliquam. Ut ornare lectus sit amet est placerat in. In ornare quam viverra orci sagittis eu volutpat. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Leo urna molestie at elementum eu. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Sagittis aliquam malesuada bibendum arcu vitae elementum. Luctus accumsan tortor posuere ac ut consequat semper.</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CardTemp