import React, { useReducer, useEffect } from "react";
import reducer, { initialState, ACTIONS } from "../../reducer/reducer";
import "../../styles/App.css";
import { InfoBox, Map, Table, LineGraph } from "../indexes";
import "leaflet/dist/leaflet.css";

import { prettyPrintStat } from "../../helper/utilForMap";

import {
  getCountriesData,
  setCountryValue,
  setWorldwide,
} from "../../helper/helper";

import {
  MenuItem,
  FormControl,
  Select,
  CardContent,
  Card,
} from "@material-ui/core";

const App = () => {
  const [
    {
      country,
      countryInfo,
      countries,
      tableData,
      mapCenter,
      mapZoom,
      mapCountries,
      casesType,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    getCountriesData(dispatch);
    setWorldwide(dispatch);
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid Tracker</h1>
          <FormControl className="app__dropDown">
            <Select
              variant="outlined"
              value={country}
              onChange={(e) => setCountryValue(e, dispatch)}
            >
              <MenuItem key={"111"} value="worldwide">
                Worldwide
              </MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.name} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            active={casesType === "cases"}
            title="Coronavirus Cases"
            onClick={(e) =>
              dispatch({ type: ACTIONS.SET_CASES_TYPE, casesType: "cases" })
            }
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
            isGreen
            title="Recovered"
            active={casesType === "recovered"}
            onClick={(e) =>
              dispatch({ type: ACTIONS.SET_CASES_TYPE, casesType: "recovered" })
            }
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
            title="Deaths"
            active={casesType === "deaths"}
            onClick={(e) =>
              dispatch({ type: ACTIONS.SET_CASES_TYPE, casesType: "deaths" })
            }
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>

        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3 style={{margin: '10px 0'}}>Worldwide New {casesType}</h3>
          <LineGraph className='app__graph' casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
