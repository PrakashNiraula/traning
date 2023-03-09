import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { Table } from "reactstrap";
import "rsuite-table/lib/less/index.less";
import { Navigate, Redirect } from "react-router-dom";
import { Alert } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CContainer } from "@coreui/react";
import PrintIcon from "@material-ui/icons/Print";
import ME from "../assets/me.jpeg";
import Document from "../assets/7.PNG";
import { AiFillDelete, AiFillPrinter } from "react-icons/ai";
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      traineedata: [
        {
          id: 1,
          doc_type: "Loren",
          name: "Sunil Bista",
          phone: "123456",
          type: "Loren",
          created_on: "2023/23/2",
          dob: "2058/05/01",
          address: "Shantinagar",
          fathers_name: "Sunil Bista",
          voucher_id: 44,
          profile_image: ME,
          doc_image: Document,
        },
      ],
      view: false,
    };
  }
  // componentDidMount = () => {
  //   axios
  //     .get("http://140.238.204.76:3001/trainee")
  //     .then((res) => {
  //       this.setState({
  //         traineedata: res.data,
  //       });
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err.response));
  // };

  // deleterecord = (record_id) => {
  //   var newarray = [];
  //   axios
  //     .delete("http://140.238.204.76:3001/trainee/" + record_id)
  //     .then((res) => {
  //       res.data.forEach((element) => {
  //         if (element.id == record_id) {
  //         } else {
  //           newarray.push(element);
  //         }
  //       });
  //       this.setState({
  //         traineedata: newarray,
  //       });
  //     })
  //     .catch((err) => console.log(err.response));
  // };

  printrow = async (data) => {
    localStorage.setItem("selected", data);
    this.setState({
      view: true,
    });
  };
  render() {
    if (this.state.view == true) {
      return <Navigate to="/view" replace={true} />;
    } else if (this.state.traineedata != []) {
      return (
        <div className="overflow-x-auto scrollbar-hide">
          <CContainer fluid>
            <Table
              name="datatable"
              className="w-full border-collapse border border-gray-200"
            >
              <thead>
                <tr>
                  <th className="px-4 py-2 text-base whitespace-pre">ID</th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Document Type
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Full Name
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">Phone</th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Traning Type
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Created on
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">DOB</th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Address
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Fathers name
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Voucher id
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Document Image
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">
                    Profile Image
                  </th>
                  <th className="px-4 py-2 text-base whitespace-pre">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.traineedata.map((trainee) => (
                  <tr>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.id}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.doc_type}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.name}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.phone}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.type}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.created_on}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.dob}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.address}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.fathers_name}
                      </h3>
                    </td>
                    <td>
                      <h3 className="px-4 py-2 text-sm whitespace-pre text-gray-400 hover:text-black cursor-pointer">
                        {trainee.voucher_id}
                      </h3>
                    </td>
                    <td>
                      <img
                        className="px-4 w-32 h-32 object-cover rounded-md"
                        // src={
                        //   "http://140.238.204.76:3001/" +
                        //   trainee.doc_image.split("/")[1] +
                        //   "/" +
                        //   trainee.doc_image.split("/")[2]
                        // }
                        src={trainee.doc_image}
                      />
                    </td>
                    <td>
                      <img
                        className="px-4 w-32 h-32 object-cover rounded-md"
                        // src={
                        //   "http://140.238.204.76:3001/" +
                        //   trainee.profile_image.split("/")[1] +
                        //   "/" +
                        //   trainee.profile_image.split("/")[2]
                        // }
                        src={trainee.profile_image}
                      />
                    </td>
                    <td>
                      <div className="flex px-4 gap-2">
                        <AiFillDelete
                          className="cursor-pointer text-gray-400 text-xl hover:text-red-600"
                          onClick={() => this.deleterecord(trainee.id)}
                        />

                        <AiFillPrinter
                          className="cursor-pointer text-gray-400 text-xl hover:text-green-600"
                          name="print"
                          onClick={() => this.printrow(trainee.id)}
                        />
                      </div>
                    </td>
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
      );
    } else {
      return <div></div>;
    }
  }
}
