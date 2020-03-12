import React, { useState } from 'react'
import './button.css'


export default function Feedback(props) {

    const [form, setForm] = useState({
        name: '',
        score: 'good',
        agreement: false
    })

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(evt.type)
        console.dir(evt.target)
    }
const handleChange = (evt) => {
    const fieldName = evt.target.name;
    const value = evt.target.type ==='checkbox' ? evt.target.checked : evt.target.value;
    setForm(prevFrom => ({...prevFrom, [fieldName]: value}));
}
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Ваше имя</label>
                <input id="name" name="name" value={form.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="score">Выберите уровень удовлетворённости</label>
                <select id="score" name="score" value={form.score} onChange={handleChange} >
                    <option value="good" > Хорошо</option >
                    <option value="bad" > Плохо</option >
                </select >
            </div >
            <div>
                <label htmlFor="agreement">
                    <input id="agreement" name="agreement" type="checkbox" onChange={handleChange} checked={form.agreement} />
                        Согласен на передачу перс.данных
                    
                </label >
            </div >
            <button type="submit" onSubmit={handleSubmit}> Отправить</button >
        </form >

    )
} 
