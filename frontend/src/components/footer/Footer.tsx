import logo from '../../assets/sample-logo-main.png';
import './Footer.css';
import { Facebook, LinkedIn, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return <footer>
    
    <div className='footer-links'>
        <p>About  |</p>
        <p>Team  |</p>
        <p>FAQ's</p>
    </div>
    <img className='logo' src={logo} alt='logo'/>
    <div className='socialmedia-container'>
        <div className='social-media'>
            <LinkedIn/>
            <Twitter/>
            <Facebook/>
            <Instagram/>
            
        </div>
        <div>
            <p>Based in Addis Abeba, Ethiopia</p>
            <img/>
        </div>
    </div>
  </footer>;
};


export default Footer;
