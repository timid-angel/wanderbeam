import logo from '../assets/sample-logo-main.png';
import '../styles/Footer.css';
import { Facebook, LinkedIn, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return <footer>
    
    <div className='footer-links'>
        <a href=''>About  |</a>
        <a href=''>Team  |</a>
        <a href=''>FAQ's</a>
    </div>
    <img className='logo' src={logo} alt='logo'/>
    <div className='socialmedia-container'>
        <div className='social-media'>
            <a href=''><LinkedIn/></a>
            <a href=''><Twitter/></a> 
            <a href=''><Facebook/></a> 
            <a href=''><Instagram/></a>
           
            
        </div>
        <div>
            <p>Based in Addis Abeba, Ethiopia</p>
            <img/>
        </div>
    </div>
  </footer>;
};


export default Footer;
