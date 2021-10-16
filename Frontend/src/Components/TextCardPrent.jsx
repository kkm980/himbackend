import React from 'react'
import { TextCards } from './TextCards'
const textArr=[{text:'"We have tried fluoride-free toothpaste and this is our favourite!"',tag:"Boutique CompleteCare Toothpaste-peppermint"},
{text:'"I am amazed. I am less irritable and tired. And amazed"',
 tag:"Ashwagandha"
},
{text:'"Recommended to me by my local health nutritionalist. This product is a goodsend"',
tag:"Liver Care"}
]
function TextCardPrent() {
    return (
        <>
        <div style={{width:"100%",marginTop:"55px", display:"flex", justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",width:"85%", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        {textArr.map((el)=>{
            return <TextCards text={el.text} tag={el.tag}/>
        })}
        </div>
        </div>
        </>
    )
}

export {TextCardPrent}
