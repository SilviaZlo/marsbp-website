import { Routes, Route } from 'react-router-dom';
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Clubs from "../components/Clubs";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>

            <Hero />            
            
            <Clubs />
            
            <Gallery />

            <Contact />
        
        </>
    )
}

export default Home;