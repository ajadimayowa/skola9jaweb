import React from "react";
import { Button } from "react-bootstrap";

const PrimaryButton = (props: any) => {
    return (
        <Button style={{outlineWidth:0, backgroundColor : '#E79C3D', border:0, minWidth:200, borderRadius:50}}>{props.children}</Button>
        
    )

}

export default PrimaryButton;