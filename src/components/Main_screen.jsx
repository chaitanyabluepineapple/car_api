import React, { useState } from "react";
import useMakeList from "../hooks/useMakeList";
import Row from "./Row";
import Make from "./Make";
import "../style.css";

function Mainscreen() {

  // States
  const [optionValue, setOptionValue] = useState("ASTON MARTIN");
  const [modelData, setModalData] = useState([]);

  // custom hooks for useEffect 
  const { data } = useMakeList();
  console.log(data);
  // Function to get all data
  const getAllData = async () => {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${optionValue}?format=json`;
    const response = await fetch(url);
    const resJson = await response.json();

    setModalData(resJson.Results);
  };

  // Set Dropdown
  const handleChange = (e) => {
    e.preventDefault();
    setOptionValue(e.target.value);
  };


  return (
    <div>
      <div>
        <div className="form_layout">
            <Make handleChange={handleChange} searchName={data.Make_Name} value={data.Make_Name} data={data}/>
          <button className="dataButton" onClick={getAllData}>Get Model</button>

        </div>
        <hr className="horizontalLine" />
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







