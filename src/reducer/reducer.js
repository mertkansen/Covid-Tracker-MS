export const ACTIONS = {
    SET_COUNTRIES: "set-countries",
  };
  
export const initialState = {
    countries: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.SET_COUNTRIES:
        return {
          ...state,
          countries: action.countries,
        };
      default:
        return state;
    }
};

export default reducer