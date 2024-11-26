import React from 'react';

export default function Card(params) {
    return(
        <div style={{height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="card" style={{ width: "18rem", marginRight:"100px" }}>
<img src="" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Call us</h5>
<p className="card-text">
  +91 1234567891
</p>

</div>
</div>
<div className="card" style={{ width: "18rem", marginRight:"100px" }}>
<img src="" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Email</h5>
<p className="card-text">
  abcd@gmail.com
</p>

</div>
</div>
<div className="card" style={{ width: "18rem" }}>
<img src="" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Office</h5>
<p className="card-text">
The Principal,
SDM Polytechnic
Ujire
</p>

</div>
</div>


    </div>
    );
};
