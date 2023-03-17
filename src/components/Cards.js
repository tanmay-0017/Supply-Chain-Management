import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import video from '../videos/video1.mp4'
import pic1 from '../images/dubai.jpg'
import pic2 from '../images/india.jpg'


function Cards() {
    return (
        <div className='cards'>

            <video src={video} autoPlay loop muted></video>
            <h1>TRY US OUT</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <CardItem
                    src={pic1}
                    text={<a href="http://127.0.0.1:5500/Supply_Chain_Management%20/Web3/index.html">Authenticate Website urls and find whether they are fishy or Safe</a>}
                    label='Adventure'
                    >
                    </CardItem>

                        <CardItem
                            src={pic2}
                            text="INDIA"
                            label='Adventure&Fun'
                            path='/services'
                        />


                    </ul>
                    {/* <ul className='cards__items'>
                        <CardItem
                            src={pic3}
                            text="Rome"
                            label='Fun'
                            path='/services'
                        />
                        <CardItem
                            src={pic4}
                            text="Switzerland"
                            label='Fun'
                            path='/services'
                        />
                    </ul> */}
                    {/* <ul className='cards__items'>
                        <CardItem
                            src={pic5}
                            text="France"
                            label='Fun'
                            path='/services'
                        />
                        <CardItem
                            src={pic6}
                            text="Amazon"
                            label='Fun'
                            path='/services'
                        />
                    </ul> */}

                </div>

            </div>

        </div>
    )
}

export default Cards
