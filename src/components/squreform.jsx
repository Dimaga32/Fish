import React,{useRef} from "react";
import Squre_from_massive from "./UI/classSqure/massive.squres";
import Input1 from "./UI/input1/input1";
function SqureForm(props){
    const nsqure=useRef()
    return(
        <div style={{display:"flex", flexDirection:"column", gap:20, alignItems:"center"}}>
            <Input1 type={"number"} ref={nsqure} placeholder={`длина квадрата`}/>
            <button onClick={()=>{props.callback({size:nsqure.current.value,key:(props.squres.length+1)})}} style={{height:50, width:50+"%", fontSize:25,userSelect:"none", cursor:"pointer"}}>добавить квадрат</button>
            <div style={{display:"flex", gap:20}}><Squre_from_massive massive={props.squres}/></div>
        </div>
    )
}
export default SqureForm