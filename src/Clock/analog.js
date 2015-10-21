import React from 'react';
import _ from 'underscore';

class Hand extends React.Component {
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
        return (
            <line {...this.calcCoords()} {...this.calcStyle()} />
        );
    }


    calcStyle() {
        return {
            stroke: this.props.stroke,
            strokeWidth: this.props.strokeWidth
        }
    }

    calcCoords() {
        let radians = -Math.PI / 2 + (Math.PI * 2 / this.props.scale * this.props.clock.get(this.props.prop));

        return {
            x1: this.props.r,
            y1: this.props.r,
            x2: this.props.r + Math.cos(radians) * this.props.size,
            y2: this.props.r + Math.sin(radians) * this.props.size
        };
    }
}

_.extend(Hand.prototype, Backbone.Events);

export class Clock extends React.Component {
    render() {
        return (
            <svg width={this.props.r * 2} height={this.props.r * 2}>
                <circle fill="#ffffff" {...this.props} cx={this.props.r} cy={this.props.r} stroke="#0000ff" />
                <Hand clock={this.props.clock} prop="s" {...this.props} size={this.props.r * 0.8} scale={60} stroke="red" strokeWidth="2" />
                <Hand clock={this.props.clock} prop="m" {...this.props} size={this.props.r * 0.6} scale={60} stroke="green" strokeWidth="2" />
                <Hand clock={this.props.clock} prop="h" {...this.props} size={this.props.r * 0.4} scale={12} stroke="blue" strokeWidth="2" />
            </svg>
        );
    }
}

