import React from 'react'
import { useState } from 'react'
import './button.css'
import BookModel from './BookModel'
import nanoid from 'nanoid'
import Filter from './Filter'


export default function ReadMe() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ name: '' });
    const [filter, setFilter] = useState('');

    const handleFilter = (value) => {
        setFilter(value)
    }

    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const book = new BookModel(nanoid(), form.name);
        console.log(book);
        setBooks(prevBooks => [...prevBooks, book]);
        setForm({ name: '' }); // чистит поле ввода 
    }

    const handleRemove = (id) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id)) // возвращает массив но уже без найденной книги
    }
    const handleDone = (id) => {
        setBooks(prevBooks => prevBooks.map(book => {
            if (book.id === id) {
                return new BookModel(book.id, book.name, !book.read)
            }
            return book;
        }));
    }


    return (
        <React.Fragment>
            <div >
                <label htmlFor="search">Search </label>
                <Filter onFilter={handleFilter} filter={filter}/>
                    {books
                    .filter(book => book.name.toLowerCase().includes(filter.trim().toLowerCase() ))
                    .map(book => <p key={book.id}>
                        {book.read && '∆'} {book.name}
                        <button onClick={() => handleDone(book.id)}>Done!</button>
                        <button onClick={() => handleRemove(book.id)}>Remove</button>
                    </p>)}
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name </label>
                    <input name="name" id="name" value={form.name} onChange={handleChange} />
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </React.Fragment>
    )

}
