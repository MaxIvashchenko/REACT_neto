import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, changeServiceField, editState } from '../actions/actionCreators';

export default function ServiceList() {

    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    
    const handleRemove = id => { 
        dispatch(removeService(id));
    }
    const handleEdit = id => {
        const index = items.findIndex(item => item.id = id);
        dispatch(changeServiceField('name', items[index].name))
        dispatch(changeServiceField('price', items[index].price))
        dispatch(changeServiceField('id', items[index].id))
        dispatch(editState(false))
    }
    
    return (
        <ul>{
            items.map(o =>
                <li key={o.id} >
                    {o.name} |||  цена: {o.price} --delete---> 
                    <button onClick={() => handleEdit(o.id)}>✎</button>
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                </li >)}
        </ul >
    )
}