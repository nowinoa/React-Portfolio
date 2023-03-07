import './index.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function HomePage() {
    return (
        <div className='home-page'>
            <div className='box about'>
                <img src="../63256.jpg" alt="Ainhoa Frontend Developer" />
                <div>
                Welcome to my portfolio, my name is <span className='name'>Ainhoa</span>, and I am a skilled frontend developer hailing from Spain, currently based in the vibrant city of London, UK. My passion lies in the creation and design of cutting-edge websites that are visually stunning, easy to navigate, and highly functional.
                </div>
            </div>
            <div className='box map'>
                <h2 className="city">London</h2>
            </div>
            <div className='box home-projects'>
                <button>Proyects</button>
                <img src="../phone-developer.png" alt="projects frontend development"/>
            </div>
            <div className="box tools">
                <button><h2 className="tools-title">Tools</h2></button>
            </div>
            <div className="box linkedin">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" className='linkedin-icon' style={{color: '#77ffcb', width: 100, height: 100}}/>
            </div>
            <div className="box toggle">
                <button>Toogle here!</button>
                <img src="../58982.jpg" alt="Memoji Ainhoa Frontend Developer"/>
            </div>
            <div className="box contact">
                <p>If you have any questions or would like to discuss my projects further, why wait? Let's connect today and explore any potential collaborations or opportunities together</p>
                <button>contact</button>
            </div>
            <div className="box github">
                <FontAwesomeIcon icon="fa-brands fa-github" className='github-icon' style={{ width: 100, height: 100}}/>
            </div>
            
         
        </div>
    )
}

export default HomePage;

//search color palette
//select bg shapes
//add an image to projects -- > here you can use memoji with pc or as the other guy did you can also try to desing on figma something 