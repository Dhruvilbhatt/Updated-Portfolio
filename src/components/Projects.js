import React from 'react'
import '../Styles/Projects.css'
import cuisine from '../assets/cuisine.jpg';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import SummarizeIcon from '@mui/icons-material/Summarize';

function Projects() {
    return (
        <div class="projects-container" name="Projects">
            {/* <p class="container-title">Here are the features<br />we’re proud of</p> */}
            <div className='education-wrapper'>
                <div className='ed-intro'>
                    <div className='school-logo-container'>
                        <AccountTreeIcon className='school-logo' fontSize='large' style={{ color: "white" }} />
                    </div>
                    <div className='section-title'>
                        Projects
                    </div>
                </div>
                <div className='ed-line'>
                    A few of my non-research projects till date...
                </div>
            </div>
            <div class="gradient-cards">
                <div class="projects-card">
                    <div class="container-card bg-green-box">
                        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4547)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4547)" stroke-width="2"></rect>
                            <path d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z" fill="#54E8A9"></path>
                            <path d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z" fill="#2FCB89"></path> */}
                            <SummarizeIcon style={{ color: '#17be82e6' }} />
                            <defs>
                                <linearGradient id="paint0_linear_1366_4547" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2FCB89" stop-opacity="0.7"></stop>
                                    <stop offset="0.489583" stop-color="#2FCB89" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#2FCB89" stop-opacity="0.7"></stop>
                                </linearGradient>
                                <radialGradient id="paint1_radial_1366_4547" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                                    <stop stop-color="#54E8A9"></stop>
                                    <stop offset="1" stop-color="#1A3E31" stop-opacity="0.2"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                        <p class="card-title">DocLab - Work Smarter, Collaborate Better</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Worked in a collaborative environment to develop DocLab, an innovative AI-powered document editor featuring auto text correction, paraphrasing, summarization, collaboration, and video calling support.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Consolidated video calling and screen-sharing capabilities, ensuring a low video/audio latency of 300ms.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Deployed the Flask-based AI model on AWS EC2 for scalable and reliable access to DocLab's AI features.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Designed RESTful Web Services and APIs with Axios for seamless frontend-backend communication and MongoDB CRUD operations, ensuring fast page load time (&lt; 2 seconds).</p>
                    </div>
                </div>

                <div class="projects-card">
                    <div class="container-card bg-white-box">
                        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4565)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4565)" stroke-width="2"></rect>
                            <ellipse rx="21.9462" ry="22.2891" transform="matrix(0.964749 0.263173 -0.254526 0.967066 60.1463 63.0804)" stroke="white" stroke-width="1.00101" stroke-linecap="round" stroke-dasharray="4 5.01"></ellipse>
                            <ellipse rx="17.4359" ry="17.5832" transform="matrix(-1 0 0 1 60.1466 39.5834)" fill="white"></ellipse>
                            <path d="M63.5924 38.93C64.4717 38.4692 65.0312 37.6495 64.9014 36.2874C64.7314 34.4228 63.2378 33.7982 61.2597 33.624V31.0427H59.721V33.5522C59.3212 33.5522 58.9118 33.5626 58.5019 33.5725V31.0427H56.9631V33.624C56.3974 33.6416 55.7384 33.6328 53.876 33.624V35.3039C55.0905 35.282 55.7283 35.2019 55.8744 36.0003V43.0678C55.7815 43.7013 55.2869 43.6103 54.186 43.5905L53.8765 45.4649C56.682 45.4649 56.9641 45.4754 56.9641 45.4754V47.6858H58.5029V45.506C58.9224 45.5164 59.3319 45.5164 59.722 45.5164V47.6863H61.2607V45.4759C63.8385 45.3323 65.5619 44.6666 65.7917 42.1774C65.9713 40.1803 65.0526 39.2888 63.5935 38.9305L63.5924 38.93ZM58.5318 35.4167C59.4008 35.4167 62.1186 35.14 62.1186 36.9942C62.1186 38.7661 59.4008 38.5612 58.5318 38.5612V35.4167ZM58.5318 43.6004V40.1381C59.5708 40.1381 62.7528 39.8412 62.7528 41.869C62.7528 43.8256 59.5708 43.5999 58.5318 43.5999V43.6004Z" fill="#2E3042"></path>
                            <path d="M82.5643 62.834C92.1944 62.834 100 70.7058 100 80.4172C100 90.1286 92.1944 98.0004 82.5643 98.0004C72.9342 98.0004 65.1284 90.1286 65.1284 80.4172C65.1284 70.7058 72.9342 62.834 82.5643 62.834ZM92.0516 84.2822H76.3964C76.2271 84.282 76.0646 84.3491 75.9441 84.469L72.8514 87.5626C72.8065 87.6073 72.7759 87.6645 72.7634 87.7269C72.751 87.7893 72.7573 87.854 72.7815 87.9128C72.8057 87.9716 72.8468 88.0217 72.8994 88.0568C72.9521 88.0919 73.0139 88.1104 73.077 88.1098H88.7323C88.9015 88.11 89.064 88.0429 89.1845 87.923L92.2772 84.8284C92.3217 84.7836 92.352 84.7264 92.3643 84.6642C92.3765 84.602 92.3701 84.5376 92.346 84.479C92.3218 84.4205 92.2809 84.3705 92.2285 84.3355C92.1761 84.3004 92.1145 84.2819 92.0516 84.2822ZM88.7323 78.4665H73.077L73.0029 78.4742C72.9476 78.487 72.8968 78.5146 72.8556 78.5539C72.8145 78.5933 72.7846 78.6431 72.769 78.6981C72.7534 78.7531 72.7527 78.8113 72.767 78.8666C72.7813 78.9219 72.8101 78.9724 72.8503 79.0127L75.9452 82.1074L76.0215 82.1733C76.1305 82.2502 76.2612 82.2942 76.3964 82.2942H92.0516L92.1257 82.2865C92.181 82.2737 92.2319 82.2462 92.273 82.2068C92.3141 82.1674 92.3441 82.1177 92.3596 82.0627C92.3752 82.0077 92.3759 81.9495 92.3616 81.8941C92.3473 81.8388 92.3185 81.7883 92.2783 81.748L89.1834 78.6534L89.1071 78.5874C88.9978 78.5086 88.8667 78.4663 88.7323 78.4665Z" fill="white"></path>
                            <path d="M92.0507 84.5023H76.3954C76.2262 84.5022 76.0637 84.57 75.9432 84.6911L72.8505 87.8164C72.8056 87.8616 72.775 87.9194 72.7625 87.9825C72.75 88.0455 72.7563 88.1109 72.7806 88.1703C72.8048 88.2296 72.8458 88.2803 72.8985 88.3158C72.9511 88.3512 73.013 88.3699 73.0761 88.3693H88.7313C88.9006 88.3695 89.0631 88.3017 89.1836 88.1806L92.2763 85.0541C92.3208 85.0089 92.3511 84.9512 92.3633 84.8883C92.3756 84.8255 92.3692 84.7604 92.345 84.7012C92.3208 84.6421 92.2799 84.5916 92.2275 84.5562C92.1751 84.5208 92.1136 84.502 92.0507 84.5023ZM88.7313 78.627H73.0761L73.002 78.6347C72.9467 78.6477 72.8958 78.6755 72.8547 78.7152C72.8136 78.755 72.7836 78.8053 72.7681 78.8608C72.7525 78.9164 72.7518 78.9752 72.7661 79.0311C72.7804 79.087 72.8092 79.138 72.8494 79.1787L75.9443 82.3052L76.0206 82.3718C76.1295 82.4495 76.2603 82.4939 76.3954 82.4939H92.0507L92.1248 82.4861C92.1801 82.4732 92.2309 82.4454 92.2721 82.4056C92.3132 82.3659 92.3431 82.3156 92.3587 82.26C92.3743 82.2045 92.375 82.1457 92.3606 82.0898C92.3463 82.0338 92.3176 81.9829 92.2773 81.9421L89.1825 78.8157L89.1062 78.7491C88.9968 78.6694 88.8657 78.6267 88.7313 78.627ZM92.0507 72.8259H76.3954C76.2262 72.8258 76.0637 72.8936 75.9432 73.0147L72.8505 76.1411C72.806 76.1864 72.7757 76.2441 72.7634 76.3069C72.7512 76.3698 72.7576 76.4349 72.7817 76.4941C72.8059 76.5532 72.8468 76.6037 72.8992 76.6391C72.9516 76.6745 73.0132 76.6932 73.0761 76.6929H88.7313C88.9006 76.6931 89.0631 76.6253 89.1836 76.5042L92.2763 73.3788C92.3212 73.3336 92.3518 73.2758 92.3643 73.2128C92.3767 73.1498 92.3704 73.0844 92.3462 73.025C92.322 72.9656 92.2809 72.915 92.2283 72.8795C92.1756 72.844 92.1138 72.8254 92.0507 72.8259Z" fill="#2E3042"></path>
                            <ellipse cx="37.4359" cy="78.7687" rx="17.4359" ry="17.5832" fill="white"></ellipse>
                            <path d="M43.9081 78.9791L37.4362 82.8079L30.96 78.9791L37.4362 68.2188L43.9081 78.9791ZM37.4362 84.0374L30.96 80.2086L37.4362 89.3434L43.9124 80.2086L37.4362 84.0374Z" fill="#2E3042"></path> */}
                            <ChatIcon style={{ color: 'rgb(255 255 255 / 68%)' }} />
                            <defs>
                                <linearGradient id="paint0_linear_1366_4565" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.7"></stop>
                                    <stop offset="0.505208" stop-color="white" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0.7"></stop>
                                </linearGradient>
                                <radialGradient id="paint1_radial_1366_4565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="#363437" stop-opacity="0.2"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                        <p class="card-title">Real-Time Chat App</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Coded a real time web app for chatting, synced with Google account. Users can converse with multiple contacts, and can see whether another person is currently logged in or not.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Accomplished real-time communication using WebSockets and Node.js.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Designed front-end of the web app leveraging Material UI components, and React.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Handled user authentication and storage of user, conversation, and message information through MongoDB.</p>
                    </div>
                </div>

                <div class="projects-card">
                    <div class="container-card bg-yellow-box">
                        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4557)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4557)" stroke-width="2"></rect>
                            <path d="M74.2105 36C73.373 36 72.5698 35.6839 71.9776 35.1213C71.3853 34.5587 71.0526 33.7956 71.0526 33C71.0526 32.2044 71.3853 31.4413 71.9776 30.8787C72.5698 30.3161 73.373 30 74.2105 30H86.8421C87.6796 30 88.4829 30.3161 89.0751 30.8787C89.6673 31.4413 90 32.2044 90 33V45C90 45.7956 89.6673 46.5587 89.0751 47.1213C88.4829 47.6839 87.6796 48 86.8421 48C86.0046 48 85.2014 47.6839 84.6091 47.1213C84.0169 46.5587 83.6842 45.7956 83.6842 45V40.242L65.3905 57.621C64.7983 58.1834 63.9953 58.4994 63.1579 58.4994C62.3205 58.4994 61.5175 58.1834 60.9253 57.621L52.1053 49.242L35.3905 65.121C34.7949 65.6675 33.9972 65.9699 33.1693 65.963C32.3413 65.9562 31.5492 65.6407 30.9637 65.0845C30.3782 64.5282 30.0461 63.7758 30.0389 62.9892C30.0317 62.2026 30.35 61.4448 30.9253 60.879L49.8726 42.879C50.4648 42.3166 51.2679 42.0006 52.1053 42.0006C52.9426 42.0006 53.7457 42.3166 54.3379 42.879L63.1579 51.258L79.219 36H74.2105ZM36.3158 78V87C36.3158 87.7957 35.9831 88.5587 35.3909 89.1213C34.7986 89.6839 33.9954 90 33.1579 90C32.3204 90 31.5171 89.6839 30.9249 89.1213C30.3327 88.5587 30 87.7957 30 87V78C30 77.2043 30.3327 76.4413 30.9249 75.8787C31.5171 75.3161 32.3204 75 33.1579 75C33.9954 75 34.7986 75.3161 35.3909 75.8787C35.9831 76.4413 36.3158 77.2043 36.3158 78ZM52.1053 66C52.1053 65.2043 51.7726 64.4413 51.1803 63.8787C50.5881 63.3161 49.7849 63 48.9474 63C48.1098 63 47.3066 63.3161 46.7144 63.8787C46.1222 64.4413 45.7895 65.2043 45.7895 66V87C45.7895 87.7957 46.1222 88.5587 46.7144 89.1213C47.3066 89.6839 48.1098 90 48.9474 90C49.7849 90 50.5881 89.6839 51.1803 89.1213C51.7726 88.5587 52.1053 87.7957 52.1053 87V66ZM64.7368 69C65.5744 69 66.3776 69.3161 66.9698 69.8787C67.562 70.4413 67.8947 71.2043 67.8947 72V87C67.8947 87.7957 67.562 88.5587 66.9698 89.1213C66.3776 89.6839 65.5744 90 64.7368 90C63.8993 90 63.0961 89.6839 62.5039 89.1213C61.9117 88.5587 61.5789 87.7957 61.5789 87V72C61.5789 71.2043 61.9117 70.4413 62.5039 69.8787C63.0961 69.3161 63.8993 69 64.7368 69ZM83.6842 57C83.6842 56.2044 83.3515 55.4413 82.7593 54.8787C82.1671 54.3161 81.3638 54 80.5263 54C79.6888 54 78.8856 54.3161 78.2933 54.8787C77.7011 55.4413 77.3684 56.2044 77.3684 57V87C77.3684 87.7957 77.7011 88.5587 78.2933 89.1213C78.8856 89.6839 79.6888 90 80.5263 90C81.3638 90 82.1671 89.6839 82.7593 89.1213C83.3515 88.5587 83.6842 87.7957 83.6842 87V57Z" fill="#FFEE24"></path> */}
                            <WorkIcon style={{ color: 'rgb(190 225 7 / 73%)' }} />
                            <defs>
                                <linearGradient id="paint0_linear_1366_4557" x1="-0.0208152" y1="-0.102528" x2="119.899" y2="119.817" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFE34B" stop-opacity="0.7"></stop>
                                    <stop offset="0.510417" stop-color="#FFE34B" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#FFE34B" stop-opacity="0.7"></stop>
                                </linearGradient>
                                <radialGradient id="paint1_radial_1366_4557" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                                    <stop stop-color="#FFEE24"></stop>
                                    <stop offset="1" stop-color="#302A1A" stop-opacity="0.2"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                        <p class="card-title">Job Search Portal</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Launched a responsive social media platform, allowing users to post job seeking/opening information.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Accomplished theme toggle between 2 themes, and utilized Google API for the latest news posting feature.</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Executed MongoDB CRUD operations using Mongoose, and utilized Recoil to manage state of application and improve performance (Link to web app).</p>
                    </div>
                </div>

                <div class="projects-card">
                    <div class="container-card bg-blue-box">
                        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <RamenDiningIcon style={{ color: 'rgb(23 121 190 / 90%)' }} />
                            {/* <path d="M90.9405 64.775L88.0155 69.55L85.1155 64.775H80.0655L85.5155 72.85L79.5905 82H84.4905L88.0155 76.175L91.5155 82H96.4405L90.4905 72.85L95.9405 64.775H90.9405Z" fill="#87A1FF"></path>
                            <path d="M44.9833 35.52L27.3433 43.92V52.53L35.1833 49.17V82H44.9833V35.52ZM71.37 35.52L53.73 43.92V52.53L61.57 49.17V82H71.37V35.52Z" fill="#87A1FF"></path> */}
                            <defs>
                                <linearGradient id="paint0_linear_1366_4582" x1="120.194" y1="119.827" x2="-13.1225" y2="17.1841" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#61A0FF" stop-opacity="0.7"></stop>
                                    <stop offset="0.489583" stop-color="#61A0FF" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#61A0FF" stop-opacity="0.7"></stop>
                                </linearGradient>
                                <radialGradient id="paint1_radial_1366_4582" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                                    <stop stop-color="#87A1FF"></stop>
                                    <stop offset="1" stop-color="#16161D" stop-opacity="0.2"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                        <p class="card-title">Hierarchical Clustering of World Cuisines</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Characterized the unique features that are central to 25 different world cuisines in an attempt to establish inter-relatedness of these world cuisines (using FP-Growth Algorithm).</p>
                        <p class="card-description"><span style={{marginRight: '5px'}}>•</span> Generated 3 dendrograms (for distinct distance metrics) to visualize the interrelationship between different world cuisines using the concept of Hierarchical Clustering.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects