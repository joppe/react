import React from 'react';
import _ from 'underscore';

export class ValueComponent extends React.Component {
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
}


_.extend(ValueComponent.prototype, Backbone.Events);