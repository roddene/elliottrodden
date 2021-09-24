
import { Fragment } from 'react';
import NavBar from '../components/navbar'
import Image from 'next/image'
import mandle from '../../public/mandlebrotviz.PNG'
import spot from '../../public/spotifootube.PNG'


function Projects() {
    return (<Fragment>
        <NavBar></NavBar>
        <h1>Projects</h1>
        <div className="projects">
            <a className="projtitle" href="https://mandelbrot-viewer.herokuapp.com/">Mandelbrot Viewer</a>
            
            <p className="projdesc">This project uses complex algebra to generate an interactive Mandelbrot set visualization.
                For each point on the coordinate plane, it iterates over that point up to 1,000 times to see if the iteration goes to infinity or not.
                If it does not, it is considered part of the Mandelbrot set and its color corresponds to how many iterations it took before it shot off to infinity.
                There is also another interactive image of the Julia set, which corresponds to a particular point within the Mandelbrot set.
                The project uses JavaScript multithreading to improve performance with up to 16 threads at the same time being usable.
                The window that displays the Mandelbrot and Julia sets can also be resized for either more detail or faster calculations.</p>

                <div className="projectimg">
                    <Image src={mandle} alt=""></Image>
                </div>
            <br></br>
            <a className="projtitle" href="https://spotifootube.herokuapp.com/">Spotifootube</a>
            <p className="projdesc">This project uses the YouTube and Spotify APIs in order to play music that exists on Spotify through a YouTube player.
                Users can sign up to this website, create as many playlists as they want, and add as many songs as they want to each of their playlists.
                The player can interact with the music by playing, pausing, repeating, skipping, and shuffling within the playlist, or changing the volume up and down.
                Users can search Spotify for songs that they want to add to their playlist, and then a custom database will store their selections.

            </p>

                <div className="projectimg">
                    <Image className="projectimg" src={spot} alt=""></Image>
            </div>
        </div>
    </Fragment>

    )
}

export default Projects