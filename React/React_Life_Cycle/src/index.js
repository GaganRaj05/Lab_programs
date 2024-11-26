/*
Mounting phase:
1.getDerivedStateFromProps
2.ComponentDidMount

Updating phase:
1.getderivedSTATE FROM PROPS
2.COMPONENTDIDUPDATE
3.SHOULDCOMPONENTUPDATE
4.GETSNAPSHOTBEFOREUPDATE

UNMOUNTINGPHASE
COMPONENTWILLUNMOUNT

IN THIS SAME FILE I WILL ADD THE CODE FOR EACH, USE IT TO FOR EXAMS

*/ 


import React from 'react';
import ReactDOM from 'react-dom';



class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  
  ReactDOM.render(<Container />, document.getElementById('root'));
  
  