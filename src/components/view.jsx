import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CContainer, CRow, CCol } from "@coreui/react";

export default class view extends Component {
  constructor(props) {
    super(props);
    this.state = {
      traineedata: [],
      selected_id: "",
      doc_image: "",
      profile_image: "",
      back: false,
    };
  }
  backhome = (e) => {
    e.preventDefault();
    this.setState({
      back: true,
    });
  };
  componentDidMount = () => {
    var res = localStorage.getItem("selected");
    let url = "http://140.238.204.76:3001/trainee/" + res;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          traineedata: res.data[0],
          doc_image:
            "http://140.238.204.76:3001/" +
            res.data[0].doc_image.split("/")[1] +
            "/" +
            res.data[0].doc_image.split("/")[2],
          profile_image:
            "http://140.238.204.76:3001/" +
            res.data[0].profile_image.split("/")[1] +
            "/" +
            res.data[0].profile_image.split("/")[2],
        });
      })
      .catch((err) => console.log(err.response));
  };

  render() {
    if (this.state.back == true) {
      return <Navigate to="/home" />;
    } else {
      if (this.state.traineedata != []) {
        console.log("rendering");
        console.log("DOC IMAGW" + this.state.doc_image);
        console.log("profile IMAGW" + this.state.profile_image);
        return (
          <div className="w-full p-8">
            <CContainer className="border border-gray-500 shadow-lg p-4 bg-gray-50">
              <CContainer>
                {/* <CRow className="align-self-start">
                  <CCol>Hello</CCol>
                </CRow> */}

                <CRow className="align-items-start">
                  <CCol>
                    <span class="login100-form-title">
                      Ace Institute and Traning Center
                    </span>
                  </CCol>
                </CRow>
                <CRow className="align-items-start">
                  <CCol>Ilam Municipality, Ilam</CCol>
                </CRow>

                <CRow className="align-items-center">
                  <CCol>Trainee Data</CCol>

                  <CCol>Submitted Documents</CCol>
                </CRow>

                <CRow className="align-self-start">
                  <CCol></CCol>
                  <CCol>Photo </CCol>
                </CRow>
                <CRow className="align-self-start  ">
                  <CCol className="flex flex-col gap-2 ">
                    <CRow>Name: {this.state.traineedata.name}</CRow>
                    <CRow>
                      Document Type: {this.state.traineedata.doc_type}
                    </CRow>
                    <CRow>Date of Birth: {this.state.traineedata.dob}</CRow>
                    <CRow>Phone: {this.state.traineedata.phone}</CRow>
                    <CRow>Traning type: {this.state.traineedata.type}</CRow>
                    <CRow>Address: {this.state.traineedata.address}</CRow>
                    <CRow>
                      Fathers Name: {this.state.traineedata.fathers_name}
                    </CRow>
                  </CCol>
                </CRow>
                <div className="absolute w-52 h-w-52 top-48 right-72">
                  <CCol className=" w-full h-full">
                    <img
                      src={this.state.profile_image}
                      className="w-full h-full object-cover"
                      alt="profile_image"
                    />
                  </CCol>
                </div>

                <CRow className="align-self-start mt-2">
                  <CCol>{this.state.traineedata.doc_type}Photo</CCol>
                </CRow>
                {/* <CRow className="align-self-start"></CRow> */}
                <div className="w-full flex items-center justify-center">
                  <CRow className="align-self-center mt-1 w-1/2 h-1/2">
                    <CCol>
                      <img
                        src={this.state.doc_image}
                        className="w-full h-full object-cover"
                        alt="document_image"
                      />
                    </CCol>
                  </CRow>
                </div>
              </CContainer>
            </CContainer>
          </div>
        );
      }
    }
  }
}
