import React from "react";
import { Button } from "react-bootstrap";

const PrimaryButton = (props: any) => {
    return (
        <Button style={{outlineWidth:0, backgroundColor : '#E79C3D', border:0, width:256, borderRadius:50}}>{props.children}</Button>
        
    )

}

export default PrimaryButton;