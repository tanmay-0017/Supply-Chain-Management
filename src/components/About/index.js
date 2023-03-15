import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faIndustry, faPlaneDeparture, faShip, faTrainSubway, faTruckField, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import video2 from '../../videos/video1.mp4'
import { Link } from 'react-router-dom'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  return (
    <>
      <div className="about-page">
        <video src={video2} autoPlay loop muted></video>
        <div className="text-zone">
          <h1>
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'I', 'T', 'L', 'E', ' ', ' BATA', ' ', 'YAAR !!!!']}
              idx={15}
            /> */}
            ABOUT US
          </h1>
          <br />  <br />
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faTruckField} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faWarehouse} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPlaneDeparture} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faShip} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faTrainSubway} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faIndustry} color="#EC4D28" />
            </div>
          </div>
        </div>


      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About
