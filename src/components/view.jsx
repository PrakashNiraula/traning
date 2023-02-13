import React, { Component } from 'react'
import axios  from 'axios';

export default class view extends Component {
  constructor(props) {
    super(props)
  this.state = {
         traineedata:[],
         selected_id:'',
         doc_image:'',
         profile_image:''
    }
}
componentDidMount=()=>{
  var res=localStorage.getItem('selected');
  let url='http://140.238.204.76:3001/trainee/'+res;

  axios.get(url)
  .then((res) => {
      this.setState({
          traineedata: res.data[0],
          doc_image:"http://140.238.204.76:3001/"+res.data[0].doc_image.split("/")[1]+"/"+res.data[0].doc_image.split("/")[2],
          profile_image:"http://140.238.204.76:3001/"+res.data[0].profile_image.split("/")[1]+"/"+res.data[0].profile_image.split("/")[2]
      });
  }).catch((err) => console.log(err.response));
}


  render() {
if(this.state.traineedata!=[]){


  console.log("rendering");
  console.log("DOC IMAGW"+this.state.doc_image);
  console.log("profile IMAGW"+this.state.profile_image);
  return (
    <div>
      <div>
<div class="limiter">
<div class="container-login200">
  <div class="wrap-login200">
  <span class="login100-form-title">
    ACE SKILL TRANING CENTER
      </span>
      <span class="login100-form-title">
    Name:{this.state.traineedata.name}
      </span>
      <span class="login100-form-title">
    Document Type:{this.state.traineedata.doc_type}
      </span>
      <span class="login100-form-title">
   DOB:{this.state.traineedata.dob}
      </span>
      <span class="login100-form-title">
   Phone :{this.state.traineedata.phone}
    </span>
      <span class="login100-form-title">
   Traning type:{this.state.traineedata.type}
      </span>
      <span class="login100-form-title">
   Address:{this.state.traineedata.address}
      </span>
      <span class="login100-form-title">
   Fathers Name:{this.state.traineedata.fathers_name}
      </span>
      <span class="login100-form-title">
         Document image:<img src={this.state.profile_image} width="200px" height="200px"/>
      </span>

      <span class="login100-form-title">
         Profile image: 
        <img src={this.state.doc_image} width="200px" height="200px"/>
      </span>
      </div></div></div></div>

    </div>
  )

}
  }
}
