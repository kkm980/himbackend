import React from 'react'

export function TextCards({text, tag}) {
    return (
        <>
            <div style={{height:"180px", width:"30%",border:"0.1px solid gray", padding:"25px 0px 0px 25px"}}>
               <div style={{height:"103px",width:"307.333px"}}>
                 
                  <div style={{height:"4px",width:"30px", backgroundColor:"#48CAB2"}}></div>
                  <div style={{fontSize:"15px",marginTop:"10px", lineHeight:"22px", height:"58px", width:"90%"}}>{text}</div>
                  <div style={{marginTop:"18px",fontSize:"12px",color:"#ABABAB", width:"90%"}}>{tag}</div>
               </div>
            </div>
        </>
    )
}

