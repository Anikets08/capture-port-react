import React from 'react'
import home1 from '../images/home1.png';
import styled from 'styled-components';

function AboutSection() {
    return (
        <About>
            <Discription>
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas that you have . We have
                proffesional with amazing skills</p>
                <button>Contact us</button> 
            </Discription>  
            <Img>
                <img src={home1} alt="cameraGuy"/>
            </Img>  
        </About>
    );
};

//styled components
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`
const Discription = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`

const Img = styled.div`
flex: 1;
`


export default AboutSection
