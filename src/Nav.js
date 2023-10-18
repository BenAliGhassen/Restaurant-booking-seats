import logo from "./icons_assets/Logo .svg"
export const Nav = ()=>{
    return(
        <nav className='Nav_bar'>
            <section className='menu'>
        <img src={logo} alt='logo' id="logo"/>
        
        <ul>
          <li className='Nav_menu'><a  href="#none">Home </a></li>
          <li className='Nav_menu'><a  href="#none">About</a></li>
          <li className='Nav_menu'><a  href="#none" >Menu</a></li>
          <li className='Nav_menu'><a  href="#none">Reservation</a></li>
          <li className='Nav_menu'><a  href="#none">Order online</a></li>
          <li className='Nav_menu'><a  href="#none">Login</a></li>
        </ul>
        </section>
      </nav>
    );
}