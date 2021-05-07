const initialState = {
    ingredients: {
        dumai: "dumai",
        kay: "kay",
    },

    price: 200,
};
const prices = {
    dumai: "dumai",
    kay: "kay",
};
const builderReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "ADD_INGREDIENT":
            newState.ingredients[action.ingredient]++;
            newState.price += prices[action.ingredient];
            break;
        case "REMOVE_INGREDIENT":
            newState.ingredients[action.ingredient]--;
            newState.price -= prices[action.ingredient];
            break;
        default:
            break;
    }
    return newState;
}
export default builderReducer;