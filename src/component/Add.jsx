import { useState,useEffect } from 'react';

export default function Counter() {
  const[result,setResult]=useState(0);
  const[input1,setOne]=useState(0);
   const[input2,setTwo]=useState(0);
  
  function handleSubmit(){
    setResult(Number(input1)*Number(input2))
  } 
  
  function handleChange1(e){
    setOne(e.target.value);
  }
function handleChange2(e){
    setTwo(e.target.value);
  } 




  return (
    <>
    <input type='number' placeholder="enter your 1st number"  onChange={handleChange1}/>
        <input type='number' placeholder="enter your 2ND number" onChange={handleChange2} />
        <button onClick={handleSubmit}>
        multiply
        </button>


        <h1>your result is:{result}</h1>
      </>
      
    
  );
}