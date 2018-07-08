import React, { Component } from 'react';
import './Customers.css';

export default class Customers extends Component {
  constructor(props){
    super(props);
    this.state= {
      customers:[],
      err:''
    }
  }

  componentDidMount(){
    fetch('/api/customers')
    .then( results => {
      return results.json();
    })
    .then( data => {
      console.log(`data: ${data}`);
      this.setState({'customers': data})})
    .catch(err => this.setState(err))
  };

  render(){
    return (
      <div>
          <h2>Customers</h2>
          <ul>
            {this.state.customers.map(customer => 
            <li key={customer.id}>{customer.firstName+" "+customer.lastName}</li>
            )}
          </ul>
          {/* <h3>{JSON.stringify(this.state.customers)}</h3> */}
      </div>
    )
  }
}
