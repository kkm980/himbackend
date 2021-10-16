import plant from "../Images/plant.png"


const Textplant=()=>{
    return(
        <>
        <div style={{height:"300px", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div style={{height:"290px", width:"85%", backgroundColor:"#EBEAE7",padding:"18px 18px 18px 18px", display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
          <div>
            <img style={{width:"150px", height:"237.396px"}} src={plant} alt="pic"/>
          </div>
          <div style={{marginLeft:"35px", height:"237.391px"}}>
            <div style={{fontSize:"25px",fontWeight:"500",letterSpacing:"0.87px",color:"#333333" ,}}>Unlock The Wisdom of Herbs</div>
            <div style={{fontSize:"21px",fontWeight:"300",letterSpacing:"0.87px",color:"#333333"}}>with Herbal Supplements, Toothpaste and more!</div>
            <div style={{marginTop:"10px"}}>Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.</div>
          </div>
          </div>
        </div>
        </>
    )
}
export {Textplant}