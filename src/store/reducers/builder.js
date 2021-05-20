import { ADD_DRINKS, REMOVE_DRINKS, SET_DRINKS } from "../actions/types";

const initialState = {
  drinks: {
  },

  price: 0,
};
const prices = {
  cola: 14,
  fanta: 14,
  flesh: 14,
  nitro: 14,
  pepsi: 14,
  sprite: 14,
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
    case SET_DRINKS:
      newState.drinks = action.data.drinks;
      newState.price = action.data.price;
      break;

    default:
      break;
  }

  return newState;
}

export default builder;