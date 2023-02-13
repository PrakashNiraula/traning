import React, { Component } from 'react'
import axios  from 'axios';
import { Navigate } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CContainer,CRow,CCol } from '@coreui/react'


export default class view extends Component {
  constructor(props) {
    super(props)
  this.state = {
         traineedata:[],
         selected_id:'',
         doc_image:'',
         profile_image:'',
         back:false
    }
}
backhome=(e)=>{
  e.preventDefault();
  this.setState({
    back:true
  })
 
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

if(this.state.back==true){
  return <Navigate to='/home'/>
}
else{

  if(this.state.traineedata!=[]){


    console.log("rendering");
    console.log("DOC IMAGW"+this.state.doc_image);
    console.log("profile IMAGW"+this.state.profile_image);
    return (
      <div>
<CContainer>

<CContainer>
{/* <CRow className="align-self-start">

<CCol>Hello</CCol>

</CRow> */}

  <CRow className="align-items-start">

    <CCol><span class="login100-form-title">
      Ace Institute and Traning Center
        </span></CCol>

  </CRow>
  <CRow className="align-items-start">

    <CCol>Ilam Municipality, Ilam</CCol>

  </CRow>


  <CRow className="align-items-center">

    <CCol>Trainee Data</CCol>

    <CCol>Submitted Documents</CCol>

    </CRow>


    <CRow className="align-self-start">

    <CCol>
    
    </CCol>
    <CCol>Photo </CCol>
    </CRow>


    <CRow className="align-self-start">

<CCol>
  <CRow>
    Name: {this.state.traineedata.name}
  </CRow>
  <CRow>
  Document Type: {this.state.traineedata.doc_type}
    </CRow>
    <CRow>
    Date of Birth: {this.state.traineedata.dob}
    </CRow>
    <CRow>
    Phone : {this.state.traineedata.phone}
    </CRow>
    <CRow>
    Traning type: {this.state.traineedata.type}
    </CRow>
    <CRow>
    Address: {this.state.traineedata.address}
    </CRow>
    <CRow>
    Fathers Name: {this.state.traineedata.fathers_name}
    </CRow>
</CCol>
<CCol><img src={this.state.profile_image} width="200px" height="200px"/></CCol>
</CRow>



<CRow className="align-self-start">

<CCol>
{this.state.traineedata.doc_type } Image
</CCol>
</CRow>
<CRow className="align-self-start">
</CRow>
<CRow className="align-self-center">
<CCol>
<img src={this.state.doc_image}  width="600px" height="600px"/>
</CCol>
</CRow>
</CContainer>

</CContainer>

      </div>
    )
  
  }

}




  }
}
