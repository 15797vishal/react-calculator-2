 import React,{useState} from "react";
import './App.css';

function App() {
   const [num1, setNum1]=useState("Enter the number 1");
   const [num2, setNum2]=useState("Enter the number 2");
   const [ans, setans]=useState(0);

   const handlechange= (event)=>{

    const {name,value}=event.target;
    
     if(name==="num1")setNum1(parseInt(value));
     else if(name==="num2") setNum2(parseInt(value));
    console.log(event);
   }  

   const handleaction =(action) =>{ 
    if(action =="+" ) setans(num1+num2)
    else if(action ==="-")setans(num1-num2)
    else if(action ==="/") setans(num1/num2)
    else if(action==="*")setans(num1*num2);
    else{
      console.log("error please enter valid response")
    } 
    if(action.length<0){
      window.alert("number cannot be empty ")
    }
   }; 

  return ( 
    
    <div className="App">  
    
    <h2>react calulator </h2>
<form>
   
    <input type="number" name="num1" value={num1} 
    onChange={handlechange}  placeholder="Enter the number 1" /><br></br>
    <input type="number" name="num2" value={num2}
     onChange={handlechange}  placeholder="Enter the number 2"/><br></br>
    
    <button type="button"  onClick= {() => handleaction("+")}>+</button>
    <button  type="button" onClick={() => handleaction("-")}>-</button> 
    <button  type="button" onClick={() => handleaction("/")}>/</button> 
    <button  type="button" onClick={() => handleaction("*")}>*</button> 
    <h3>ans: {ans}</h3>
</form>

    </div> 
  

  );
}

export default App;
