import {changeIsBasketProductThunk, clearIsBasketCopyProduct} from "./productsReducer";

const ADD_PRODUCT_IN_BASKET = 'ADD_PRODUCT_IN_BASKET';
const DELETE_PRODUCT_TO_BASKET = 'DELETE_PRODUCT_TO_BASKET';
const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';
const ADD_QUANTITY_PRODUCT_TO_BASKET = 'ADD_QUANTITY_PRODUCT_TO_BASKET';
const REMOVE_QUANTITY_PRODUCT_TO_BASKET = 'REMOVE_QUANTITY_PRODUCT_TO_BASKET';
const DELETE_PRICE_PRODUCT_TO_BASKET = 'DELETE_PRICE_PRODUCT_TO_BASKET';

let initialState = {
    basket: [],
    priceAll: 0
}

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_IN_BASKET: {
            let newProduct = {
                _id: action.product._id,
                name: action.product.name,
                quantity: 1,
                image: action.product.image,
                price: action.product.price
            }
            return {
                ...state,
                basket: [...state.basket, newProduct],
                priceAll: state.priceAll + action.product.price
            }
        }
        case
        DELETE_PRODUCT_TO_BASKET: {
            return {
                ...state,
                basket: state.basket.filter(prod => {
                    if (prod._id !== action.id) {
                        return prod
                    }
                }),
            }
        }
        case DELETE_PRICE_PRODUCT_TO_BASKET: {
            return {
                ...state,
                priceAll: state.priceAll - action.amountPrice
            }
        }
        case
        ADD_QUANTITY_PRODUCT_TO_BASKET: {
            return {
                ...state,
                priceAll: state.priceAll + action.price,
                basket: state.basket.filter(prod => {
                    if (prod._id === action.id) {
                        prod.quantity++
                    }
                    return state
                })
            }
        }
        case
        REMOVE_QUANTITY_PRODUCT_TO_BASKET: {
            return {
                ...state,
                priceAll: state.priceAll - action.price,
                basket: state.basket.filter(prod => {
                    if (prod._id === action.id) {
                        prod.quantity--
                    }
                    return state
                })
            }
        }
        case
        DELETE_ALL_PRODUCTS: {
            return {
                ...state,
                basket: [],
                priceAll: 0
            }
        }
        default:
            return state;
    }
}

export const addProductToBasket = (product) => {
    return {
        type: ADD_PRODUCT_IN_BASKET,
        product
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT_TO_BASKET,
        id
    }
}

export const deleteAllBasket = () => {
    return {
        type: DELETE_ALL_PRODUCTS
    }
}

export const addQuantityProductToBasket = (id, price) => {
    return {
        type: ADD_QUANTITY_PRODUCT_TO_BASKET,
        id, price
    }
}

export const removeQuantityProductToBasket = (id, price) => {
    return {
        type: REMOVE_QUANTITY_PRODUCT_TO_BASKET,
        id, price
    }
}

export const deleteProductPrice = (amountPrice) => {
    return {
        type: DELETE_PRICE_PRODUCT_TO_BASKET,
        amountPrice
    }
}

export const addToProductBasketThunk = (prod) => {
    return async (dispatch) => {
        dispatch(changeIsBasketProductThunk(prod._id))
        dispatch(addProductToBasket(prod))
    }
}

export const deleteProductInBasket = (id, amountPrice) => {
    return async (dispatch) => {
        dispatch(changeIsBasketProductThunk(id))
        dispatch(deleteProduct(id))
        dispatch(deleteProductPrice(amountPrice))
    }
}

export const deleteAllProductsBasket = () => {
    return (dispatch) => {
        dispatch(deleteAllBasket())
        dispatch(clearIsBasketCopyProduct())
    }
}

export default basketReducer;
