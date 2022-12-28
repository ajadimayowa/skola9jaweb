import React from "react";

const PrimaryInput = (props : any) => {
    const {inputValue, passUserInput, name, handleChange} = props
return(
    <input value={props.inputValue} name={props.name} onChange={props.handleChange} placeholder={props.placeholder}
    style={{minWidth: 250, height:40, background:'#fff', outlineWidth:0, paddingLeft:20, borderRadius:5, border:0}}
   />
)
}
export default PrimaryInput;