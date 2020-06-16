import React, {useState} from 'react';
import s from './Product.module.scss'

let Product = (props) => {
    let [isBasket, setIsBasket] = useState(false);

    let addProductInBasket = () => {
        props.addProductBasket(props.prod)
        setIsBasket(true)
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
                <h4>{props.price} р.</h4>
                {!isBasket ?
                    <button onClick={addProductInBasket}>В корзину</button> :
                    <div>В корзине</div>
                }
            </div>
        </div>
        <hr/>
        </div>);
}

export default Product;
