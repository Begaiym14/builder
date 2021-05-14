import { ADD_DRINKS, REMOVE_DRINKS } from "../actions/types";

const initialState = {
    drinks: {
        cola: "cola",
        fanta: "fanta",
        flesh: "flesh",
        nitro: "nitro",
        pepsi: "pepsi",
        sprite: "sprite",
    },

    price: 200,
};
const prices = {
        cola: "cola",
        fanta: "fanta",
        flesh: "flesh",
        nitro: "nitro",
        pepsi: "pepsi",
        sprite: "sprite",
};
const builder = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case ADD_DRINKS:
        newState.drinks[action.drink]++;
        newState.price += prices[action.drink];
        break;
      case REMOVE_DRINKS:
        newState.drinks[action.drink]--;
        newState.price -= prices[action.drink];
        break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builder;