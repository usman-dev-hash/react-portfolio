import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)

        return () => {
            clearTimeout(timer);
        }
    },[])

    const renderPortfolio = (portfolioData) => {
        return (
            <div className={'images-container'}>
                {
                    portfolioData.map((port, idx)=>{
                        const {cover, title, description, url} = port;
                        return (
                            <div className={'image-box'} key={idx}>
                                <img
                                src={cover}
                                className={'portfolio-image'}
                                alt={title}
                                />
                                <div className={'content'}>
                                    <p className={'title'}>{title}</p>
                                    <h4 className={'description'}>{description}</h4>
                                    <button className={'btn'} onClick={() => window.open(url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
        <div className={'container portfolio-page'}>
            <h1 className={'page-title'}>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={ "Portfolio".split('') }
                    idx={15}
                />
            </h1>
            <div className={''}>{ renderPortfolio( portfolioData.portfolio ) }</div>
        </div>
            <Loader type={'pacman'} />
        </>
    )
}

export default Portfolio;