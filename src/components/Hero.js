import { Link } from 'react-router-dom';
import Button from './Button';
import { useRef, useState } from 'react';
import '../styles/hero.css';
// import video from '../assets/sampleVideo.mp4'
import video from '../assets/tainhaMalinaInstaVideo.mp4'


export const Hero = () => {

    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        console.log(videoRef);
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="heroContainer">
            <div className='playNpauseButtons'>
                <div className="playPauseButton" onClick={handlePlayPause} >
                    {isPlaying ? 
                    (<i className="fa-solid fa-pause"></i>)
                    :
                    (<i className="fa-solid fa-circle-play"></i>)
                    }
                </div>
            </div>
            <video src={video} autoPlay loop muted ref={videoRef} />
        

            <div className="wrapper heroTextWrapper">
                <div className="heroText">
                    <h1><span className="marsH1">Mars</span><span className="dotH1">.</span> Bike Polo</h1>
                    <p className='heroP'>Martian Bike Polo Association</p>
                    <Link to="/About">
                        <Button onClick={console.log("MORE button's been clicked")}>
                            MORE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
    export default Hero;

