import React, { Component } from 'react'
export default class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
  this.state = {data: props};
  }
  componentDidMount=()=>{
    console.log(this.state.data);
  }
  render() {
    return (
      <div>
<div class="limiter">
  <div class="container-login200">
    <div class="wrap-login200">
    <span class="login100-form-title">
    <h2 style={{color: "green"}}>Ace Institute Traning Center</h2>
        </span>
        <span class="login100-form-title">
      Document type: 
        </span>
        </div></div></div>
      </div>
    );
  }
}