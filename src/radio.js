import React,{useState} from 'react';


/**
* @author
* @function 
**/

 const Radio = () => {

    // const [radio, setRadio] = useState([])
    var setRadio = []
    // const [radio1, setRadio1] = useState()
  return(
    <div>
        <form>
    <input type= "radio" id="1" value="apple" onChange={(e) => setRadio.push(e.target.value)} />
    <label>Apple : </label>

    <input type= "radio" id ="1" value="mango" onChange={(e) => setRadio.push(e.target.value)} />
    <label>Mango : </label>

        </form>
        <div><h3>Hello {setRadio}</h3></div>

        <form>
    <input type= "radio"  id = "2" value="car" onChange={(e) => setRadio.push(e.target.value)} />
    <label>Car : </label>

    <input type= "radio"  id="2" value="bike" onChange={(e) => setRadio.push(e.target.value)} />
    <label>Bike : </label>

        </form>
        <div><h3>Hello {setRadio}</h3></div>

    </div>
   )

 }

 export default Radio;