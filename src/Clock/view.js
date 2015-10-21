import React from 'react';
import _ from 'underscore';

class Digit extends React.Component {
    componentDidMount() {
        this.listenTo(
            this.props.clock,
            'change:' + this.props.prop,
            (m) => this.setState({value: m.get(this.props.prop)})
        );
    }

    componentWillUnmount() {
        this.stopListening();
    }

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

_.extend(Digit.prototype, Backbone.Events);