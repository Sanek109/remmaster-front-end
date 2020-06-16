import React, {useState} from 'react';
import Basket from "./Basket/Basket";

const Baskets = (props) => {
    let deleteProductsToBasket = () => {
        props.deleteToBasket()
    }

    let basket = props.basket.map((prod, key) => <Basket
        prod={prod}
        key={key}
        name={prod.name}
        price={prod.price}
        image={prod.image}
        quantity={prod.quantity}
        deleteProductToBasket={props.deleteProductToBasket}
        addQuantityToProduct={props.addQuantityToProduct}
        removeQuantityToProduct={props.removeQuantityToProduct}
    />)
    return (<div>
        {!props.basket.length ? <h3>Ваша корзина пуста</h3> :
        <div>
            <span>Цена за всё: {props.priceAll} руб.</span>
            <button onClick={deleteProductsToBasket}>Очистить корзину</button>
            <button>Сделать заказ</button>
        </div>}
        <div>{basket}</div>
    </div>)
}

export default Baskets;
