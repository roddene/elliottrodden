import {Fragment} from 'react';
import Image from 'next/image'
import NavBar from './components/navbar'
import profilePic from '../public/photos/IMG_20210906_164421.jpg';
function HomePage(){
    return(<Fragment>
   <NavBar></NavBar>
    <h1>Home</h1>
    <div className = "mainpic">
    <Image src = {profilePic} alt = "" />
    </div>
    </Fragment>

    )}

export default HomePage