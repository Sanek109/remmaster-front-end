import React, {useState} from 'react';
import s from './Basket.module.scss'

const Basket = (props) => {

    const [btnDisabled, setBtnDisabled] = useState(true)
    const [amountMoney, setAmountMoney] = useState(0);

    const addQuantityProduct = () => {
        props.addQuantityToProduct(props.prod._id, props.prod.price);
        setAmountMoney(amountMoney + props.prod.price)
        if (props.quantity >= 1) {
            setBtnDisabled(false)
        }
    }

    const removeQuantityProduct = () => {
        props.removeQuantityToProduct(props.prod._id, props.prod.price);
        setAmountMoney(amountMoney - props.prod.price)
        if (props.quantity === 2) {
            setBtnDisabled(true);
        }
    }

    const deleteProduct = () => {
        props.deleteProductToBasket(props.prod._id, amountMoney + props.prod.price)
    }

    return <div>
        <div className={s.basketWrapper}>
            <div className={s.imageProduct}>
                <img src={props.image} alt="Картинка товара"/>
            </div>
            <div className={s.nameProduct}>
                <h3>{props.name}</h3>
                <div className={s.quantityProduct}>
                    <button disabled={btnDisabled} onClick={removeQuantityProduct}>-</button>
                    <span>{props.quantity}</span>
                    <button onClick={addQuantityProduct}>+</button>
                </div>
            </div>
            <div className={s.priceBtnProduct}>
                <h4>{props.price} руб.</h4>
                <button onClick={deleteProduct}>Удалить из корзины</button>
            </div>
        </div>
        <hr/>
    </div>
}

export default Basket;
