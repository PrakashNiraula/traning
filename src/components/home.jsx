import React, { Component } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios';
import {Table} from 'reactstrap'
import 'rsuite-table/lib/less/index.less';
import { Navigate ,Redirect} from "react-router-dom";
import { Alert } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CContainer } from '@coreui/react'



export default class home extends Component {

  constructor(props) {
    super(props)
  this.state = {
         traineedata:[],
         view:false
    }
}
  componentDidMount=()=>{
   
    axios.get('http://140.238.204.76:3001/trainee')
    .then((res) => {
        this.setState({
            traineedata: res.data 
        })
        console.log(res.data);
    }).catch((err) => console.log(err.response));
  }

  deleterecord=(record_id)=>{
    var newarray=[];
    axios.delete('http://140.238.204.76:3001/trainee/'+record_id)
    .then((res) => {
      res.data.forEach(element => {
        if(element.id==record_id){

        }else{
          newarray.push(element);

        }
      });
      this.setState({
        traineedata:newarray
      })

    }).catch((err) => console.log(err.response));
  }

printrow=async(data)=>{
  localStorage.setItem('selected',data);
  this.setState({
    view :true
  })
};
  render() {
    if(this.state.view==true){

      return (
        <Navigate to="/view" replace={true} />
      )
    }

else if(this.state.traineedata!=[]){
  return(
    <div>
      <CContainer fluid>
      <Table name="datatable">
  <thead>
      <tr>
          <th>ID</th>
          <th>Document Type</th>
          <th>full Name</th>
          <th>Phone</th>
          <th>Traning Type</th>
          <th>Created on</th>
          <th>DOB</th>
          <th>Address</th>
          <th>Fathers name</th>
          <th>Voucher id</th>
          <th>Document Image</th>
          <th>Profile Image</th>
      </tr>
  </thead>
  <tbody>
      {
      this.state.traineedata.map(trainee => (
          <tr>
              <td ><h3>{trainee.id}</h3></td>
              <td ><h3>{trainee.doc_type}</h3></td>
              <td ><h3>{trainee.name}</h3></td>
              <td ><h3>{trainee.phone}</h3></td>
              <td ><h3>{trainee.type}</h3></td>
              <td ><h3>{trainee.created_on}</h3></td>
              <td ><h3>{trainee.dob}</h3></td>
              <td ><h3>{trainee.address}</h3></td>
              <td ><h3>{trainee.fathers_name}</h3></td>
              <td ><h3>{trainee.voucher_id}</h3></td>
              <td ><img height="200px" width="200px" src={"http://140.238.204.76:3001/"+trainee.doc_image.split("/")[1]+"/"+trainee.doc_image.split("/")[2]}/></td>
              <td ><img height="200px" width="200px" src={"http://140.238.204.76:3001/"+trainee.profile_image.split("/")[1]+"/"+trainee.profile_image.split("/")[2]}/></td>
              <td > <h3 onClick={() =>this.deleterecord(trainee.id)}>Delete</h3></td>
              <td ><h3  name="print" onClick={() =>this.printrow(trainee.id)}>Print</h3></td>
          </tr>
      ))}
  </tbody>
</Table>

</CContainer>
      
{/* <div class="limiter">
  <div class="container-login200">
    <div class="wrap-login200">
    <span class="login100-form-title">
      Trainee Records
        </span>
       

        <Table name="datatable">
  <thead>
      <tr>
          <th>ID</th>
          <th>Document Type</th>
          <th>full Name</th>
          <th>Phone</th>
          <th>Traning Type</th>
          <th>Created on</th>
          <th>DOB</th>
          <th>Address</th>
          <th>Fathers name</th>
          <th>Voucher id</th>
          <th>Document Image</th>
          <th>Profile Image</th>
      </tr>
  </thead>
  <tbody>
      {
      this.state.traineedata.map(trainee => (
          <tr>
              <td ><h3>{trainee.id}</h3></td>
              <td ><h3>{trainee.doc_type}</h3></td>
              <td ><h3>{trainee.name}</h3></td>
              <td ><h3>{trainee.phone}</h3></td>
              <td ><h3>{trainee.type}</h3></td>
              <td ><h3>{trainee.created_on}</h3></td>
              <td ><h3>{trainee.dob}</h3></td>
              <td ><h3>{trainee.address}</h3></td>
              <td ><h3>{trainee.fathers_name}</h3></td>
              <td ><h3>{trainee.voucher_id}</h3></td>
              <td ><img height="200px" width="200px" src={"http://140.238.204.76:3001/"+trainee.doc_image.split("/")[1]+"/"+trainee.doc_image.split("/")[2]}/></td>
              <td ><img height="200px" width="200px" src={"http://140.238.204.76:3001/"+trainee.profile_image.split("/")[1]+"/"+trainee.profile_image.split("/")[2]}/></td>
              <td > <h3 onClick={() =>this.deleterecord(trainee.id)}>Delete</h3></td>
              <td ><h3  name="print" onClick={() =>this.printrow(trainee.id)}>Print</h3></td>
          </tr>
      ))}
  </tbody>
</Table>

</div>
</div>
</div> */}

    </div>
  )

}else{
  
  return (
    <div>
    </div>
  )
}
  }
}
