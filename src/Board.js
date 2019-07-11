import React from 'react';
import Snake from './snake';
import KeyboardEventHandler from 'react-keyboard-event-handler';
const boardSize = 720;
const cellSize = boardSize / 30;

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      snake: {
        head: {
          x: 15,
          y: 15
        },
        tail: {
          x: 15,
          y: 15
        },
        direction: '',
        body: [{x:15,y:15}],
        running: false,
        alive: true,
        speed: 2,
        food: {}
      }
    }
  }

    drawGrid() {
        const {ctx} = this.state;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        //'#bbdefb'; // strokeStyle is a field, no ()
        ctx.fillStyle = '#9575cd';
        ctx.fillRect(0, 0, boardSize, boardSize) // fillrect is a function, so has ()
        for (var vertical = cellSize; vertical < boardSize; vertical += cellSize){
          ctx.beginPath();
          ctx.moveTo(vertical, 0);
          ctx.lineTo(vertical, boardSize);
          ctx.stroke();
        }
      
        for (var horizontal = cellSize; horizontal < boardSize; horizontal += cellSize){
          ctx.beginPath();
          ctx.moveTo(0, horizontal);
          ctx.lineTo(boardSize ,horizontal);
          ctx.stroke();
        }
    }

    drawGrid2() {
      const {ctx} = this.state;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)'; // strokeStyle is a field, no ()
      ctx.fillStyle = '#9575cd';
      //ctx.fillRect(0, 0, boardSize, boardSize) // fillrect is a function, so has ()
      for (var vertical = cellSize; vertical < boardSize; vertical += cellSize){
        ctx.beginPath();
        ctx.moveTo(vertical, 0);
        ctx.lineTo(vertical, boardSize);
        ctx.stroke();
      }
    
      for (var horizontal = cellSize; horizontal < boardSize; horizontal += cellSize){
        ctx.beginPath();
        ctx.moveTo(0, horizontal);
        ctx.lineTo(boardSize ,horizontal);
        ctx.stroke();
      }
  }

    drawSnake(){
      const {ctx, snake} = this.state
      ctx.fillStyle = '#795548';
      snake.body.forEach(cord => { // for loop through the snake's body, fill rect
        ctx.fillRect(cord.x * cellSize, cord.y * cellSize, 1 * cellSize, 1 * cellSize);
      })
    }

    drawBoard(){
        const canvas = this.refs.gameBoard
        this.setState({
          canvas: canvas,
          ctx: canvas.getContext('2d')
        }, function () {
          this.drawGrid();
          this.drawSnake();
          this.drawFood();
        })
    }
    
    changeDirection (direction) {
      let newState = Object.assign({}, this.state);
      newState.snake.direction = direction;
      this.setState(newState);
      this.canvasMoveSnake();
    }

    canvasMoveSnake(){
      const {ctx, snake} = this.state
      ctx.fillStyle = '#9575cd';
      this.drawRect(snake.tail.x,snake.tail.y,1,1);
      ctx.fillStyle = 'yellow';
      this.drawRect(snake.head.x,snake.head.y,1,1);
      if (snake.head.x === snake.food.x && snake.head.y === snake.food.y) {
        this.addBody();
        this.drawFood();
      }
      if (snake.alive === false && snake.running === false){
        this.endGame();
      }
      this.drawGrid2();
    }

    drawRect(x, y, l, h) {
      const {ctx} = this.state;
      ctx.fillRect(x * cellSize, y * cellSize, l * cellSize, h * cellSize);
    }
    
    componentDidMount () {
        this.drawBoard();
    } //as soon as the object is created, draw the board

    drawFood () {
      const {ctx, snake} = this.state;
      ctx.fillStyle = 'red';
      var position = {
        x: Math.floor(Math.random() * 30),
        y: Math.floor(Math.random() * 30)
      }
      while (this.exists(position)) {
        position.x = Math.floor(Math.random() * 30);
        position.y = Math.floor(Math.random() * 30);
      }
      snake.food = position;
      this.setState({
        snake:snake
      })
      this.drawRect(position.x, position.y,1,1);
    }
    exists(point) {
      const {snake} = this.state;
    
      for (var cord in snake.body) {
        if (point.x === cord.x && point.y === cord.y) {
          return true
        }
      }
      return false
    }

    addBody() {
      const {snake} = this.state
      var newTail = {}
      switch(snake.direction){
        case 'up':
          newTail = {x: snake.tail.x, y: snake.tail.y - 1}
          break;
        case 'down':
          newTail = {x: snake.tail.x, y: snake.tail.y + 1}
          break;
        case 'left':
          newTail = {x: snake.tail.x - 1, y: snake.tail.y}
          break;
        case 'right':
          newTail = {x: snake.tail.x + 1, y: snake.tail.y}
          break;
        default:
          break;
      }
      snake.body.push(newTail)
      snake.tail = newTail
    }

    endGame() {
      const {ctx} = this.state
    
      let newState = Object.assign({}, this.state);
      newState.snake.running = false;
      newState.snake.alive = false;
      this.setState(newState);
    
      //Horizonal Lines
      ctx.fillStyle = 'white';
      this.drawRect(5,9,4,1);
      this.drawRect(5,13,4,1);
      this.drawRect(11,9,2,1);
      this.drawRect(11,12,2,1);
      this.drawRect(22,9,3,1);
      this.drawRect(22,11,3,1);
      this.drawRect(22,13,3,1);
      this.drawRect(6,16,2,1);
      this.drawRect(6,20,2,1);
      this.drawRect(16,16,4,1);
      this.drawRect(16,18,4,1);
      this.drawRect(16,20,4,1);
      this.drawRect(21,16,4,1);
      this.drawRect(21,18,4,1);
      this.drawRect(23,20,2,1);
    
      //Vertical Lines
      this.drawRect(5,10,1,3);
      this.drawRect(10,10,1,4);
      this.drawRect(13,10,1,4);
      this.drawRect(15,9,1,5);
      this.drawRect(19,9,1,5);
      this.drawRect(21,9,1,5);
      this.drawRect(5,17,1,3);
      this.drawRect(8,17,1,3);
      this.drawRect(10,16,1,3);
      this.drawRect(14,16,1,3);
      this.drawRect(16,16,1,5);
      this.drawRect(21,16,1,5);
      this.drawRect(24,16,1,3);
    
      //Dots
      this.drawRect(7,11,1,1);
      this.drawRect(8,12,1,1);
      this.drawRect(16,10,1,1);
      this.drawRect(17,11,1,1);
      this.drawRect(18,10,1,1);
      this.drawRect(11,19,1,1);
      this.drawRect(12,20,1,1);
      this.drawRect(13,19,1,1);
      this.drawRect(22,19,1,1);
    }

    resetBoard(){
      this.setState(({
          snake: {
            head: {
              x: 15,
              y: 15
            },
            tail: {
              x: 15,
              y: 15
            },
            direction: '',
            body: [{x:15,y:15}],
            running: false,
            alive: true,
            speed: 2,
            food: {}
          }
      }))
      this.drawBoard();
    }

    speedUp(){
      let newState = Object.assign({}, this.state);
      newState.snake.speed = this.state.snake.speed + 0.3;        
      this.setState(newState);
    }

    speedDown(){
      let newState = Object.assign({}, this.state);
      if (this.state.snake.speed >= 1.3) {
        newState.snake.speed = this.state.snake.speed - 0.3;
      } else {
        newState.snake.speed = this.state.snake.speed;
        alert("This is the lowest speed!")
      }
      this.setState(newState);
    }

    render() {
        return (
            <div id='gameContainer' className='container-fluid'>
                <canvas id='gameBoard' ref="gameBoard" width={boardSize} height={boardSize} />
                  <KeyboardEventHandler
                    handleKeys={['r', 'esc', '[', ']']}
                    onKeyEvent={(key, e) => {
                      if(key === 'r'){
                        this.resetBoard();
                      } else if (key === 'esc'){
                        this.endGame();
                      } else if (key === '['){
                        this.speedDown();
                      } else if (key === ']'){
                        this.speedUp();
                      }
                    }}/>
                    <Snake snake={this.state.snake}
                    changeDirection={this.changeDirection.bind(this)}
                    endGame={this.endGame.bind(this)}
                    //drawGrid2={this.drawGrid2.bind(this)}
                    drawFood={this.drawFood.bind(this)}
                  />
            </div>
        )
    }
}

export default Board;