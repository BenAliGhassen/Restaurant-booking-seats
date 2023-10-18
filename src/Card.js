import delv from "./icons_assets/delv.png"
export const Card = (props)=>{
    return(
        <section className="Card">
                <img src={props.url} alt="food" className="card_img"/>
                <h3 className="plate_name">{props.name}<span className="price">{props.price}</span></h3>
                <p className="plate_description">{props.decrb}</p>
                <a href="#order_delv" className="delv_link">Order a deleviry<img src={delv} alt="" id="delv_img"/></a>
            </section>
    );
}