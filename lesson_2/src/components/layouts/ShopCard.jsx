import React from 'react'

export default function ShopCard(props) {

    const { name, price, color, img } = props.item;


    return (
        <>
            <div className='shop-card'>
                <img src={img} alt={name} />
                <p className='shop-item-name'>{name}</p>
                <p className='shop-item-price'>{price}</p>
                 <p className='shop-item-color'>{color}</p>
            </div>
        </>
    )
}

// {projects.map((p, i) => <img src={p.img} alt='img' key={i} />)}
