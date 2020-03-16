import React, { Component, useState } from 'react';
import "./Apps.scss";
import { Container, Row, Col } from "react-bootstrap";
import pizzas from "./data/pizza";

import {PizzaCard} from "./components/PizzaCard";
import {Confirmation} from "./components/Confirmation";
// import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import logo from './logo.svg';
import './App.css';

//component and properties
// function Greeting(props) {
//   return `Haloo ${props.name}, Selamat Datang`
// }

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleStatus: true
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((state)=> ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggleStatus  ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}


class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: props.start
    }
  }
  
  // lifecycle
  componentDidMount() {
    this.interval = setInterval(() => this.increase(), 1000)
  }

  
  componentWillMount() {
    clearInterval(this.interval)
  }
  
  increase(){
    this.setState((state) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div>
        {this.state.time} Detik
      </div>
    );
  }
}


function App(){
 
  const [ordered, setOrdered] = useState(false)

  function displayConfirmation() {
    setOrdered(true)

    setTimeout(()=>{
      setOrdered(false)
    },3000)
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Timer start="0"/>
          <Toggle />
        </header>
  
        <Container>
            {ordered && <Confirmation toggle={setOrdered} />}
          <Row>
           {pizzas.map(data=>(
             <Col xs={3} className="mb-5 mt-2" key={`${data.id}`}>
              <PizzaCard data={data} setOrdered={displayConfirmation} />
            </Col>
           ))}
          </Row>
        </Container>
        
      </div>
    );
  }


export default App;
