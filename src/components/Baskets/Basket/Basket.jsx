import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import s from './Basket.module.scss'
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    },
}));

const Basket = (props) => {
    const classes = useStyles();

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
        <hr/>
        <div className={s.basketWrapper}>
            <div className={s.imageProduct}>
                <img src={props.image} alt="Картинка товара"/>
            </div>
            <div className={s.nameProduct}>
                <h3>{props.name}</h3>
                <div className={s.quantityProduct}>
                    <button variant="outlined" color="secondary" disabled={btnDisabled} onClick={removeQuantityProduct}><span>-</span></button>
                    <h3>{props.quantity}</h3>
                    <button variant="outlined" color="secondary" onClick={addQuantityProduct}><span>+</span></button>
                </div>
            </div>
            <div className={s.priceBtnProduct}>
                <h3>Цена: {props.price} руб.</h3>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={deleteProduct}
                >
                    Удалить
                </Button>
            </div>
        </div>
    </div>
}

export default Basket;
