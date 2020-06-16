import React from 'react';
import Product from "./Product/Product";
import s from './Magazine.module.scss';
import {Field, reduxForm} from "redux-form";
import Button from '@material-ui/core/Button';

const Magazine = (props) => {
    let searchProduct = (value) => {
        props.searchProductCategory(value.productCategory)
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
        addProductBasket={props.addProductBasket}
    />)

    return <div className={s.wrapperProducts}>
        <SearchProductToCategory onSubmit={searchProduct} />
        <div className={s.products}>
            {products}
        </div>
    </div>
}

const SearchProduct = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='productCategory' component='select' type='text' placeholder='Выберите категорию'>
                <option value="allProducts">Все товары</option>
                <option value="Развлечения">Развлечения</option>
                <option value="Телефоны">Телефоны</option>
                <option value="Планшеты">Планшеты</option>
                <option value="Микрофоны">Микрофоны</option>
                <option value="Наушники">Наушники</option>
            </Field>
            <Button variant="contained" color="primary">Найти</Button>
        </form>
    )
}

const SearchProductToCategory = reduxForm({
    form: 'searchProduct'
})(SearchProduct)

export default Magazine;
