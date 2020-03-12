import React from 'react'
import Modal from './Modal'
import UserInfo from './UserInfo'
import logo from './logo.svg'
import CardTable from './card-table/CardTable'
import Account from './account-folder/Account'



export default function MainProps() {

    const user = { name: "Max", img: logo }
    const cardItems = [
        { id: 124, name: 'iphone 8 plus', price: 500, quantity: 4 },
        { id: 714, name: 'MacBook Pro 15', price: 1050, quantity: 2 },
        { id: 287, name: 'Mi band 4', price: 70, quantity: 37 }
    ];
    return (
        <>
            <div className="bord">
                <Modal
                    text="some error"
                    dangers={false}
                    isOpen
                />
                <hr/>
                <UserInfo name={user.name} img={user.img} />
                <hr/>
                <CardTable items={cardItems} currency={"pound"} />
                <hr/>
                <Account />

            </div>
        </>
    )
}