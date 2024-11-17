import React,{useState} from "react";
function Text(){
    var [text,TextUp]=useState(`text`)
    return(<div>
        <br></br>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={(event)=>{TextUp(event.target.value);console.log(text)}}></input>    
      <br></br>
      </div>)
}
export default Text