import { ACTIONS } from '../reducer/reducer'

export const getCountriesData = async (dispatch) => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countriesfromDB = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
  
        dispatch({
          type: ACTIONS.SET_COUNTRIES,
          countries: countriesfromDB,
        });
      });
  };