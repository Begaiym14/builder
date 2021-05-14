import axios from "../../axios";
import { ADD_DRINKS, REMOVE_DRINKS, SET_DRINKS } from "./types";

export const add = (drink) => ({
  type: ADD_DRINKS,
  drink: drink
});

export const remove = (drink) => ({
  type: REMOVE_DRINKS,
  drink: drink
});

export const set = (data) => ({
  type: SET_DRINKS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}