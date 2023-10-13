import { Link } from 'react-router-dom';
import '../styles/contact.css';


const Contact = () => {
    return (
        <>
        <section className="contact" id="contact">
            <div className="contactContainer wrapper">
                <h2>Contact</h2>
                <div>
                    <ul className="contactIcons">
                        <li className='eachIcon'>
                            <Link to="https://www.youtube.com/c/BrasilBikePolo" target="_blank">
                                    <i className="fa-brands fa-youtube"></i>
                            </Link>
                        </li>

                        <li className='eachIcon'>
                                <Link to="http://www.instagram.com/bikepolobrasil" target="_blank">
                                <i className="fa-brands fa-square-instagram"></i>
                            </Link>
                        </li>

                        <li className='eachIcon'>
                            <Link to="http://www.facebook.com/brasilbikepolo" target="_blank">
                                <i className="fa-brands fa-square-facebook"></i>
                            </Link>
                        </li>

                    </ul>
                </div>
                {/* <p>bikepolobrasil@gmail.com</p>
                <p>OR</p>  */}
                <form className="contactForm" action="https://formsubmit.co/hellosilviazlo@gmail.com" method="POST" target="_blank">
                    <ul className="formSpaces">
                        <li>
                            <label for="name"></label>
                            <input id="name" placeholder="your name here" />
                        </li>
                        <li>
                            <label for="email"></label>
                            <input id="email" type="email" name="contact" placeholder="your e-mail here" />
                        </li>
                        <li>
                            <textarea id="message" name="message" placeholder="your message here"></textarea>
                        </li>
                        <li>
                            <input type="submit" className="submitButton" value="Send" />
                        </li>
                    </ul>

                </form>
            </div>
        </section>
        </>
    )
}

export default Contact;