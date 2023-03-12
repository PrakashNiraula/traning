import React, { Component } from "react";
import { Navigate, Redirect } from "react-router-dom";
import Logout from "./Logout";
export default class success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gotologin: false,
    };
  }

  submitform = async () => {
    this.setState({
      gotologin: true,
    });
  };
  render() {
    if (this.state.gotologin == true) {
      return <Navigate to="/" replace={true} />;
    } else {
      return (
        <div>
          <Logout />
          <div class="limiter">
            <div class="container-login100">
              <div class="wrap-login100">
                <span class="login100-form-title">Ace Skill Traning</span>
                <span class="login100-form-title">Ilam Municipality,Ilam</span>

                <span class="login100-form-title">
                  Your data has been successfully submitted.
                </span>

                <span class="login100-form-title">
                  <img
                    src="http://140.238.204.76:3001/uploads/myfile-1676203418095.jpg"
                    width="200px"
                    height="200px"
                  />
                </span>

                <div class="container-login100-form-btn">
                  <button
                    class="login100-form-btn"
                    type="submit"
                    onClick={this.submitform}
                  >
                    Submit Another Form
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
