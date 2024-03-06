import React, { useState } from 'react'
import '../Styles/Experience.css'
import synaptics_bg from '../assets/Synaptics_Fun_Activity.jpg'
import IPR_bg from '../assets/IPR.jpg'
import IIT_B_bg from '../assets/IIT_B.jpg'
import Comp_Fin_bg from '../assets/Comp_Fin.jpg'
import LMS_bg from '../assets/LMS.png'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Modal_Synaptics from './Modal_Synaptics';
import Modal_HuddleUp from './Modal_HuddleUp';
import Modal_DA from './Modal_DA';
import Modal_IIT from './Modal_IIT';
import Modal_IPR from './Modal_IPR';

function Experience() {
    const [modalSyn, setModalSyn] = useState(false);
    const [modalHud, setModalHud] = useState(false);
    const [modalDA, setModalDA] = useState(false);
    const [modalIPR, setModalIPR] = useState(false);
    const [modalIIT, setModalIIT] = useState(false);

    var slideshowDuration = 4000;

    // try {
    var slideshow = $('.main-content .slideshow');

    function slideshowSwitch(slideshow, index, auto) {
        if (slideshow.data('wait')) return;

        var slides = slideshow.find('.slide');
        var pages = slideshow.find('.pagination');
        var activeSlide = slides.filter('.is-active');
        var activeSlideImage = activeSlide.find('.image-container');
        var newSlide = slides.eq(index);
        var newSlideImage = newSlide.find('.image-container');
        var newSlideContent = newSlide.find('.slide-content');
        var newSlideElements = newSlide.find('.caption > *');
        if (newSlide.is(activeSlide)) return;

        newSlide.addClass('is-new');
        var timeout = slideshow.data('timeout');
        clearTimeout(timeout);
        slideshow.data('wait', true);
        var transition = slideshow.attr('data-transition');
        if (transition == 'fade') {
            newSlide.css({
                display: 'block',
                zIndex: 2
            });
            newSlideImage.css({
                opacity: 0
            });

            TweenMax.to(newSlideImage, 1, {
                alpha: 1,
                onComplete: function () {
                    newSlide.addClass('is-active').removeClass('is-new');
                    activeSlide.removeClass('is-active');
                    newSlide.css({ display: '', zIndex: '' });
                    newSlideImage.css({ opacity: '' });
                    slideshow.find('.pagination').trigger('check');
                    slideshow.data('wait', false);
                    if (auto) {
                        timeout = setTimeout(function () {
                            slideshowNext(slideshow, false, true);
                        }, slideshowDuration);
                        slideshow.data('timeout', timeout);
                    }
                }
            });
        } else {
            if (newSlide.index() > activeSlide.index()) {
                var newSlideRight = 0;
                var newSlideLeft = 'auto';
                var newSlideImageRight = -slideshow.width() / 8;
                var newSlideImageLeft = 'auto';
                var newSlideImageToRight = 0;
                var newSlideImageToLeft = 'auto';
                var newSlideContentLeft = 'auto';
                var newSlideContentRight = 0;
                var activeSlideImageLeft = -slideshow.width() / 4;
            } else {
                var newSlideRight = '';
                var newSlideLeft = 0;
                var newSlideImageRight = 'auto';
                var newSlideImageLeft = -slideshow.width() / 8;
                var newSlideImageToRight = '';
                var newSlideImageToLeft = 0;
                var newSlideContentLeft = 0;
                var newSlideContentRight = 'auto';
                var activeSlideImageLeft = slideshow.width() / 4;
            }

            newSlide.css({
                display: 'block',
                width: 0,
                right: newSlideRight,
                left: newSlideLeft
                , zIndex: 2
            });

            newSlideImage.css({
                width: slideshow.width(),
                right: newSlideImageRight,
                left: newSlideImageLeft
            });

            newSlideContent.css({
                width: slideshow.width(),
                left: newSlideContentLeft,
                right: newSlideContentRight
            });

            activeSlideImage.css({
                left: 0
            });

            TweenMax.set(newSlideElements, { y: 20, force3D: true });
            TweenMax.to(activeSlideImage, 1, {
                left: activeSlideImageLeft,
                ease: Power3.easeInOut
            });

            TweenMax.to(newSlide, 1, {
                width: slideshow.width(),
                ease: Power3.easeInOut
            });

            TweenMax.to(newSlideImage, 1, {
                right: newSlideImageToRight,
                left: newSlideImageToLeft,
                ease: Power3.easeInOut
            });

            TweenMax.staggerFromTo(newSlideElements, 0.8, { alpha: 0, y: 60 }, { alpha: 1, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.6 }, 0.1, function () {
                newSlide.addClass('is-active').removeClass('is-new');
                activeSlide.removeClass('is-active');
                newSlide.css({
                    display: '',
                    width: '',
                    left: '',
                    zIndex: ''
                });

                newSlideImage.css({
                    width: '',
                    right: '',
                    left: ''
                });

                newSlideContent.css({
                    width: '',
                    left: ''
                });

                newSlideElements.css({
                    opacity: '',
                    transform: ''
                });

                activeSlideImage.css({
                    left: ''
                });

                slideshow.find('.pagination').trigger('check');
                slideshow.data('wait', false);
                if (auto) {
                    timeout = setTimeout(function () {
                        slideshowNext(slideshow, false, true);
                    }, slideshowDuration);
                    slideshow.data('timeout', timeout);
                }
            });
        }
    }

    function slideshowNext(slideshow, previous, auto) {
        var slides = slideshow.find('.slide');
        var activeSlide = slides.filter('.is-active');
        var newSlide = null;
        if (previous) {
            newSlide = activeSlide.prev('.slide');
            if (newSlide.length === 0) {
                newSlide = slides.last();
            }
        } else {
            newSlide = activeSlide.next('.slide');
            if (newSlide.length == 0)
                newSlide = slides.filter('.slide').first();
        }

        slideshowSwitch(slideshow, newSlide.index(), auto);
    }

    function homeSlideshowParallax() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > windowHeight) return;
        var inner = slideshow.find('.slideshow-inner');
        var newHeight = windowHeight - (scrollTop / 2);
        var newTop = scrollTop * 0.8;

        inner.css({
            transform: 'translateY(' + newTop + 'px)', height: newHeight
        });
    }

    $(document).ready(function () {
        $('.slide').addClass('is-loaded');

        $('.slideshow .arrows .arrow').on('click', function () {
            slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
        });

        $('.slideshow .pagination .item').on('click', function () {
            slideshowSwitch($(this).closest('.slideshow'), $(this).index());
        });

        $('.slideshow .pagination').on('check', function () {
            var slideshow = $(this).closest('.slideshow');
            var pages = $(this).find('.item');
            var index = slideshow.find('.slides .is-active').index();
            pages.removeClass('is-active');
            pages.eq(index).addClass('is-active');
        });

        /* Lazyloading
        $('.slideshow').each(function(){
          var slideshow=$(this);
          var images=slideshow.find('.image').not('.is-loaded');
          images.on('loaded',function(){
            var image=$(this);
            var slide=image.closest('.slide');
            slide.addClass('is-loaded');
          });
        */

        var timeout = setTimeout(function () {
            slideshowNext(slideshow, false, true);
        }, slideshowDuration);

        slideshow.data('timeout', timeout);
    });

    if ($('.main-content .slideshow').length > 1) {
        $(window).on('scroll', homeSlideshowParallax);
    }
    // }
    // catch { console.log('Error') }

    return (
        <div className='experience-outer-container' name="Experience">
            <Modal_Synaptics modal={modalSyn} setModal={setModalSyn} />
            <Modal_HuddleUp modal={modalHud} setModal={setModalHud} />
            <Modal_DA modal={modalDA} setModal={setModalDA} />
            <Modal_IPR modal={modalIPR} setModal={setModalIPR} />
            <Modal_IIT modal={modalIIT} setModal={setModalIIT} />

            <div className='ed-intro'>
                <div className='school-logo-container'>
                    <WorkHistoryIcon className='school-logo' fontSize='20px' style={{ color: "white" }} />
                </div>
                <div>
                    Work Experience
                </div>
            </div>
            <div className='ed-line' style={{ marginBottom: '30px' }}>
                My formal work experience till date...
            </div>
            <div className='exp-container'>
                <main class="main-content">
                    {/* <div className='ed-intro'>
                    <div className='school-logo-container'>
                        <SchoolIcon className='school-logo' fontSize='40px' />
                    </div>
                    <div>
                        Education
                    </div>
                </div> */}
                    <section class="slideshow">
                        <div class="slideshow-inner">
                            <div class="slides">
                                <div class="slide is-active ">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">Synaptics</div>
                                            <div class="text">
                                                <p>Audio Software Intern</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>June 2023 - September 2023</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setModalSyn(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={synaptics_bg} alt="" class="image" />
                                    </div>
                                </div>
                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">HuddleUp</div>
                                            <div class="text">
                                                <p>Software Engineer Intern</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>March 2022 - June 2022</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setModalHud(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img style={{ objectPosition: '50% 0%' }} src={LMS_bg} alt="" class="image" />
                                    </div>
                                </div>
                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">DAIICT</div>
                                            <div class="text">
                                                <p>Computational Finance Researcher</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>January 2022 - June 2022</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setModalDA(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={Comp_Fin_bg} alt="" class="image" />
                                    </div>
                                </div>
                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">Institute for Plasma Research</div>
                                            <div class="text">
                                                <p>Computational Physics Researcher (High-Performance Computing)</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>October 2020 - August 2021</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setModalIPR(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={IPR_bg} style={{ objectPosition: '50% 0%' }} alt="" class="image" />
                                    </div>
                                </div>

                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">IIT–Bombay</div>
                                            <div class="text">
                                                <p>Software Engineer Fellow</p>
                                            </div>
                                            {/* 
                                            <div class="text">
                                                <p>April 2020 - June 2020</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setModalIIT(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={IIT_B_bg} alt="" class="image" />
                                    </div>
                                </div>
                            </div>
                            <div class="pagination">
                                <div class="item is-active">
                                    <span class="icon">1</span>
                                </div>
                                <div class="item">
                                    <span class="icon">2</span>
                                </div>
                                <div class="item">
                                    <span class="icon">3</span>
                                </div>
                                <div class="item">
                                    <span class="icon">4</span>
                                </div>
                                <div class="item">
                                    <span class="icon">5</span>
                                </div>
                            </div>
                            <div class="arrows">
                                <div class="arrow prev">
                                    <span class="svg svg-arrow-left">
                                        <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xmlSpace="preserve"> <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" /> </svg>
                                        <span class="alt sr-only"></span>
                                    </span>
                                </div>
                                <div class="arrow next">
                                    <span class="svg svg-arrow-right">
                                        <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xmlSpace="preserve"> <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" /> </svg>
                                        <span class="alt sr-only"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Experience