import logo from '../../assets/sample-logo-main.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-description'>
                <img className='logo' src={logo} alt='logo'/>
                <h2>WanderBeam</h2>
            </div>

            <select className='header-select'>
                <option>EN</option>
            </select>
        </div>
    );
}


export default Header