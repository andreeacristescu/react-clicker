import React, { Component } from 'react';

class Clicker extends Component {

    constructor(state) {
        super();
        this.state = {
            count: state.count
        };

        this.incCount = this.incCount.bind(this);
        this.decCount = this.decCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decCount() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    resetCount() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div className="container">
                <div className="clicker border border-secondary rounded">
                    <div className="clicker-display d-flex align-items-center bg-light text-secondary">
                        <div className="mx-auto display-1">{this.state.count}</div>
                    </div>
                    <div className="clicker-button-panel d-flex flex-row">
                        <button className="btn btn-success" onClick={this.incCount}>
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                        <button className="btn btn-warning" onClick={this.resetCount}>
                            <i className="fa fa-refresh fa-2x"></i>
                        </button>
                        <button className="btn btn-danger" onClick={this.decCount}>
                            <i className="fa fa-minus fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Clicker.defaultProps = {
    count: 0
};

export default Clicker;