import React from 'react'
import PropTypes from 'prop-types'
import { items } from './data'
import './main.css'

export default function Listing() {

    const list = items.filter(item => item.state === 'active')
        .map(item => {

            let price = `${item.price} ${item.currency_code}`
            if (item.currency_code === 'USD') { 
                price = `$${item.price}`
            } else if (item.currency_code === 'EUR') {
                price = `€${item.price}`
            }

            let levelClass = 'item-quantity level-medium';
            if (item.quantity < 10) {
                levelClass = 'item-quantity level-low';
            } else if (item.quantity > 20) {
                levelClass = 'item-quantity level-high';
            }

            return (


                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt={item.listing_id}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title}</p>
                        <p className="item-price">{price}</p>
                        <p className={levelClass}>{item.quantity}</p>
                    </div>
                </div>

            )
        })

    return (
        <div className="item-list">
            {list}
        </div>
    )
}

Listing.defaultProps = {
items: []
}

Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}