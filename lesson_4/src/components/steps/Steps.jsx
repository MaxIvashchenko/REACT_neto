import React, { useState } from 'react'
import ItemModel from './model/ItemModel'
import nanoid from 'nanoid'
import OneStep from './OneStep';
import StepHolder from './StepHolder';

export default function Converter() {
    const regDate = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/;
    const regPass = /^\d+(?:\.\d{1,2})?$/;
    const emptyForm = { date: '', passed: '' };
    const [state, setState] = useState(emptyForm);

    const [listItems, setListItems] = useState([
        { id: 1, date: "18.02.2020", passed: 12.23 },
        { id: 2, date: "19.02.2020", passed: 31.23 },
        { id: 3, date: "17.02.2020", passed: 8.23 }
    ])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const validDate = regDate.test(state.date);
        const validPass = regPass.test(state.passed);

        if (validDate && validPass) {
            setListItems(prevItems => {
                for (let item of prevItems) {
                    if (item.date === state.date) {
                        item.passed = Number(item.passed) + Number(state.passed);
                        item.passed = Math.floor(item.passed * 100) / 100;
                        console.log(item.passed)
                        return prevItems;
                    }
                }
                const item = new ItemModel(nanoid(), state.date, state.passed);
                return [...prevItems, item];

            });
            setState(emptyForm);
        } else {
            console.log('invalid format')
        }
    }

    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const handleRemove = (id) => {
        setListItems(prevItem => prevItem.filter(item => item.id !== id)) // возвращает массив но уже без найденной книги
    }

    return (
        <React.Fragment>
            <StepHolder state={state} handleChange={handleChange} handleSubmit={handleSubmit} />

            <table border="1">
                <caption>Учёт тренировок</caption>
                <tr>
                    <th>Дата</th>
                    <th>Пройдено, км</th>
                    <th>Действия</th>
                </tr>
                <OneStep listItems={listItems} handleRemove={handleRemove} />
            </table>

        </React.Fragment>
    )
}