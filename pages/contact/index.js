// www.ca.com/projects

import { Fragment } from 'react';
import NavBar from '../components/navbar'
import Image from 'next/image'
import linkedinImg from '../../public/linkedin.png'
import emailImg from '../../public/email.png'
function Contact() {
    return (<Fragment>
        <NavBar></NavBar>
        <h1>Contact</h1>

        <p>
            <div className="contact-box">
                <a href="https://www.linkedin.com/in/elliott-rodden">
                    
                <div id = "linkedin">
                    <Image src={linkedinImg} alt = "" />
                    </div>
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/elliott-rodden">  elliott-rodden</a>
            </div>
            <br></br>
            <div className="contact-box">
                <a href="mailto:roddene1@gmail.com">
                <div id = "email">
                    <Image src={emailImg} alt = "" />
                </div>
                </a>
                <a className="contact-link" href="mailto:roddene1@gmail.com">roddene1@gmail.com</a>
            </div>
        </p>
    </Fragment>

    )
}

export default Contact;