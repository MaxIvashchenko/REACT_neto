import React from 'react'
import PropTypes from 'prop-types'
import './modal.css'
import avatar from './avatar.jpg'

export default function UserInfo({ name, img }) {

    return (
        <>
            <img src={img} alt="" className="user_info-avatar" />
            <p>{name}</p>

        </>
    )
}

UserInfo.defaultProps = { // автоматически подставляет данные по-умолчанию
    name: 'user name',
    img: avatar,
}

UserInfo.prototype = {
    img: PropTypes.string,
    name: PropTypes.string,
}
