import React from 'react';
import './index.css'
import DateTime from './DateTime'
import DateTimePretty from './DateTimePretty'

export default function Video(props) {

    const DateTimeNew = DateTimePretty(props.date)(DateTime)

    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimeNew />
        </div>
    )
}