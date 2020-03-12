import React from 'react'
import PropTypes from 'prop-types'

export default function CardTableBody({items}) {

    return (
        <>
       <tbody>
           {items.map(item => (
               <tr key={item.id}>
                   <td>{item.name}</td>
                   <td>{item.price}</td>
                   <td>{item.quantity}</td>
               </tr>
           ))}
       </tbody>
           
        </>
    )
}

CardTableBody.propTypes = { // автоматически подставляет данные по-умолчанию
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
}