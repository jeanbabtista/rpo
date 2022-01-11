import React, {Component} from "react";
import Snake from "./Snake";
import Food from "./Food";


import {GameArea} from "./styles";

const getRandomCoordinates=()=>{
  let min=1;
  let max=98;
  let x=Math.floor((Math.random()*(max-min+1)+min)/4)*4;
  let y=Math.floor((Math.random()*(max-min+1)+min)/4)*4;
  return [x,y];
}

//LASTNOSTI KACE
const initialState = {
  speed: 130,
  food: getRandomCoordinates(),
  direction: 'DESNO',
  snakeDots: [
    [0,0],
    [4,0]
  ]
}
class App extends Component {  

  //LASTNOSTNI KACE
  state = initialState;

  //HITROST, TIPKA
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.pritisk;
  }

  //PREVERJANJE
  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  //ZAZNAVANJE TIPKE
  pritisk = (e) => {
    
      e = e || window.event;
      switch (e.keyCode) {
        case 38:
          if (!["GOR", "DOL"].includes(this.state.direction)) {
            this.setState({ direction: "GOR" });
          }
          break;
        case 40:
          if (!["GOR", "DOL"].includes(this.state.direction)) {
            this.setState({ direction: "DOL" });
          }
          break;
        case 37:
          if (!["LEVO", "DESNO"].includes(this.state.direction)) {
            this.setState({ direction: "LEVO" });
          }
          break;
        case 39:
          if (!["LEVO", "DESNO"].includes(this.state.direction)) {
            this.setState({ direction: "DESNO" });
          }
          break;     
    }
  }

  //PREMIKANJE
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'DESNO':
        head = [head[0] + 4, head[1]];
        break;
      case 'LEVO':
        head = [head[0] - 4, head[1]];
        break;
      case 'DOL':
        head = [head[0], head[1] + 4];
        break;
      case 'GOR':
        head = [head[0], head[1] - 4];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  // PREVERI CE JE KACA V BORDER
  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  //PREVERI CE SE KACA NI ZALETELA V SEBE
  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }

  //PREVERI CE KACA JE
  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
    }
  }

  //CE KACA JE - POVECAJ
  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  //KONEC IGRE
  onGameOver() {
    alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
    this.setState(initialState)
  }
  
  render(){
    return (
   
      <GameArea>
        <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
      </GameArea>
     
    );
  }
  
}

export default App;
