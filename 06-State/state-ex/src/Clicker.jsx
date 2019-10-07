import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            is7: false
        }
        this.generateNumber = this.generateNumber.bind(this);
    }
    
    generateNumber() {
        let rand = Math.floor(Math.random()* 10) + 1;
        this.setState({number:  rand });
        if(rand == 7) {
            this.setState({is7: true });
        }
    }

    render() {
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                {this.state.is7 ? "You Win" : <button onClick={this.generateNumber} >Random Number</button>}
            </div>
        );
    }


}

export default Clicker;