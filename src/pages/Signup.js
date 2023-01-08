import React, { Component } from "react";
import NavbarComp from "../components/NavbarComp";
import axios from "axios";
export class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      posision: "",
      errors: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.name,
      posision: this.state.posision,
    };
    console.log(newUserData);
    axios
      .post(
        "https://us-central1-kt-nation.cloudfunctions.net/api/signup",
        newUserData
      )
      .then((res) => {
        console.log(res.data);
        // this.props.history.push("/");
      })
      .catch((res) => {
        console.log(res.errors);
      });
    // this.props.signupUser(newUserData, this.props.history);
  };

  render() {
    return (
      <div>
        <NavbarComp />
        <section class=''>
          <div class='px-4 py-5 px-md-5 text-center text-lg-start'>
            <div class='container'>
              <div class='row gx-lg-5 align-items-center'>
                <div class='col-lg-6 mb-5 mb-lg-0'>
                  <h1 class='my-5 display-3 fw-bold ls-tight'>
                    You are where, <br />
                    <span class='text-primary'>You need the most</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                  </p>
                </div>

                <div class='col-lg-6 mb-5 mb-lg-0'>
                  <div class='card'>
                    <div class='card-body py-5 px-md-5'>
                      <form onSubmit={this.handleSubmit}>
                        <div class='form-outline mb-4'>
                          <input
                            type='text'
                            id='name'
                            class='form-control'
                            // value={this.state.name}
                            onChange={(event) => {
                              this.state.name = event.target.value;
                            }}
                          />
                          <label class='form-label' for='form3Example2'>
                            Name
                          </label>
                        </div>
                        <div class='form-outline mb-4'>
                          <input
                            type='text'
                            id='posision'
                            class='form-control'
                            //  value={this.state.posision}
                            onChange={(event) => {
                              this.state.posision = event.target.value;
                            }}
                          />
                          <label class='form-label' for='form3Example2'>
                            You worked as
                          </label>
                        </div>

                        <div class='form-outline mb-4'>
                          <input
                            type='email'
                            id='email'
                            class='form-control'
                            // value={this.state.email}
                            onChange={(event) => {
                              this.state.email = event.target.value;
                            }}
                          />
                          <label class='form-label' for='form3Example3'>
                            Email address
                          </label>
                        </div>

                        <div class='row'>
                          <div class='col-md-6 mb-4'>
                            <div class='form-outline'>
                              <input
                                type='password'
                                id='password'
                                class='form-control'
                                //  value={this.state.password}
                                onChange={(event) => {
                                  this.state.password = event.target.value;
                                }}
                              />
                              <label class='form-label' for='form3Example4'>
                                Password
                              </label>
                            </div>
                          </div>
                          <div class='col-md-6 mb-4'>
                            <div class='form-outline'>
                              <input
                                type='password'
                                id='confirmPassword'
                                class='form-control'
                                //  value={this.state.password}
                                onChange={(event) => {
                                  this.state.confirmPassword =
                                    event.target.value;
                                }}
                              />
                              <label class='form-label' for='form3Example4'>
                                Confirm Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          type='submit'
                          class='btn btn-primary btn-block mb-4'
                        >
                          Sign up
                        </button>

                        {/* <div class='text-center'>
                          <p>or sign up with:</p>
                          <button
                            type='button'
                            class='btn btn-link btn-floating mx-1'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </button>

                          <button
                            type='button'
                            class='btn btn-link btn-floating mx-1'
                          >
                            <i class='fab fa-google'></i>
                          </button>

                          <button
                            type='button'
                            class='btn btn-link btn-floating mx-1'
                          >
                            <i class='fab fa-twitter'></i>
                          </button>

                          <button
                            type='button'
                            class='btn btn-link btn-floating mx-1'
                          >
                            <i class='fab fa-github'></i>
                          </button>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default signup;
