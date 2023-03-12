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
      // selected_docimage: "",
      // selected_profileimage: "",
      doc_image: null,
      profile_image: null,
      submitted: false,
      isDisabled: false,
      errors: {},
    };
  }
  validateFormData = () => {
    const errors = {};
    if (!this.state.doc_image) {
      errors.doc_image = "Document Image is required";
    } else if (this.state.image.name.endsWith(".png")) {
      errors.doc_image = "Document Image must not be in a .png file";
    }
    if (!this.state.profile_image) {
      errors.profile_image = "Profile Image is required";
    } else if (this.state.image.name.endsWith(".png")) {
      errors.profile_image = "Profile Image must not be in a .png file";
    }
    if (!this.state.voucher_id) {
      errors.voucher_id = "Voucher ID is required";
    }
    if (!this.state.fathers_name) {
      errors.fathers_name = "Father's Name is required";
    }
    if (!this.state.address) {
      errors.address = "Address is required";
    }
    if (!this.state.dob) {
      errors.dob = "Date of birth is required";
    }
    if (!this.state.document_number) {
      errors.document_number = "Documnent Number is required";
    }
    if (!this.state.document_type) {
      errors.document_type = "Documnent Type is required";
    }
    if (!this.state.name) {
      errors.name = "Name is required";
    }
    if (!this.state.phone) {
      errors.phone = "Phone Number is required";
    }

    if (!this.state.training_type) {
      errors.training_type = "Training Type is required";
    }
    if (!this.state.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = "Invalid email format";
    }
    return errors;
  };

  handlechange = (e) => {
    if (e.target.name === "doc_image") {
      this.setState({
        doc_image: e.target.files[0],
      });
    }
  };

  handlechange2 = (e) => {
    if (e.target.name === "profile_image") {
      this.setState({
        profile_image: e.target.files[0],
      });
    }
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
    const errors = this.validateFormData();
    if (Object.keys(errors).length != 0) {
      this.setState({ errors });
    } else {
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
      var res2 = await axios.post(
        "http://140.238.204.76:3001/upload",
        formData2
      );
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
    }
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
                  {this.state.errors.name && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.name}
                    </span>
                  )}
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
                  {this.state.errors.phone && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.phone}
                    </span>
                  )}
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
                  {this.state.errors.address && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.address}
                    </span>
                  )}
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
                  {this.state.errors.document_number && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.document_number}
                    </span>
                  )}
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
                  {this.state.errors.dob && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.dob}
                    </span>
                  )}
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
                  {this.state.errors.fathers_name && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.fathers_name}
                    </span>
                  )}
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
                  {this.state.errors.voucher_id && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.voucher_id}
                    </span>
                  )}
                </div>
                <div class="wrap-input100 validate-input">
                  <label for="input100" className="mb-2">
                    Attach Your document here
                  </label>
                  <input
                    class="input100 "
                    type="file"
                    name="doc_image"
                    accept=".png"
                    onChange={this.handlechange}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                  {this.state.errors.doc_image && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.doc_image}
                    </span>
                  )}
                </div>
                <div class="wrap-input100 validate-input">
                  <label for="input100" className="mb-2">
                    Attach Your profile image
                  </label>

                  <input
                    class="input100"
                    type="file"
                    name="profile_image"
                    accept=".png"
                    onChange={this.handlechange2}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100"></span>
                  {this.state.errors.profile_image && (
                    <span className="text-start flex w-full ml-4 font-semibold text-red-600">
                      {this.state.errors.profile_image}
                    </span>
                  )}
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
