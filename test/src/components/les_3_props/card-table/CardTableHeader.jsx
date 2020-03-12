import React from 'react'
import PropTypes from 'prop-types'

export default function CardTableHeader({ headings }) {

    return (
        <>
            <thead>
                <tr>
                    {headings.map((title, i) => <td key={i}>{title}</td>)}
                </tr>
            </thead>

        </>
    )
}

CardTableHeader.propTypes = { // автоматически подставляет данные по-умолчанию
    headings: PropTypes.arrayOf(PropTypes.string).isRequired,
}