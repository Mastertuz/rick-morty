import { useEffect, useState } from "react";

const GoTopBtn = () => {
    const scrollUp = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                setGoTopBtn(true)
            } else{
                setGoTopBtn(false)
            }
        })
    })
    const [goTopBtn,setGoTopBtn]= useState(false)
    return ( 
        <div>
        {goTopBtn && (
            <button onClick={()=>scrollUp()} className="go-top">
                ^
            </button>
        )}
        </div>
     );
}
 
export default GoTopBtn;