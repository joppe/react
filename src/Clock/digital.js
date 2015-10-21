import React from 'react';
import {ValueComponent} from './value-component.js';

class Digit extends ValueComponent {
    render() {
        if (!this.state) {
            return <span />;
        }
        return (
            <span className="clock__digit">{(this.state.value < 10 ? '0' : '') + this.state.value}</span>
        )
    }
}

export class Clock extends React.Component {
    render() {
        return (
            <div className="clock">
                <Digit clock={this.props.clock} prop="h" />:
                <Digit clock={this.props.clock} prop="m" />:
                <Digit clock={this.props.clock} prop="s" />
            </div>
        );
    }
}
