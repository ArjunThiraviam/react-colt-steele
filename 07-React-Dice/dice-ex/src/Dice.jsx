import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import './Dice.css';

class Dice extends Component {
    render() {
        return (             
                <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 'shaking' }`}></i>
        )
    }
}

export default Dice;