import {productsApi} from "../api/api";
import {getRepairs} from "./repairsReducer";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SEARCH_CATEGORY_PRODUCTS = 'SEARCH_CATEGORY_PRODUCTS';
const CHANGE_IS_BASKET_COPY_PRODUCT = 'CHANGE_IS_BASKET_COPY_PRODUCT';
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
const COPY_PRODUCTS = 'COPY_PRODUCTS';
const CLEAR_IS_BASKET_COPY_PRODUCT = 'CLEAR_IS_BASKET_COPY_PRODUCT';

let initialState = {
    products: [],
    copyProducts: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state, products: [...action.products]
            }
        }
        case COPY_PRODUCTS: {
            return {
                ...state, copyProducts: [...state.products]
            }
        }
        case SET_ALL_PRODUCTS: {
            return {
                ...state, copyProducts: [...state.products]
            }
        }
        case SEARCH_CATEGORY_PRODUCTS: {
            return {
                ...state,
                copyProducts: state.products.filter(prod => {
                    if(prod.category === action.category) {
                        return prod
                    }
                })
            }
        }
        case CHANGE_IS_BASKET_COPY_PRODUCT: {
            return {
                ...state,
                copyProducts: state.copyProducts.filter(prod => {
                    if(prod._id === action.id) {
                        if(prod.isBasket === false) prod.isBasket = true;
                        else prod.isBasket = false
                    }
                    return state
                })
            }
        }
        case CLEAR_IS_BASKET_COPY_PRODUCT: {
            return {
                ...state,
                copyProducts: state.copyProducts.filter(prod => {
                    if(prod.isBasket) {
                        prod.isBasket = false
                    }
                    return state
                })
            }
        }
        default:
            return state;
    }
}

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export const clearIsBasketCopyProduct = () => {
    return {
        type: CLEAR_IS_BASKET_COPY_PRODUCT
    }
}

export const searchProductsCategory = (category) => {
    return {
        type: SEARCH_CATEGORY_PRODUCTS,
        category
    }
}

export const changeIsBasketCopyProduct = (id) => {
    return {
        type: CHANGE_IS_BASKET_COPY_PRODUCT,
        id
    }
}

export const changeIsBasketProductThunk = (id) => {
    return (dispatch) => {
        dispatch(changeIsBasketCopyProduct(id));
    }
}

export const copyProducts = () => {
    return {
        type: COPY_PRODUCTS
    }
}

export const searchProductToCategory = (category) => {
    return async (dispatch) => {
        try {
            if(category === 'allProducts') {
                dispatch(copyProducts())
            } else {
                dispatch(searchProductsCategory(category));
                // let response = await productsApi.getSearchProduct(category);
                // if(response.status === 200) {
                //     dispatch(setProducts(response.data));
                // }
            }
        } catch (e) {}
    }
}

export const getProducts = () => {
    return async (dispatch) => {
        try {
            let response = await productsApi.getProducts();
            if(response.status === 200) {
                dispatch(setProducts(response.data));
            }
            dispatch(copyProducts())
        } catch (e) {

        }
    }
}

export default productsReducer;
