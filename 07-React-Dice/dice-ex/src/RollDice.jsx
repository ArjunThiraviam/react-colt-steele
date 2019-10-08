import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one','two','three','four','five','six']
    }
    constructor(props){
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        var die1Num = this.props.sides[
            Math.floor(Math.random()* 6) 
        ];
        var die2Num = this.props.sides[
            Math.floor(Math.random()* 6) 
        ];
        this.setState({ die1: die1Num , die2: die2Num, rolling: true });

        setTimeout( () => {
            this.setState({rolling: false}) 
        }, 1000);
    }

    render() {
        return(
            <div className="RollDice"> 
                <div  className="RollDice-cotainer">
                    <Dice face={this.state.die1} rolling={this.state.rolling}/>
                    <Dice face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.rollDice} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Click Me!' }
                </button>
            </div>
        )
    }
}

export default RollDice;