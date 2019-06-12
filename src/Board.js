import React from 'react'

const boardSize = 720;
const cellSize = boardSize / 30;

class Board extends React.Component{
    drawGrid() {
        const {ctx} = this.state
      
        ctx.strokeStyle = 'grey'; // strokeStyle is a field, no ()
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
    
    drawBoard(){
        const canvas = this.refs.gameBoard
        this.setState({
          canvas: canvas,
          ctx: canvas.getContext('2d')
        }, function () {
          this.drawGrid();
        })
    }
    
    componentDidMount () {
        this.drawBoard();
    }

    render() {
        return (
            <div id='gameContainer' className='container-fluid'>
                <canvas id='gameBoard' ref="gameBoard" width={boardSize} height={boardSize} />
            </div>
        )
    }
}

export default Board