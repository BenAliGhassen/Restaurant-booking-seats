function generatetime(from) {
    const freeTime = [];
    while (from <= 23) {
      freeTime.push(from + ":00");
      from=from+Math.floor(Math.random() * 5) + 1;
    }
    return freeTime; 
  }
  
  function fetchapi(date) {
    let objectDate = new Date();
  
    let hours = objectDate.getHours();
  
  
  
    let freeTime = [];

    
  
    if (Math.random(10) < 5) {
      freeTime = generatetime(hours-Math.floor(Math.random() * 10) + 1);
    } else {
      freeTime = generatetime(11);
    }
  
   
    return freeTime; 
  }
  
  export { fetchapi };
  