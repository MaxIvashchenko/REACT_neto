import React from 'react';

import ShopCard from '../layouts/ShopCard';

export default function CardsView(props) {
    const items = props.items

    return (
        <>
            <div className='cards-view'>
                {items.map(o => <ShopCard item={o} key={o.img} />)}
            </div>
        </>
    )
}
