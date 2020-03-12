import React, { useState } from 'react'

export default function Section(props) {

    const [hidden, setHidden] = useState(false);

    const toggleSection = () => { setHidden(prev => !prev); }

    return (
        <section>
            <h1>{props.title}</h1>
            <button onClick={toggleSection}>Переключить </button>
            <div className='content'>{props.children(!hidden)}</div>
        </section >
    );
}