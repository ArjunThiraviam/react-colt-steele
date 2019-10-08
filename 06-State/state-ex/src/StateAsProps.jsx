import React, {Component} from 'react';

class CounterParent extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 5};
    }
    render() {
        return(
            <div>
                <CounterChild count={this.state.count} />
            </div>
        )
    }
}

