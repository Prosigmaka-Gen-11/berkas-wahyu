import React from 'react';
import './App.css';
import LaptopClass from './LaptopClass';
import LaptopFunctional from './LaptopFunctional';


export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      munculinLaptopClass: true,
      munculinLaptopFunctional: true,
    }
  }

  render() {
    return (
      <div>
        <h1>React Lifecycle</h1>

          <button onClick={() => this.setState({ munculinLaptopClass: false})}>
            Hilangkan Class
          </button>

          {this.state.munculinLaptopClass
          ? 
            <>
              <LaptopClass />
            </>
          : null}
          
          <hr /><br/>

          <button onClick={() => this.setState({ munculinLaptopFunctional : false })}>
            Hilangkan Function
          </button>
          {this.state.munculinLaptopFunctional
          ? <LaptopFunctional />
          : null}
      </div>
    )
  }
}