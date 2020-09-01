import React, { useReducer, useEffect } from "react";
import "../../styles/App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import reducer, { initialState } from "../../reducer/reducer";
import { getCountriesData, setCountryValue } from "../../helper/helper";

const App = () => {
  const [{ country, countries }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCountriesData(dispatch);
  }, []);

  return (
    <div className="app">
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
    </div>
  );
};

export default App;
