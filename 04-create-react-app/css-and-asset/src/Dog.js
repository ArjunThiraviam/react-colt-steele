import React, {Component} from 'react';
import './Dog.css';
import pug from './pug.jpg'

class Dog extends Component {
    render() {
        return (
            <div>
                <h1 className="Dog">DOG</h1>
                <img src={pug} alt="Happy Pug dog"/>
            </div>
        )
    }
}

export default Dog;