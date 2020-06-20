import {repairsApi} from "../api/api";

const SET_REPAIRS = 'SET_REPAIRS';

let initialState = {
    repairs: [],
    currenciesPhone: [
        {
            value: 'Iphone',
            label: 'Iphone',
        },
        {
            value: 'Samsung',
            label: 'Samsung',
        },
        {
            value: 'Xiaomi',
            label: 'Xiaomi',
        },
        {
            value: 'Sony',
            label: 'Sony',
        },
        {
            value: 'Lg',
            label: 'LG',
        },
        {
            value: 'Lenovo',
            label: 'Lenovo',
        },
        {
            value: 'Meizu',
            label: 'Meizu',
        },
        {
            value: 'Oneplus',
            label: 'OnePlus',
        },
        {
            value: 'Nokia',
            label: 'Nokia',
        }
    ],
    malfunctionPhone: [
        {
            value: 'Стекло',
            label: 'Стекло'
        },
        {
            value: 'Батарея',
            label: 'Батарея'
        },
        {
            value: 'Камера',
            label: 'Камера'
        }
    ]
}

const repairsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPAIRS: {
            return {
                ...state, repairs: [...action.repairs]
            }
        }
        default:
            return state;
    }
}

export const setRepairs = (repairs) => {
    return {
        type: SET_REPAIRS,
        repairs
    }
}

export const getRepairs = () => {
    return async (dispatch) => {
        try {
            let response = await repairsApi.getRepairs();
            if(response.status === 200) {
                dispatch(setRepairs(response.data))
            }
        } catch (e) {

        }
    }
}
export const searchRepairs = (repairs, name) => {
    return async (dispatch) => {
        try {
            let response = await repairsApi.getSearchRepairs(repairs, name);
            if(response.status === 200) {
                dispatch(setRepairs(response.data))
            }
        } catch (e) {

        }
    }
}

export default repairsReducer;
