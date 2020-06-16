import {productsApi} from "../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';

let initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state, products: [...action.products]
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

export const searchProductToCategory = (category) => {
    return async (dispatch) => {
        try {
            if(category === 'allProducts') {
                dispatch(getProducts())
            } else {
                let response = await productsApi.getSearchProduct(category);
                if(response.status === 200) {
                    dispatch(setProducts(response.data));
                }
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
        } catch (e) {

        }
    }
}

export default productsReducer;
