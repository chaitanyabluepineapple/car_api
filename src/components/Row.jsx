import React from 'react'
import '../style.css';

function Row({make_ID, make_name, make_model}) {
    return (
        <div>
            <li className="w3-panel w3-card">
                <h5> <span>ID:   </span> {make_ID}</h5>
                <h5> <span>Make Name:   </span> {make_name}</h5>
                <h5> <span>Model Name:   </span>{make_model}</h5>
            </li>
        </div>
    )
}

export default Row
