export const ACTIONS = {
    SET_COUNTRY: "set-country",
    SET_COUNTRIES: "set-countries",
  };
  
export const initialState = {
    country: 'worldwide',
    countries: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.SET_COUNTRIES:
        return {
          ...state,
          countries: action.countries,
        };
        case ACTIONS.SET_COUNTRY:
            return {
                ...state,
                country: action.country
            }
      default:
        return state;
    }
};

export default reducer