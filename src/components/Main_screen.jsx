import React, { useState } from "react";
import useGet from "../hooks/useMakeList";
import Row from "./Row";
import "../style.css";

function Mainscreen() {
    
  // States
  const [optionValue, setOptionValue] = useState("");
  const [modelData, setModalData] = useState([]);

  // custom hooks
  const { data } = useGet();
  console.log(data);

  // Function to get all data
  const getAllData = async () => {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${optionValue}?format=json`;
    const response = await fetch(url);
    console.log(response);
    const resJson = await response.json();
    console.log("JSON", resJson.Results);
    console.log("Response in JSON:" + JSON.stringify(resJson));
    setModalData(resJson.Results);
  };

  // Set Dropdown
  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

  return (
    <div>
    <div>
    <div className="form_layout">
      <form>
        <label className="label">Select Car Makes: </label>
        <select onChange={handleChange} className="select_menu">
          {data.map((name) => {
            return <option className="select_optionMenu" value={name.Make_Name}>{name.Make_Name}</option>;
          })}
        </select>
      </form>
    
      <button className="dataButton" onClick={getAllData}>GetData</button>
      </div>
        <hr className="horizontalLine"/>
      <div>
        <ul>
          {modelData.map((makeName) => (
            <Row
              make_ID={makeName.Make_ID}
              make_name={makeName.Make_Name}
              make_model={makeName.Model_Name}
            />
          ))}
        </ul>
    </div>
    </div>
    </div>
  );
}

export default Mainscreen;







