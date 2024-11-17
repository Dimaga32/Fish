import React from "react";
import ClassSqure from "./Classsqure";
function Squre_from_massive({massive}){
     return(
        massive.map((el)=><ClassSqure size={el.size} key={el.key}/>)
    )
    }
export default Squre_from_massive 