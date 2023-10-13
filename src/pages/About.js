import { Link } from 'react-router-dom';
import '../styles/about.css';

export default function About() {
    return (
        <section className="aboutPage">
            <div className="wrapper aboutContainer">
                <h2 className='about'>ABOUT</h2>
                <p>Check out our history, statute and game rules.</p>
                <h3>Brazil Bike Polo History</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h3>Rules</h3>
                <p>We currently follow the...</p>
                <Link to="https://eurobikepolo.com/ehba/rules" target="_blank"><p>European Hardcourt Bike Polo Association</p></Link>
                <Link to="https://www.nahardcourt.com/rules/" target="_blank"><p>North American Hardcourt Bike Polo Association</p></Link>
                <h3>Statute</h3>
                <p>Download</p>
            </div>
        </section>
    )
}