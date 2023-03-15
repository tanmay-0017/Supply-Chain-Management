import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    const { src, text, label, path } = props;
    return (
        <li className='cards__item'>
            <Link className='cards__item__link' to={path}>

                <figure className='cards__item__pic-wrap' data-category={label}>
                    <img src={src} className='cards__item__img' alt='dubai' />

                </figure>

                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>

        </li>
    )
}

export default CardItem