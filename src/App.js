import React, {useState} from "react";
import "./styles/App.css"
import SqureForm from "./components/squreform";
function App() {
   const  [squres, SetSqures]=useState([{size:100,key:0}])
  return (
    <div style={{padding:25+"px"}}>
       <SqureForm squres={squres} callback={function(el){SetSqures([...squres, el])}}/>
    </div>
  )
}
export default App;
