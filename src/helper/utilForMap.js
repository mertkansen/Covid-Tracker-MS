import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import '../styles/utilForMap.css'

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

// Draw circle on the map
// Popup is for the interactive tooltip
export const showDataOnMap = (data, casesTypes = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesTypes].hex}
      fillColor={casesTypeColors[casesTypes].hex}
      radius={
        Math.sqrt(country[casesTypes]) * casesTypeColors[casesTypes].multiplier
      }
    >
      <Popup>
        <div className='info__container'>
          <div
            className='info__flag'
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className='info-name'>{country.country}</div>
          <div className='info-confirmed'>Cases: {numeral(country.cases).format("0,0")}</div>
          <div className='info-recovered'>Recovered: {numeral(country.recovered).format("0,0")} </div>
          <div className='info-deaths'>Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ));

  export const prettyPrintStat = stat => stat ? `+${numeral(stat).format("0.0a")}` : "+0"