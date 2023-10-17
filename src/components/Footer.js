import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
                <div className="footer">
                <p>Created with ❤ + 🚲 by <Link to="https://www.silviazlo.com" class="linkToSilvia">Silvia in 2023.</Link></p>
            </div>
        </footer>
    )
}

export default Footer;