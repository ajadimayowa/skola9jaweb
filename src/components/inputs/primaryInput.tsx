import React from "react";

const PrimaryInput = (props : any) => {
    const handleUserInput = (e: any)=> {
        console.log(e.target.value)

    }
return(
    <input onChange={handleUserInput} placeholder={props.placeholder} style={{width: 350, height:45, background:'#fff', outlineWidth:0, paddingLeft:20, borderRadius:5, border:0}}/>
)
}
export default PrimaryInput;