import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button 
                onClick={function() {
                    alert('Button was clicked');   
                }}
            >
                Click Me 
            </button> 
        );
    }
} 

export default Button;