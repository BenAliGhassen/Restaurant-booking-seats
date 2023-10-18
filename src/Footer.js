import footerimg from "./icons_assets/restaurant.jpg";
export const Footer= ()=> {
    return(
        <footer>
          <section className="footer"> 
              <img src={footerimg} alt="last_img" className="footerimg"/>
              
              <ul className="footer_nav">
              <h3>Navigation</h3>
              <li className='Nav_menu'><a  href="#none">Home </a></li>
          <li className='Nav_footer'><a  href="#none">About</a></li>
          <li className='Nav_footer'><a  href="#none" >Menu</a></li>
          <li className='Nav_footer'><a  href="#none">Reservation</a></li>
          <li className='Nav_footer'><a  href="#none">Order online</a></li>
          <li className='Nav_footer'><a  href="#none">Login</a></li>
              </ul>
              <ul className="footer_nav">
              <h3>Contact us</h3>
              <li className='Nav_menu'><a  href="#none">Adrresse </a></li>
          <li className='Nav_footer'><a  href="#none">Phone</a></li>
          <li className='Nav_footer'><a  href="#none" >Email</a></li>
              </ul>
              <ul className="footer_nav">
              <h3>Social Media</h3>
              <li className='Nav_menu'><a  href="#none">Facebook </a></li>
          <li className='Nav_footer'><a  href="#none">Instagram</a></li>
          <li className='Nav_footer'><a  href="#none" >Twitter</a></li>
         
              </ul>
          </section>
      </footer>
    );
}