import React, { Component } from 'react';

import '../App.css';

import PropTypes from 'prop-types'
import PurchaseModel from '../models/PurchaseModel'


export   class PurchaseItemClassBased extends React.Component {
    staticpropTypes = {
        item: PropTypes.instanceOf(PurchaseModel).isRequired,
        onToggle: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
    }
    onToggle = () => {
        this.props.onToggle(this.props.item);
    }
    onRemove = () => {
        this.props.onRemove(this.props.item);
    }
    render() {
        const { name, done } = this.props.item;
        return (
            <li>
                {name}<button onClick={this.onToggle}>{done ? 'Uncheck' : 'Check'}</button>
                <button onClick={this.onRemove}>Remove</button>
            </li>
        )
    }
}