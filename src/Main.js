import sushi from "./icons_assets/restauranfood.jpg";
import salade from "./icons_assets/greek salad.jpg";
import desert from "./icons_assets/lemon dessert.jpg";
import brauchette from "./icons_assets/bruchetta.svg";
import { Card } from "./Card";
import { Testimonial } from "./Testimonial";
import resteau from "./icons_assets/restaurant chef B.jpg";
export const Main = ()=>{
    const salade_desc="The famous greek salade of crispy lettuce.papers,olives and our chicago style fora cheese.garnished with crunchy garlic and rosemary croutons";
    return(
        <main className="container">
        <section className="first_section">
        <section id="descitption">
          <h1>Littel Lemon</h1>
          <p>We are a family owned mediterianne restaurant focused on traditioanl recipes served with modern twist</p>
          <button className="yellow_btn">Reserve a table</button>
         
        </section> 
        <img src={sushi} alt='palteimg'  id="plate1"/>
        </section>
        <section className="Second_section">
            <h1>This week specials!</h1>
            <button className="yellow_btn">Online menu</button>
        </section>
        <section className="third_section">
            <Card name={"Greek salade"} price={"$12.99"} decrb={salade_desc} url={salade}/>
            <Card name={"Brauchette"} price={"$5.00"} decrb={salade_desc} url={brauchette} />
            <Card  name={"Lemon dessert"} price={"$5.99"} decrb={salade_desc} url={desert}/>
        </section>
        <section className="fourth_section">
                <Testimonial/>
        </section>
        <section className="last_section">
          <h1>Littel Lemon</h1>
          <p id="by_msg"><img src={resteau} alt="resteau_img" id="rest_img"/> Join us for an unforgettable dining experience. Our commitment to quality,
             flavor, and innovation ensures that every visit is a culinary adventure.
              Whether you're a regular patron or a first-time guest, we look forward to serving you with
               our delectable dishes and warm hospitality. Stay updated on our latest offerings,
                events, and promotions by signing up for our newsletter or following us on social media.
                 Thank you for choosing Littel Lemon as your dining destination. We can't wait to welcome you soon!"</p>
          
        </section>
      </main>
    );
}