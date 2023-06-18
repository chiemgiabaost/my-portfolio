import React from 'react'
import "./nav.css"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActive] = useState("#")
  return (
    <nav>
      <a href='#' onClick={()=> setActive("#")} className={activeNav === "#"? "active": ""}><HomeIcon/></a>
      <a href='#About' onClick={()=> setActive("#about")} className={activeNav === "#about"? "active": ""} ><InfoIcon/></a>
      <a href='#Experience' onClick={()=> setActive("#experience")} className={activeNav === "#experience"? "active": ""}><MenuBookIcon/></a>
      <a href='#Portfolio' onClick={()=> setActive("#Portfolio")} className={activeNav === "#Portfolio"? "active": ""}><WorkIcon/></a>
      <a href='#Contact' onClick={()=> setActive("#Contact")} className={activeNav === "#Contact"? "active": ""}><CallIcon/></a>
    </nav>
  )
}

export default Nav