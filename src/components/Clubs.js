import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/clubs.css';


const Clubs = () => {
    
    const clubsDetails = [
            {
                club: "Sirius BP",
                img: require("../assets/clubLogo.jpg"),
                alt: "the logo of Sirius Bike Polo Club", 
                instagram: "https://www.instagram.com/bhbikepolo/",
                youtube: "#",
            },
        
            {
                club: "Vega BP",
                img: require("../assets/clubLogo.jpg"),
                alt: "the logo of Vega Bike Polo Club",
                instagram: "https://www.instagram.com/bikepolocwb",
                youtube: "https://www.youtube.com/@bikepolocwb6382",
                
            },

            {
                club: "Rigel BP",
                img: require("../assets/clubLogo.jpg"),
                alt: "the logo of Rigel Bike Polo Club",
                instagram: "https://www.instagram.com/bikepolofortaleza/",
                youtube: "#",
            },

            {
                club: "Hadar BP",
                img: require("../assets/clubLogo.jpg"),
                alt: "the logo of Hadar Bike Polo Club",
                instagram: "https://www.instagram.com/bikepolofloripa/",
                youtube: "#",
            },

        {
            club: "Betelgeuse BP",
            img: require("../assets/clubLogo.jpg"),
            alt: "the logo of Amber Bike Polo Club",
            instagram: "https://www.instagram.com/bhbikepolo/",
            youtube: "#",
        },

        {
            club: "Pollux BP",
            img: require("../assets/clubLogo.jpg"),
            alt: "the logo of Pollux Bike Polo Club",
            instagram: "https://www.instagram.com/bikepolocwb",
            youtube: "https://www.youtube.com/@bikepolocwb6382",

        },

        {
            club: "Deneb BP",
            img: require("../assets/clubLogo.jpg"),
            alt: "the logo of Deneb Bike Polo Club",
            instagram: "https://www.instagram.com/bikepolofortaleza/",
            youtube: "#",
        },

        {
            club: "Mimosa BP",
            img: require("../assets/clubLogo.jpg"),
            alt: "the logo of Mimosa Bike Polo Club",
            instagram: "https://www.instagram.com/bikepolofloripa/",
            youtube: "#",
        },
    ];

    return (
        <section className="clubsSection">
            <div className="wrapper clubsContainer">
                <h2>Clubs</h2>
                <ul className="clubsUl">
                    {clubsDetails.map((item, index) => {
                        for (let i=0; i < clubsDetails.length; i++) {
                            return (
                                <li key={index} className='clubsLi'>
                                    <ClubDiv className="clubDiv"
                                        name={item.club}
                                        image={item.img}
                                        altText={item.alt}
                                        instagram={item.instagram}
                                    />
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </section>
    )
};

const ClubDiv = ({ name, image, altText, instagram}) => {

    return (
        <div className="clubDivContainer">
            <p>{ name }</p>
            <div><Link to={instagram} target="_blank"><img src={ image } alt={ altText }/></Link></div>
            <div className="clubIconsContainer">
                {/* <Link to={instagram} target="_blank">
                    <i className="fa-brands fa-square-instagram icon"></i>
                </Link> */}
            </div>
        </div>
    )
};

export default Clubs;