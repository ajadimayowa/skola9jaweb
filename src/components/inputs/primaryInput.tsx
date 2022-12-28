import React from "react";

const PrimaryInput = (props : any) => {
    const handleUserInput = (e: any)=> {
        console.log(e.target.value)

    }
return(
    <input onChange={handleUserInput} placeholder={props.placeholder} style={{minWidth: 250, height:40, background:'#fff', outlineWidth:0, paddingLeft:20, borderRadius:5, border:0}}/>
)
}
export default PrimaryInput;