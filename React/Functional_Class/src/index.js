import React from 'react';
import ReactDOM from 'react-dom';

function Fex(params) {
    return <h1>I am a functional Component</h1>
    
};

class Cex extends React.Component {
    render() { 
        return (<h1>I am a class component</h1>);
    }
}
 
ReactDOM.render(<>
    <Fex/>,
    <Cex/>
</>,document.getElementById("root"))