import React from 'react';
import '../style.css';


function Make({handleChange, data}) {

    return (
        <div>
            <form>
              <label className="label">Select Car Makes: </label>
              <select onChange={handleChange} className="select_menu">
                {data.map((name) => (
                    <option className="select_optionMenu" value={name.Make_Name}>{name.Make_Name}</option>
                ))}
              </select>
            </form>
            
        </div>
    )
}

export default Make
