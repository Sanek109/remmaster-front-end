import Magazine from "./Magazine";
import {connect} from "react-redux";
import {addProductToBasket} from '../../redux/basketReducer';
import {searchProductToCategory} from "../../redux/productsReducer";

let mapStateToProps = (state) => {
    return {
        products: state.productsReducer.products
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addProductBasket: (product) => {
            dispatch(addProductToBasket(product))
        },
        searchProductCategory: (category) => {
            dispatch(searchProductToCategory(category))
        }
    }
}

export const MagazineContainer = connect(mapStateToProps, mapDispatchToProps)(Magazine)
