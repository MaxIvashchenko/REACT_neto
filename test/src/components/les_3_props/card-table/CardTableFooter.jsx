import React from 'react'
import PropTypes from 'prop-types'

export default function CardTableFooter({ items, currency }) {
    const getTotalPrice = (items) => {
       return items.reduce((total, { price, quantity }) => total + price * quantity, 0)
    }
    return (
        <>
            <tfoot>
                <tr>
                    <td colSpan={3} >Total: {currency} {getTotalPrice(items)}</td>
                </tr>
            </tfoot>

        </>
    )
}

CardTableFooter.propTypes = { // автоматически подставляет данные по-умолчанию
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    currency: PropTypes.string,
}