import {useEffect, useState} from 'react'
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,} from '@fortawesome/free-brands-svg-icons'
//import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from "react-loaders";

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [divStyle, setDivStyle] = useState({ boxShadow: `0 0 20px 0 lightsalmon` });

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const generateRandomIntegerInRange = (min, max) => {
        return Math.random() * (max - min + 1) + min;
    }

    let i = 0;
    setInterval(() => {
        const colors = ["lightyellow", "lightyellow", "lightyellow", "lightyellow", "lightyellow", "lightyellow"];
        setDivStyle({boxShadow: `0 0 ${generateRandomIntegerInRange(20.0, 20.1)}px 0 ${colors[i]}`})
        i = (i + 1) % colors.length;
    }, 1000)

    return (
        <>
        <div className={'container about-page'}>
            <div className={'text-zone'}>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15} // here 15 means 1.5s delay
                    />
                </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, father of a beautiful daughter, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cube-spinner">
                    <div className="face1" style={divStyle} >
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

        </div>
            <Loader type={'pacman'}  active/>
        </>
    )
}

export default About;