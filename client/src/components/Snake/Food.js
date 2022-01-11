import React from "react";
import { SnakeFood} from "./styles";

export default(props)=>{

    const style={
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return(
        <SnakeFood style={style}></SnakeFood>
    )
}