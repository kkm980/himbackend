import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom";
import storeSearch from "../Images/storeSearch.svg"

function StoreLocator() {
    return (
        <div>
            <Navbar/>
            <div className="pageNav" style={{width:"100%", height:"25px",paddingLeft:"60px", paddingTop:"auto", backgroundColor:"#F7F8FA"}}><Link style={{textDecoration:"none"}} to ="/">Home</Link> / Store Locator</div>
              <div style={{width:"85%",height:"77px",fontSize:"46px", fontWeight:"500", margin:"0 auto", display:"flex"}}>Store Locator</div>
              <div style={{margin:"0 auto",width:"84%", display:"flex",boreder:"1px solid red", flexDirection:"row"}} >
              <input style={{width:"92%"}} placeholder="Type a zip code or address"/>
               <div style={{width:"30px", height:"30px",marginLeft:"8px", backgroundColor:"black"}}><img alt="" src={storeSearch}/></div></div>
            <Footer/>
        </div>
    )
}

export {StoreLocator}
