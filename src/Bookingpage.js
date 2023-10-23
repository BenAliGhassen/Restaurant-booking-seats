import { Bookinform } from "./Bookinform";
import { Nav } from "./Nav";
import "./App.css";
import {useEffect,useReducer,useState } from "react";
import { fetchapi } from "./Api";

let freeTime=([]);


function Bookingpage(){
    const [date, setDate] = useState("");
    
    const initstate = {date : freeTime}
    const reducer = (state, action) => {
        if (action.type === 'pop') {
          return { ...state, date: state.date.filter(time => time !== action.payload) };
        }
      
        return state; 
      }

    const [state,dispatch] = useReducer(reducer,initstate);

  

   function popfreetime(Time) {
  dispatch({type : 'pop', payload:Time});
}

useEffect(() => {
  
  }, [state.date]);
    

    return(
        <section className="form_container">
        <Nav/>
        <h1>Book Your place now</h1>
        <Bookinform freeTime={fetchapi(date)} popfreetime={popfreetime} setDate={setDate}/>
        </section>
    );

}

export default Bookingpage;