import React from 'react';

/* Отображает дату и время */
export default function DateNow(props) {
  const date = new Date();

  return (
    <div>
      {date.toLocaleString("ru")}
    </div>
  )
}

