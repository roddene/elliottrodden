
import { Fragment } from 'react';
import NavBar from '../components/navbar'
import Image from 'next/image'
import mandle from '../../public/mandlebrotviz.png'
import spot from '../../public/spotifootube.png'
function Projects() {
    return (<Fragment>
        <NavBar></NavBar>
        <h1>Projects</h1>
        <div className="projects">
            <a className="projtitle" href="https://mandelbrot-viewer.herokuapp.com/">Mandelbrot Viewer</a>
            <div className="project">
                <p className="projdesc">This project uses complex algebra to generate an interactive Mandelbrot Set visualization.  
                For each point on the coordinate plane, it iterates over that point up to 1,000 times to see if the iteration goes to infinity or not.
                If it does not it is considered part of the Mandelbrot set and its color corresponds to how many iterations it took before it shot off to infinity.
                There is also another interactive image of the Julia Set, which corresponds to a particular point within the Mandelbrot set.  
                The project also uses JavaScript multithreading to imporve performance with up to 16 threads at the same time being usable.  
                The window that displays the Mandelbrot and Julia Sets can also be resized for either more detail or faster calculations.</p>
                <div className="projectimg">
                    <Image src={mandle}></Image>
                </div>
            </div>
            <br></br>
            <a className="projtitle" href="https://spotifootube.herokuapp.com/">Spotifootube</a>
            <div className="project">
                <p className="projdesc">This project the YouTube and Spotify APIs in order to play music that exists on Spotify throught a YouTube player.
                Users can sign up to this website and then create as many playlists as they want and add as many songs as they want to each of their playlists.
                The player can interact with the music by playing, pausing, repeating, skipping, and shuffling within the playlist or changing the volume up and down.  
                Users can search Spotify for songs that they want to add to their playlist and a custom database will store their selections for them to come back to.
                
                </p>
                <div className="projectimg">
                    <Image className="projectimg" src={spot}></Image>
                </div>
            </div>
        </div>
    </Fragment>

    )
}

export default Projects