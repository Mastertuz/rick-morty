import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer__inner">
                <Link to={'https://t.me/Mastertuz23'} className="footer__link">@Василий димитров</Link>
            </div>
        </footer>
     );
}
 
export default Footer;