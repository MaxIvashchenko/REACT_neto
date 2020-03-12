import React from 'react';

import ShopItem from '../layouts/ShopItem';

export default function ListView(props) {
    const items = props.items

    return (
        <>
            <div className='list-view'>
                {items.map(o => <ShopItem item={o} key={o.img} />)}
            </div>
        </>
    )
}
