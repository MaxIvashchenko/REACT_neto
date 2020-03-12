
import React from 'react'
// import PropTypes from 'prop-types'


export default function StepHolder({state, handleSubmit, handleChange}) {

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="date">Дата (ДД.ММ.ГГ)
                <input name="date" type='text' id="date" max="100" value={state.date} onChange={handleChange} placeholder="00.00.0000" required />
                </label>

                <label htmlFor="passed">Пройдено, км
                <input name="passed" type='text' id="passed" value={state.pass} onChange={handleChange} placeholder="00.00" required />
                </label>

                <button type="submit">OK</button>
            </form>
        </>
    )
}

StepHolder.protoTypes = {
    // children: PropTypes.func.isRequired,
}