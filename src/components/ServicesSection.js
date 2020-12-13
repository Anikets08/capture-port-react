import React from 'react'
import clock from '../images/clock.svg';
import diaphgram from '../images/diaphragm.svg';
import teamwork from '../images/teamwork.svg';
import money from '../images/money.svg';
import home2 from '../images/home2.png';

const ServicesSection = () => {
    return (
        <div className='services'>
            <div className="discription">
                <h2>Hight <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clockIcon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphgram} alt="diaphram"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="clockIcon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt=""/>
            </div>
        </div>
    )
}

export default ServicesSection
