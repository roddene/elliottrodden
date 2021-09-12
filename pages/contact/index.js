// www.ca.com/projects

import { Fragment } from 'react';
import NavBar from '../components/navbar'
import Image from 'next/image'

function Contact() {
    return (<Fragment>
        <NavBar></NavBar>
        <h1>Contact</h1>

        <p>
            <div className="contact-box">
                <a href="https://www.linkedin.com/in/elliott-rodden">
                    <Image id="linkedin" src="linkedin.png" />
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/elliott-rodden">  elliott-rodden</a>
            </div>
            <br></br>
            <div className="contact-box">
                <a href="mailto:roddene1@gmail.com">
                    <Image id="email" src="email.png" />
                </a>
                <a className="contact-link" href="mailto:roddene1@gmail.com">roddene1@gmail.com</a>
            </div>
        </p>
    </Fragment>

    )
}

export default Contact;