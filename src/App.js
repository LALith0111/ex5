import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
     {
       show?<h1>Kongu Engineering College</h1>:null
     }
     {/* <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button> */}
<button onClick={()=>setShow(!show)} >Hide</button> 
    </div>
  );
}

export default App;
