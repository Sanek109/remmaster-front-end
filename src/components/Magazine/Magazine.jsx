import React, {useState} from 'react';
import Product from "./Product/Product";
import s from './Magazine.module.scss';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


const currencies = [
    {
        value: 'allProducts',
        label: 'Все товары',
    },
    {
        value: 'Развлечения',
        label: 'Развлечения',
    },
    {
        value: 'Телефоны',
        label: 'Телефоны',
    },
    {
        value: 'Микрофоны',
        label: 'Микрофоны',
    },
    {
        value: 'Наушники',
        label: 'Наушники',
    },
    {
        value: 'Планшеты',
        label: 'Планшеты',
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch'

        },
    },
}));

const Magazine = (props) => {
    const classes = useStyles();
    const [currency, setCurrency] = useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    let searchProduct = () => {
        props.searchProductCategory(currency)
    }

    let products = props.products.map((prod, key) => <Product
        name={prod.name}
        key={key}
        prod={prod}
        article={prod.article}
        description={prod.description}
        image={prod.image}
        price={prod.price}
        category={prod.category}
        isBasket={prod.isBasket}
        addProductBasket={props.addProductBasket}
    />)

    return <div className={s.wrapperProducts}>
        <div className={s.searchFormProduct}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Выбрать категорию"
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
            <Button variant="contained" color="secondary" onClick={searchProduct}>Найти</Button>

        </div>
        <div className={s.products}>
            {products}
        </div>
    </div>
}

export default Magazine;
