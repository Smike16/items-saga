import React from 'react';
import moment from 'moment';
import Icon from '../icon';
import 'moment/locale/ru';
import './item.css';

moment.locale('ru');

export default function Item({
    id,
    image,
    title,
    price,
    metro,
    createdAt,
    isFavourite,
    isFavouriteLoading,
    onUpdateFavourite
}) {
    return (
        <div className='item'>
            <div className='item-image'>
                <img
                    alt={title}
                    src={image} />
                <Icon
                    type={isFavourite ? 'star-fill' : 'star'}
                    disabled={isFavouriteLoading}
                    onClick={() => onUpdateFavourite(id)} />
            </div>
            <div className='item-title'>{title}</div>
            <div className='item-price'>{price.toLocaleString()} руб.</div>
            <div className='item-metro'>м. {metro}</div>
            <div className='item-date'>{moment(createdAt).format('D MMMM YYYY')}</div>
        </div>
    );
}
