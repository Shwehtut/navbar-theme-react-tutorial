/* eslint-disable react/prop-types */
import './Navbar.css';
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_white from '../../assets/search-w.png'
import search_black from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'


const Navbar = ({theme,setTheme}) => {

    const toogle_theme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className="navbar">
        <img src={theme == 'light'? logo_light : logo_dark} alt="" className='logo'/>

        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>

        <div className="search-box">
            <input type="text" placeholder='Search....'/>
            <img src={theme == 'light'?  search_white: search_black} alt="" />
        </div>

        <img onClick={()=> toogle_theme()} src={theme == 'light'? toogle_light: toogle_dark} alt="" className='toogle-icon'/>

    </div>
  )
}

export default Navbar