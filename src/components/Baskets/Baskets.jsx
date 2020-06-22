import React from 'react';
import Basket from "./Basket/Basket";
import s from './Baskets.module.scss';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

const Baskets = (props) => {
    const classes = useStyles();

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
    return (<div className={s.wrapperBaskets}>
        {!props.basket.length ? <h2>Ваша корзина пуста</h2> :
        <div className={s.headerBasket}>
            <div className={s.priceBtn}>
                <h3>Цена за всё: {props.priceAll} руб.</h3>
                <Button variant="contained" color="secondary" className={classes.button}>заказать</Button>
            </div>
            <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />} onClick={deleteProductsToBasket}>Очистить корзину</Button>
        </div>}
        <div>{basket}</div>
    </div>)
}

export default Baskets;
