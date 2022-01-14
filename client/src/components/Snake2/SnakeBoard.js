import React, { useState, useEffect, useRef } from "react";
import Blank from "./blank.png"
import Snake from "./snake.png"
import Food from "./food.png"
import HeadDown from "./head_d.png"
import HeadUp from "./head_u.png"
import HeadLeft from "./head_l.png"
import HeadRight from "./head_r.png"


// array napolnjen z "blank"
const SnakeBoard= ()=>{


    const width=12;
    const height=12;    
    let initialRows = [];
    let head='headright';

    for(let i=0; i<12; i++){
        initialRows.push([]);
        for(let k=0; k<12; k++){
            initialRows[i].push('blank');
        }
    }
    const randomPosition = () => {
        const position = {
            x: Math.floor(Math.random()*width),
            y: Math.floor(Math.random()*height)};
        return position;    
    }

    const [rows, setRows] = useState(initialRows);    
    const [snake, setSnake] = useState([{x:0,y:0}, {x:1,y:0}]);
    const [direction, setDirection] = useState('right');
    const [food, setFood] = useState(randomPosition);

        //kaca (koordinate kace prikazemo s pomocjo x in y koordinat)
        const displaySnake = () => {            
            const newRows = initialRows;
            newRows[food.x][food.y]='food';           
            snake.forEach(cell => {        
            newRows[cell.x][cell.y]='snake';
            })  
            newRows[snake[0].x][snake[0].y]=head;                     
            setRows(newRows);
        }

    //spreminjanje smeri
    const changeDirectionWithKeys = (e) => {
        var { keyCode } = e;
          switch(keyCode) {
            case 37:    //tipka levo
                    setDirection('left');
                    break;
            case 38:    //tipka gor
                    setDirection('top');
                    break;                   
            case 39:    //tipka desno
                  setDirection('right');
                  break;
            case 40:    //tipka dol
                  setDirection('bottom');
                  break;
            default:
                break;            
              }
        }
            document.addEventListener("keydown", changeDirectionWithKeys, false);
        
        //premikanje kace
    const moveSnake = () => {
        const newSnake = [];
        switch(direction) {
            case 'right':
                newSnake.push({x: snake[0].x, y: (snake[0].y + 1)%width});
                head='headright';
                break;
            case 'left':
                newSnake.push({x: snake[0].x, y: (snake[0].y - 1 + width)%width});
                head='headleft';
                break;
            case 'top':
                newSnake.push({x: (snake[0].x - 1 + height)%height, y: snake[0].y});
                head='headup';
                break;
            case 'bottom':
                newSnake.push({x: (snake[0].x + 1)%height, y: snake[0].y});
                head='headdown';
                break;
            default:
                break;
        }
            snake.forEach(cell=> {
                newSnake.push(cell);
            })    
        if(snake[0].x === food.x && snake[0].y === food.y) {
            setFood(randomPosition);
        }else {
            newSnake.pop();
        }
        setSnake(newSnake);
        displaySnake();
    }

    useInterval(moveSnake, 150);

    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

      const displayRows = rows.map(row => 
        <li>
            {row.map(e => {
                switch(e) {
                    case 'blank':
                       return <img src={Blank}/>
                    case 'food':
                        return <img src={Food}/> 
                    case 'snake':
                       return <img src={Snake}/>                   
                    case 'headright':
                        return <img src={HeadRight}/>
                    case 'headleft':
                        return <img src={HeadLeft}/> 
                    case 'headup':
                        return <img src={HeadUp}/> 
                    case 'headdown':
                        return <img src={HeadDown}/>                   
                    default:
                        break;
                          }
                     })
            }
        </li>
        );

        return (
            <div >                   
                { displayRows }                                  
            </div>
        )
}

export default SnakeBoard;