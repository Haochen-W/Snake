import React from 'react';

class Panel extends React.Component{

    constructor(props){
        super(props);
      }

    render(){
        return (
            <div className="Panel">
                <div className="Panel-Title">
                    <p>SNAKE</p>
                </div>
                <div className="Panel-Box">
                    <p>Score: {this.props.snake.currentscore}</p>
                    <p>Life: {this.props.snake.lives}</p>
                    <p>Record: {this.props.snake.record}</p>
                </div>
                <div className="Panel-Box">
                    <p>Speed: {this.props.snake.speed}</p>
                    <button className = "Panel-button"
                    onClick={this.props.speedDown}>-</button>
                    <button className = "Panel-button"
                    onClick={this.props.speedUp}>+</button>
                </div>
                <div className="Panel-Instruction">
                    <p className="Panel-Centered"> Instruction & Shortcuts</p>
                    <p>- ARROW keys / WSAD: direction</p>
                    <p>- [ / ]: decrease / increase speed</p>
                    <p>- SPACE: pause</p>
                    <p>- R: restart the game</p>
                    <p>- ESC: terminate the game</p>
                    <p>- Note: Eat pink food to earn more lives</p>
                </div>
            </div>
        )
    }
}

export default Panel;