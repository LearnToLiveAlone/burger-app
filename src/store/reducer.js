import * as actionTypes from './actions';

const initialState = {
    ingredients : {
        salad: 0,
        bacon: 0,
        chesse: 0,
        meat: 0
    },
    totalPrice: 4
}

//We don't need break statement because we will return the case anyway,
//so the code executions won't continue in this function.
const reducer = ( state = initialState, action) => {
    switch (actionTypes){
        case actionTypes.ADD_INGREDIENT:
            return {

            };
        case actionTypes.REMOVE_INGREDIENT:
            return {

            };
        default:
            return state;

    }
};

export default reducer