
import { Fragment } from 'react';
import NavBar from '../components/navbar'
import {Document,Page,pdfjs} from 'react-pdf';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;


function About() {
    return (<Fragment>
        <NavBar></NavBar>
        <h1>About</h1>
        <p>
            I was born in Raleigh, North Carolina.
        </p>
        <p>
            I grew up in High Point, North Carolina.
        </p>
        <p>
            I enjoy all types of programming but I spend most of my time web programming.
        </p>
        <p>
            Please check out my resume below.
        </p>
                
        <Document id = "pdfviewer" file = "/Elliott_Rodden_Resume.pdf">
        <Page pageNumber = {1}/>
        </Document>
        
        <br></br>
       
    <a href={'/Elliott_Rodden_Resume.pdf'}>Click here to download my resume</a>
        <br></br>
    </Fragment>

    )
}

export default About;