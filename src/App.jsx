// import './index.css'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  const currrent_theme = localStorage.getItem('currrent_theme');
  const[theme, setTheme] = useState(currrent_theme? currrent_theme:'light');

  useEffect(()=>{
    localStorage.setItem('currrent_theme', theme)
  },[theme]);
  
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App