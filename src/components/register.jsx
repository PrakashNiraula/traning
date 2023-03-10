import React, { Component } from "react";
import axios from "axios";
import { Navigate, Redirect } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      document_type: "1",
      name: "",
      phone: "",
      training_type: "1",
      document_number: "",
      dob: "",
      address: "",
      fathers_name: "",
      voucher_id: "",
      registered: false,
      error: "",
      url: "'http://140.238.204.76:3001/trainee'",
      traningtypedata: [],
      documenttypedata: [],
      selected_docimage: "",
      selected_profileimage: "",
      doc_image: "",
      profile_image: "",
      submitted: false,
      isDisabled: false,
    };
  }
  handlechange = (e) => {
    this.setState({ selected_docimage: e.target.files[0] });
    console.log("Handling changes");
    console.log(this.state);
  };

  handlechange2 = (e) => {
    this.setState({ selected_profileimage: e.target.files[0] });
    console.log("Handling changes");
    console.log(this.state);
  };

  componentDidMount = (e) => {};
  handleinput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  document_type_handler = async (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  traning_type_handler = async (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitform = async (e) => {
    e.preventDefault();
    console.log("Here submitting");
    this.setState({
      isDisabled: true,
    });

    console.log("We are here");
    console.log(this.state);

    const formData = new FormData();
    // Update the formData object
    formData.append("myfile", this.state.selected_docimage);

    var res = await axios.post("http://140.238.204.76:3001/upload", formData);
    const formData2 = new FormData();
    // Update the formData object
    formData2.append("myfile", this.state.selected_profileimage);
    var res2 = await axios.post("http://140.238.204.76:3001/upload", formData2);
    console.log(res.data);
    console.log(res2.data);
    var data = JSON.stringify({
      document_type: this.state.document_type,
      name: this.state.name,
      phone: this.state.phone,
      traning_type: this.state.training_type,
      document_number: this.state.document_number,
      dob:
        this.state.dob.split("-")[0] +
        "/" +
        this.state.dob.split("-")[1] +
        "/" +
        this.state.dob.split("-")[2],
      address: this.state.address,
      fathers_name: this.state.fathers_name,
      voucher_id: this.state.voucher_id,
      doc_image: res.data.path,
      profile_image: res2.data.path,
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://140.238.204.76:3001/trainee",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    console.log(data);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      submitted: true,
    });
  };

  render() {
    if (this.state.submitted == true) {
      return <Navigate to="/success" replace={true} />;
    } else if (this.state.isDisabled == true) {
      return (
        <div>
          <div class="limiter">
            <div class="container-login100">
              <div class="wrap-login100">
                <span class="login100-form-title">Ace Skill Traning</span>
                <span class="login100-form-title">Ilam Municipality,Ilam</span>

                <span class="login100-form-title">
                  Submitting data please wait...
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div class="limiter">
            <div class="container-login100">
              <div class="wrap-login100">
                <span class="login100-form-title">Ace Skill Traning</span>
                <span class="login100-form-title">Ilam Municipality,Ilam</span>
                <span class="login100-form-title">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat cumque dolore neque magni hic aut beatae non
                    maiores tenetur, quod porro dignissimos quam eaque veniam!
                    Perferendis vitae molestiae suscipit libero
                  </p>
                </span>
                <div className="w-full px-6 flex items-center justify-between mb-2">
                  <div className="">
                    <label for="membership">Choose your document type:</label>
                    <select
                      className="ml-2 border p-1 rounded-md"
                      name="document_type"
                      value={this.state.document_type}
                      id="document_type"
                      onChange={this.document_type_handler}
                    >
                      <option value="1">Citizenship</option>
                      <option value="2">Passport</option>
                    </select>
                  </div>
                  <div>
                    <label for="membership">Choose a type of training:</label>
                    <select
                      className="ml-2 border p-1 rounded-md"
                      name="training_type"
                      value={this.state.training_type}
                      id="training_type"
                      onChange={this.traning_type_handler}
                    >
                      <option value="1">Welding</option>
                      <option value="2">Care Giving ID</option>
                      <option value="3">Painting</option>
                      <option value="4">Tourism</option>
                    </select>
                  </div>
                </div>

                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    type="text"
                    name="name"
                    placeholder="Enter Your full name"
                    value={this.state.name}
                    onChange={this.handleinput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={this.state.phone}
                    onChange={this.handleinput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>

                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={this.state.address}
                    onChange={this.handleinput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    type="text"
                    name="document_number"
                    placeholder="Enter your document number"
                    value={this.state.document_number}
                    onChange={this.handleinput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="wrap-input100 validate-input">
                  <label className="mb-2">Enter your date of birth</label>
                  <input
                    class="input100"
                    type="date"
                    name="dob"
                    placeholder="Date of birth"
                    value={this.state.dob}
                    onChange={this.handleinput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    type="text"
                    name="fathers_name"
                    placeholder="Enter your fathers name"
                    value={this.state.fathers_name}
                    onChange={this.handleinput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="wrap-input100 validate-input">
                  <input
                    class="input100"
                    type="text"
                    name="voucher_id"
                    placeholder="Enter your voucher Id"
                    value={this.state.voucher_id}
                    onChange={this.handleinput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="wrap-input100 validate-input">
                  <label for="input100" className="mb-2">
                    Attach Your document here
                  </label>
                  <input
                    class="input100 "
                    type="file"
                    name="doc_image"
                    placeholder=""
                    onChange={this.handlechange}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="wrap-input100 validate-input">
                  <label for="input100" className="mb-2">
                    Attach Your profile image
                  </label>

                  <input
                    class="input100"
                    type="file"
                    name="profile_image"
                    placeholder=""
                    onChange={this.handlechange2}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                </div>
                <div class="container-login100-form-btn">
                  <button
                    visibility={this.state.isDisabled}
                    class="login100-form-btn"
                    type="submit"
                    onClick={this.submitform}
                  >
                    Join for traning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
