const initialState = {
    ingredients: {
        red: 1,
        blue: 1,
        pink: 1,
        purple: 1,
        white: 1,
        yellow: 1,
    }
};

const builderReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "ADD_INGREDIENT":
            newState.ingredients[action.ingredient]++;
            break;
        case "REMOVE_INGREDIENT":
            newState.ingredients[action.ingredient]--;
            break;
        default:
            break;
    }
    return newState;
}
export default builderReducer;