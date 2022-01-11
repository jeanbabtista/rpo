import React from "react";
import { SnakeDot} from "./styles";

export default (props) => {
    return(
    <div>
        {props.snakeDots.map((dot, i)=>{
            const style={
                left: `${dot[0]}%`,
                top: `${dot[1]}%`
            }

            return(
                <SnakeDot key={i} style={style}></SnakeDot>
            )
        })}
    </div>
    )    
}