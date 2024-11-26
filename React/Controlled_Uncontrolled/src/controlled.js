import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Controlled(params) {
    const [name,setName] = useState("")

    const handleChange=(e)=> {
        setName(e.target.value)
    }
    const handleClick=(e)=> {
        alert(name);
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={name}></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
};
ReactDOM.render(<Controlled/>,document.getElementById("root"))