//controlled component is in seperate file
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

function Uncontrolled(params) {
    const name = useRef("")

    const handleClick = (e)=> {
        alert(name.current.value)
    }
    return (
        <div>
            <input type='text' ref={name} ></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
};
ReactDOM.render(<Uncontrolled/>,document.getElementById("root"))