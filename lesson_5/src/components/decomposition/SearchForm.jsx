import React from 'react';

/* Форма поиска */
export default function SearchForm(props) {
  return (
    <form>
       <input name="search" type="text"></input>
       <button type="submit">Найти</button>
    </form>
  )
}

