import React from 'react';
import PurchaseModel from '../../models/PurchaseModel'
import {PurchaseItemClassBased} from '../components/PurchaseItem';




export default class PurchaseListClassBased extends React.Component {
    static propTypes = {}
    state = {
        items: [new PurchaseModel(1, 'Pizza'), new PurchaseModel(2, 'Juice')]
    }
    onItemToggle = item => {
        this.setState(prevState => ({
            items: prevState.items.map(o => {
                if (o.id === item.id) { 
                    return { ...o, done: !o.done }; }
                return o;
            })
        }));
    }
    onItemRemove = item => {
        this.setState(prevState => ({ 
            items: prevState.items.filter(o => o.id !== item.id) 
        }));
    }
    render() {
        const { items } = this.state;
        return (
            <ul>
                {items.map(o => <PurchaseItemClassBased key={o.id} item={o}
                    onToggle={this.onItemToggle} onRemove={this.onItemRemove} />)}
            </ul>
        )
    }
}



