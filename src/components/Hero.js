import React from 'react'
import { Button } from './Button'
import './Hero.css';
import video from '../videos/video.mp4';

import Typical from 'react-typical'
function Hero() {
    return (
        <div className='hero-container'>


            <video src={video} autoPlay loop muted></video>
            <h1>Title  bhej

                <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        ' please',
                        1000,
                        ' jaldi',
                        1000,
                        ' bhej de',
                        1000

                    ]}
                />
            </h1>

            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <br></br>
                <br></br>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER</Button>
            </div>
        </div>
    );
};

export default Hero;