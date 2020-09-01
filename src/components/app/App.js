import React, { useReducer, useEffect } from "react";
import "../../styles/App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import reducer, { initialState } from "../../reducer/reducer";
import { getCountriesData } from "../../helper/helper";

const App = () => {
  const [{ countries }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCountriesData(dispatch);
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid Tracker</h1>
        <FormControl>
          <Select>
            {countries.map((c) => (
              <MenuItem value="c">{c.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default App;
