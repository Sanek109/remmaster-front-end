import React from 'react';
import s from './Product.module.scss';
import Button from '@material-ui/core/Button';


let Product = (props) => {

    let addProductInBasket = () => {
        props.addProductBasket(props.prod)
    }

    return (<div >
        <div className={s.wrapperProduct}>
            <div className={s.imageDescriptionProduct}>
                <div className={s.imgProduct}>
                    <img src={props.image} alt="Фото товара"/>
                </div>
                <div className={s.descriptionProduct}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className={s.priceProduct}>
                <h4>{props.price} руб.</h4>
                {!props.isBasket ?
                    <Button variant="contained" color="secondary" onClick={addProductInBasket}>В корзину</Button> :
                    <div className={s.addToBasket}>В КОРЗИНЕ</div>
                }
            </div>
        </div>
        <hr/>
        </div>);
}

export default Product;
