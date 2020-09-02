export const ACTIONS = {
    SET_COUNTRY: "set-country",
    SET_COUNTRY_INFO: 'set-country-info',
    SET_COUNTRIES: "set-countries",
    SET_TABLE_DATA: "set-table-data",
    SET_MAP_CENTER: "set-map-center",
    SET_MAP_ZOOM: "set-map-zoom",
    SET_MAP_COUNTRIES: "set-map-countries",
    SET_CASES_TYPE: "set-cases-type"
  };
  
export const initialState = {
    country: 'worldwide',
    countryInfo: {},
    countries: [],
    tableData: [],
    mapCenter: {lat: 34.80746, lng: -40.4796},
    mapZoom: 3,
    mapCountries: [],
    casesType: "cases"
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
        case ACTIONS.SET_COUNTRY_INFO:
          return {
            ...state,
            countryInfo: action.countryInfo
          }
        case ACTIONS.SET_TABLE_DATA:
          return {
            ...state,
            tableData: action.tableData
          }
        case ACTIONS.SET_MAP_CENTER:
          return {
            ...state,
            mapCenter: action.mapCenter
          }
        case ACTIONS.SET_MAP_ZOOM: 
          return {
            ...state,
            mapZoom: action.mapZoom
          }
        case ACTIONS.SET_MAP_COUNTRIES:
          return {
            ...state,
            mapCountries: action.mapCountries
          }
        case ACTIONS.SET_CASES_TYPE:
          return {
            ...state,
            casesType: action.casesType
          }
      default:
        return state;
    }
};

export default reducer