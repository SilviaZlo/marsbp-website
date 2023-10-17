import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/galleryPage.css';


const GalleryPage = () => {

    const [videos, setVideos] = useState([]);

    useEffect ( () => {
        const apiKey = 'AIzaSyBkLijj7vF0Xj3DxGLkU0LYPRlM3mXLAgI';
        const uploadsId = "UUUfWL2L20ufCDSMRPVbk-xg";

        axios({
            url: "https://www.googleapis.com/youtube/v3/playlistItems",
            method: "GET",
            params: {
                part: "snippet",
                playlistId: uploadsId,
                key: apiKey,
                maxResults: 50,
            },
        }).then((response) => {
            console.log(response);
            setVideos(response.data.items)
        }).catch(function (error) {
            if (error.response) {
                console.log('Server responded with status code:', error.response.status);
                console.log('Response data:', error.response.data);
            } else if (error.request) {
                console.log('No response received:', error.request);
            } else {
                console.log('Error creating request:', error.message);
            }
        });
        ;
    }, [])

    return (

        <section className="galleryPage">
            <div className="wrapper galleryPageDiv">
                <h2>Watch</h2>
                 <div className="galleryPageVideos">
                    {videos.map((video)  => {
                        return ( 
                            <VideoCard
                                key={video.id} 
                                title={video.snippet.title}
                                imgSrc={video.snippet.thumbnails.default.url}
                                videoSrc={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                            />
                        )
                    }
                    )
                    }   
                </div> 
            </div>
        </section>
    )
}

const VideoCard = ({title, videoSrc}) => {
    return (
        <div className="videoCard">
            <p>{title}</p>
            <iframe 
                width="213" 
                height="120" 
                src={videoSrc}
                title={title}
                allowFullScreen
            >
            </iframe>
        </div>
    )
};

export default GalleryPage;

// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playListId=UUUfWL2L20ufCDSMRPVbk-xg&key=AIzaSyBkLijj7vF0Xj3DxGLkU0LYPRlM3mXLAgI&maxResults=10 

// https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUUfWL2L20ufCDSMRPVbk-xg&key=AIzaSyBkLijj7vF0Xj3DxGLkU0LYPRlM3mXLAgI

