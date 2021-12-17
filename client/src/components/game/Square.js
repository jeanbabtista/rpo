import React from 'react';
import {Btn} from './styles'

function Square(props){
    return (
        <div>
            <Btn onClick={()=>props.onClick()}> {props.value} </Btn>
        </div>                
    )
}

export default Square;