import { IZRAZI } from "../../data/rjecnik"

const initialState = IZRAZI;

const DODAJ_IZRAZE = 'DODAJ_IZRAZE';

const izrazReducer = (state = initialState, action) => {
  switch (action.type) {
    case DODAJ_IZRAZE:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const dodajIzraze = (izrazi) => {
  return {
    type: DODAJ_IZRAZE,
    payload: izrazi,
  };
};

export default izrazReducer;