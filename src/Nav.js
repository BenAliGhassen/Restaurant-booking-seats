import { useState } from "react";
import logo from "./icons_assets/Logo .svg";
import hmenu from "./icons_assets/hmenu.png";

export const Nav = ()=>{
  const [Id , setId] = useState(false);

  function showMenu (){
    setId(!Id);
   }
    return(
        <nav className='Nav_bar'>
            <section className='menu'>
        <img src={logo} alt='logo' id="logo"/>
        
        <ul id={Id ? 'hmenu' : 'bar_nav'}>
          <li className='Nav_menu'><a  href="#none">Home </a></li>
          <li className='Nav_menu'><a  href="#none">About</a></li>
          <li className='Nav_menu'><a  href="#none" >Menu</a></li>
          <li className='Nav_menu'><a  href="#none">Reservation</a></li>
          <li className='Nav_menu'><a  href="#none">Order online</a></li>
          <li className='Nav_menu'><a  href="#none">Login</a></li>
        </ul>
        <img src={hmenu} alt="hamburger_menu" id='hamburger_menu' onClick={showMenu}/>
        </section>
      </nav>
    );
}