import {connect} from "react-redux";
import Baskets from "./Baskets";
import {
    addQuantityProductToBasket,
    deleteAllBasket, deleteProductInBasket,
    removeQuantityProductToBasket
} from "../../redux/basketReducer";

let mapStateToProps = (state) => {
    return {
        basket: state.basketReducer.basket,
        priceAll: state.basketReducer.priceAll
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteProductToBasket: (id, amountPrice) => {
            dispatch(deleteProductInBasket(id, amountPrice))
        },
        deleteToBasket: () => {
            dispatch(deleteAllBasket())
        },
        addQuantityToProduct: (id, price) => {
            dispatch(addQuantityProductToBasket(id, price))
        },
        removeQuantityToProduct: (id, price) => {
            dispatch(removeQuantityProductToBasket(id, price))
        }
    }
}

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Baskets)
