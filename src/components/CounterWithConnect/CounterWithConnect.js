import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterWithConnectSlice';

import './counter-with-connect.css';

class CounterWithConnect extends PureComponent {
    state = {
        incrementAmount: 2,
    }

    setIncrementAmount = (value) => {
        this.setState({incrementAmount: value});
    }

    render() {
        const {incrementAmount} = this.state;
        const {
            value,
            decrement,
            increment,
            incrementByAmount,
            incrementAsync,
        } = this.props;

        return (
            <div className="counter-with-connect">
                <div>
                    <h1>Counter with connect</h1>
                    <h2>{value}</h2>
    
                    <button
                        onClick={decrement}
                    >
                        DEC
                    </button>
    
                    <button
                        onClick={increment}
                    >
                        INC
                    </button>
                </div>
    
                <div>
                    <button
                        onClick={() => incrementAsync(Number(incrementAmount) || 0)}
                    >
                        Add Async
                    </button>
                    
                    <button
                        onClick={() => incrementByAmount(Number(incrementAmount) || 0)}
                    >
                        Add Amount
                    </button>
    
                    <input
                        value={incrementAmount}
                        onChange={e => this.setIncrementAmount(e.target.value)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value: selectCount(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithConnect);