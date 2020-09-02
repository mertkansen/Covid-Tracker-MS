import { ACTIONS } from '../reducer/reducer'
import { sortData } from './utilForLineGraph'

export const setCountryValue = async (e, dispatch) => {
  const url = e.target.value === 'worldwide' 
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${e.target.value}`

  await fetch(url).then(res => res.json()).then(
    data => {
      dispatch({
        type: ACTIONS.SET_COUNTRY,
        country: e.target.value
    })

    dispatch({
      type: ACTIONS.SET_COUNTRY_INFO,
      countryInfo: data
    })

    dispatch({
      type: ACTIONS.SET_MAP_CENTER,
      mapCenter: [data.countryInfo.lat, data.countryInfo.long]
    })

    dispatch({
      type: ACTIONS.SET_MAP_ZOOM,
      mapZoom: 4
    })
  }
  )
}

// sets the worldwide infos at the beginning
export const setWorldwide = async (dispatch) => {
  await fetch("https://disease.sh/v3/covid-19/all")
  .then((res) => res.json())
  .then((data) => dispatch({
    type: ACTIONS.SET_COUNTRY_INFO,
    countryInfo: data
  }));
}


export const getCountriesData = async (dispatch) => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countriesfromDB = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));

        dispatch({
          type: ACTIONS.SET_TABLE_DATA,
          tableData: sortData(data)
        })

        dispatch({
          type: ACTIONS.SET_MAP_COUNTRIES,
          mapCountries: data
        })
  
        dispatch({
          type: ACTIONS.SET_COUNTRIES,
          countries: countriesfromDB,
        });
      });
  };