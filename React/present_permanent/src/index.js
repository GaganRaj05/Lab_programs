import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Address(params) {
  const[address, setAddress] = useState("");

  const handleChange =(e) =>{
    setAddress(e.target.value);
  }
  return (
    <div>
      <input type="text" placeholder='Permanent Address'  value={address}onChange={handleChange}></input>
      <input type="text" placeholder='Present Address'  value={address}onChange={handleChange}></input>
    </div>
  )
};

ReactDOM.render(<Address/>,document.getElementById("root"));