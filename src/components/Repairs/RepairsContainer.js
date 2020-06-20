import {connect} from "react-redux";
import Repairs from "./Repairs";
import {getRepairs, searchRepairs} from "../../redux/repairsReducer";

let mapStateToProps = (state) => {
    return {
        repairs: state.repairsReducer.repairs,
        currenciesPhone: state.repairsReducer.currenciesPhone,
        malfunctionPhone: state.repairsReducer.malfunctionPhone
    }
}

export const RepairsContainer = connect(mapStateToProps, {getRepairs, searchRepairs})(Repairs);
