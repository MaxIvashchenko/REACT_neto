import React from 'react'
import PropTypes from 'prop-types'
import CardTableHeader from './CardTableHeader'
import CardTableFooter from './CardTableFooter'
import CardTableBody from './CardTableBody'


export default function CardTable({headings, items, currency}) {

    return (
        <>
        <table>
        <CardTableHeader headings={headings}/>
        <CardTableFooter currency={currency} items={items}/>
        <CardTableBody items={items}/>
        </table> 
        </>
    );
}

CardTable.defaultProps = { // автоматически подставляет данные по-умолчанию
    headings: ['Name', 'Price', 'Quantity'],
    currency: '$'
}

CardTable.prototype = {
    headings: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    currency: PropTypes.string,
};
