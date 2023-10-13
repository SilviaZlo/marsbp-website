

function Clubs() {
    const clubsDetails = {
        Curitiba: {
            club: "CWB BP",
            img: "../assets/curitibabp.jpg",
            alt: "the logo of Curitiba Bike Polo Club",
            instagram: "https://www.instagram.com/bikepolocwb",
            youtube: "https://www.youtube.com/@bikepolocwb6382",
        },

        Floripa: {
            club: "CWB BP",
            img: "../assets/floripabp.jpg",
            instagram: "https://www.instagram.com/bikepolocwb",
            youtube: "https://www.youtube.com/@bikepolocwb6382",
        },
    };

    return (
                <div>
                    {clubsDetails.map((city) => {   
                        return
                            <ClubDiv name={city.club} instagram={city.instagram} image={city.img} />
                        }
                    
                        )
                    }
                </div>
        
    )
};

const ClubDiv = (props) => {

    return(
        <div>
            <h3>{props.name}</h3>
            <img src={props.image} />
            <div className="clubIconsContainer">
                <Link to={props.instagram} target="_blank">
                    <i class="fa-brands fa-square-instagram"></i>
                </Link>
            </div>
        </div>
    )
};

/* // <h2>Clubs</h2>
               // <p>*If your club is not here, please let us know. Thank you!</p>
               // <div className="clubsContainer">
               //     <div className="oneClubContainer">
               //         <h3>{clubsObject.Curitiba.club}</h3> */
/* //         <img src={require({clubsObject.Curitiba.img})} /> */
//         <div className="clubIconsContainer">
//             <Link to={clubsObject.Curitiba.instagram} target="_blank"><i class="fa-brands fa-square-instagram"></i></Link>
//             <i class="fa-brands fa-youtube"></i>
//             <i class="fa-brands fa-square-facebook"></i>
//         </div>
//     </div>

//     <div className="oneClubContainer">
//         <h3>Curitiba BP</h3>
//         <img src={require("../assets/curitibabp.jpg")} />
//         <div className="clubIconsContainer">
//             <Link to="https://www.instagram.com/bikepolocwb" target="_blank"><i class="fa-brands fa-square-instagram"></i></Link>
//             <i class="fa-brands fa-youtube"></i>
//             <i class="fa-brands fa-square-facebook"></i>
//         </div>
//     </div>

//     <div className="oneClubContainer">
//         <h3>Floripa BP</h3>
//         <img src={require("../assets/floripabp.jpg")} />
//         <div className="clubIconsContainer">
//             <Link to="https://www.instagram.com/bikepolocwb" target="_blank"><i class="fa-brands fa-square-instagram"></i></Link>
//             <i class="fa-brands fa-youtube"></i>
//             <i class="fa-brands fa-square-facebook"></i>
//         </div>
//     </div>
//                 </div>
//            </div>
//         </section>
//     )
// } */
