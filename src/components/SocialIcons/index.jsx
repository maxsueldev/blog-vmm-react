import { FaFacebookF, FaLinkedinIn, FaInstagram, FaHome } from "react-icons/fa";
import './style.scss';

export default function SocialIcons() {
    return (
        <section className="social-icons">
            <ul>
                <li><a href="#" target="_blank"><FaFacebookF /></a></li>
                <li><a href="#" target="_blank"><FaLinkedinIn /></a></li>
                <li><a href="#" target="_blank"><FaInstagram /></a></li>
                <li><a href="#" target="_blank"><FaHome /></a></li>
            </ul>
        </section>
    );
}