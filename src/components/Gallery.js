
import { Link } from 'react-router-dom';
import '../styles/gallery.css';
import ball from '../assets/checkallgallerycontent.jpg';


const Gallery = () => {
        
    return (

        <section className="gallery">
            <div className='galleryDiv wrapper'>
                <h2>Watch</h2>
                <div className="videos">
                    <div className="video">
                    <iframe width="213" height="120"  
                    src="https://www.youtube.com/embed/nSukdP4IU8c" 
                    title="VINHETA BIKE POLO A SÉRIO" 
                    frameborder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" 
                    allowFullScreen="allowFullScreen"></iframe>
                    </div>

                    <div className="video">
                        <iframe width="213" height="120" 
                        src="https://www.youtube.com/embed/YIQWAOOg_Bs" 
                        title="Live Polo a Sério #16 - com CHACO" 
                        frameborder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                        allowFullScreen="allowFullScreen" ></iframe>
                    </div>

                    <div className="video">
                        <iframe width="213" height="120" src="https://www.youtube.com/embed/iA8nRUs8bQ8" title="CAIPIRA PIRA POLO X DIZZY" frameborder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; 
                     "
                            allowFullScreen="allowFullScreen"></iframe>
                    </div>

                    <div className="video">
                    <iframe width="213" height="120" src="https://www.youtube.com/embed/DK0CV1FZASc" title="Live Polo a Sério #15 - ROLETA RUSSA" frameborder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; 
                     "
                    allowFullScreen="allowFullScreen"
                     className="lastVideo"></iframe>
                    </div>

                    <Link to='/GalleryPage'><img src={ball} alt="a bike polo ball with the say 'I want to see all'" className="galleryBall"/></Link>
                </div>
            </div>                     
        </section>
    )
};

export default Gallery;
