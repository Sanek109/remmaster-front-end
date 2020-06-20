import Magazine from "./Magazine";
import {connect} from "react-redux";
import {addToProductBasketThunk} from '../../redux/basketReducer';
import {searchProductToCategory} from "../../redux/productsReducer";

let mapStateToProps = (state) => {
    return {
        products: state.productsReducer.copyProducts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addProductBasket: (product) => {
            dispatch(addToProductBasketThunk(product))
        },
        searchProductCategory: (category) => {
            dispatch(searchProductToCategory(category))
        }
    }
}

export const MagazineContainer = connect(mapStateToProps, mapDispatchToProps)(Magazine)
