import { Link } from 'react-router-dom';
import Button from './Button';
import { useRef, useState } from 'react';
import '../styles/hero.css';
// import video from '../assets/sampleVideo.mp4'
import video from '../assets/tainhaMalinaInstaVideo.mp4'


export const Hero = () => {

    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <div className="heroContainer">
            <div className='playNpauseButtons'>
                <div className="playButton" onClick={handlePlay}><i class="fa-solid fa-circle-play"></i></div>
                <div className="pauseButton" onClick={handlePause}><i class="fa-solid fa-pause"></i></div>
            </div>
            <video src={video} autoPlay loop muted ref={videoRef}/>
            {/* <img src="../assets/saopaulobp.jpg" /> */}
            
            <div className="wrapper heroTextWrapper">
                <div className="heroText">
                    <h1><span className="marsH1">Mars</span><span className="dotH1">.</span> Bike Polo</h1>
                    <p className='heroP'>Martian Bike Polo Association</p>
                    <Link to="/About">
                        <Button onClick={console.log("button's been clicked")}>
                        MORE
                        </Button>
                    </Link>   
                </div>
            </div>
        </div>
    );
}; 



// const videoRef = useRef()
// const [click, setClick] = useState(false);

// const handleclick = () => setClick(!click);
// const pauseOrPlay = () => videoRef.current.setClick(false);

// return (
//     <div className="heroContainer">
//         <div className='playNpauseButtons' onClick={handleclick}>
//             <div className="click ? fa-pause : fa-circle-play" onClick={pauseOrPlay}></div>
//         </div>
//         <video src={video} autoPlay loop muted ref={videoRef} />
//         {/* <img src="../assets/saopaulobp.jpg" /> */}

//         <h1>Brasil Bike Polo</h1>
//         <p className='heroP'>Brazilian Bike Polo Association</p>
//         <Link to="/About">
//             <Button onClick={console.log("button's been clicked")}>
//                 MORE
//             </Button>
//         </Link>
//     </div>
// )
// }

    export default Hero;