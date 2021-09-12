import {Fragment} from 'react';
import NavBar from './components/navbar'
function HomePage(){
    return(<Fragment>
   <NavBar></NavBar>
    <h1>Home</h1>
    <img className = "mainpic" src = "photos/IMG_20210906_164421.jpg"/>
    <p>Welcome to my Website!</p>
    </Fragment>

    )}

export default HomePage