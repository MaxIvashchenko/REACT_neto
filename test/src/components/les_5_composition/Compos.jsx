import React from 'react'
import Section from './Section'

export default function Compos() {

    return (
        <Section title='Истории из детства' >
            { (isHidden)=> isHidden ? null : <p>Большой блок текста</p>}
        </Section >);
}