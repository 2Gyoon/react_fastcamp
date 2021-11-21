import logo from './logo.svg';
import './App.css';
import React from 'react';

class Foo extends React.Component{
  componentDidMount(){
    console.log('Foo componentDidMount', this.props.children);
  }

  componentWillUnmount(){
    console.log('Foo componentWillUnmount')
  }

  static getDerivedStateFromProps(nextProps, prevProps){
    console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
    return {};
  }
  
  render(){
    console.log("Foo render", this.props.children);
    return(
      <p>Foo</p>
    );
  }
}

class App extends React.Component{
  state = {
    count : 0,
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({count : this.state.count + 1});
    }, 1000);
  }

  render(){
    if(this.state.count % 2 === 0){
      return (
        /*
        <div>
          <Foo />
        </div>
        */
      // <div className="before" title="stuff" />
      // <div style={{color: 'red', fontWeight: "bold"}} />
      // <Foo name="Mark" />
      <ul>
        <Foo key="2">second</Foo>
        <Foo key="3">third</Foo>
      </ul>
      );
    }
    return (
      /*
      <span>
        <Foo />
      </span>
      */
      // <div className="after" title="stuff" />
      // <div style={{color: 'green', fontWeight: "bold"}} />
      // <Foo name="Anna" />
      <ul>
        <Foo key="1">first</Foo>
        <Foo key="2">second</Foo>
        <Foo key="3">third</Foo>
      </ul>
    );
  }
}

export default App;
