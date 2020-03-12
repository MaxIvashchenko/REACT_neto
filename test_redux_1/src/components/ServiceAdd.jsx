import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, editService, editState } from '../actions/actionCreators';

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const editState = useSelector(state => state.editState)
    const dispatch = useDispatch();

    const handleChange = event => {
        const { name, value } = event.target;
        dispatch(changeServiceField(name, value))
    }
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addService(item.name, item.price));
    }

    const handleCancel = event => {
        event.preventDefault();
        dispatch(changeServiceField('name', ''))
        dispatch(changeServiceField('price', ''))
        dispatch(editState(false));
    }

    const handleEditing = event => {
        event.preventDefault();
        dispatch(editService(item.id, item.name, item.price));
        dispatch(editState(false));
        dispatch(changeServiceField('name', ''))
        dispatch(changeServiceField('price', ''))
    }

    return (
        <form onSubmit={editState ? handleEditing : handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price} />
            <button type='submit'>Save</button>
           {editState ? <button type='button' onClick={handleCancel}>Cancel</button> : null}
        </form>
    )
}
export default ServiceAdd;