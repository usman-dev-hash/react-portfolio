import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
//import 'react-leaflet/';

// service ID: service_wmrfuiu
// name: Usman Munir
// template id: template_b14foya
// public key: LimjXnPlh_oy1etgp
// private key: FnJdU5gt6f1X6BzxLf-FF

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_wmrfuiu", "template_b14foya", refForm.current, "LimjXnPlh_oy1etgp")
            .then(
                () => {
                    alert("Message successfully sent")
                    //window.location.reload(false);
                },
                () => {
                    alert("Failed to send the message, please try again")
                }
            )
    }

    return (
        <>
        <div className={'contact-page'}>
            <div className={'text-zone'}>
                <h1>
                    <AnimatedLetters
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        letterClass={letterClass}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div className={'contact-form'}>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className={'half'}>
                                <input type={"text"} name={'name'} placeholder={'Name'} required />
                            </li>
                            <li className={'half'}>
                                <input type={"email"} name={'email'} placeholder={'Email'} required />
                            </li>
                            <li>
                                <input type={"text"} placeholder={'Subject'} name={'subject'} required />
                            </li>
                            <li>
                                <textarea placeholder={'Message'} name={'message'} required />
                            </li>
                            <li>
                                <input type={'submit'} className={'flat-button'} value={'SEND'} />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className={'info-map'}>
                Usman Munir,
                <br />
                Pakistan,
                <br />
                DHA, 54000 <br />
                Lahore <br/>
                <span>usmandev17@gmail.com</span>
            </div>
            <div className={'map-wrap'}>
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>Usman lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
            <Loader type={'pacman'} active />
        </>
    )
}

export default Contact