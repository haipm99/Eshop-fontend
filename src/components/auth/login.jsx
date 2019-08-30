import React, { Component } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBAnimation,
    MDBAlert
} from "mdbreact";
import './login_css.css';
//import axios
import axios from 'axios';
// jwt decode
import jwtDecode from 'jwt-decode';
class login extends Component {
    state = {
        collapseID: "",
        username: "",
        password: "",
        role: "",
        error: false
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        if (this.state.username !== "" && this.state.password !== "") {
            this.loginFunc();
        }
    };

    loginFunc = () => {
        var data = { username: this.state.username, password: this.state.password };
        axios.post("https://localhost:44306/api/AppUser", data)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.access_token);
                    var decode = jwtDecode(localStorage.getItem('token'));
                    console.log(decode);
                    switch (decode.role) {
                        case "admin":
                            window.location = "/admin";
                            break;
                        case "Shop owner":
                            window.location = "/owner";
                            break;
                        case "buyer":
                            window.location = "/buyer";
                            break;
                        default:
                            window.location = "/";
                            break;
                    }
                }
            }).catch(err => {
                console.log(err);
                this.setState({
                    error : true
                })
            });
    }

    render() {
        return (
            <div id="classicformpage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                                {
                                    this.state.error ? <MDBAlert color="danger" dismiss onClosed>
                                     Wrong usernam or password
                                </MDBAlert> : null
                                }
                            <MDBRow>
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                                >
                                    <h1 className="h1-responsive font-weight-bold">
                                        Welcome to Eshop
                      </h1>
                                    <hr className="hr-light" />
                                    <MDBBtn outline color="white">
                                        Join with Us !
                      </MDBBtn>
                                </MDBAnimation>

                                <MDBCol md="6" xl="5" className="mb-4">
                                    <MDBAnimation type="fadeInRight" delay=".3s">
                                        <MDBCard id="classic-card">
                                            <MDBCardBody className="white-text">
                                                <h3 className="text-center">
                                                    <MDBIcon icon="book" /> Login
                                                </h3>
                                                <hr className="hr-light" />
                                                <form className="needs-validation"
                                                    onSubmit={this.submitHandler}
                                                    noValidate>
                                                    <MDBInput
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        label="Username"
                                                        icon="user"
                                                        name="username"
                                                        onChange={this.onchange}
                                                        required
                                                    />
                                                    <MDBInput
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        label="Your password"
                                                        icon="lock"
                                                        type="password"
                                                        name="password"
                                                        onChange={this.onchange}
                                                        required
                                                    />
                                                    <div className="text-center mt-4 black-text">
                                                        <MDBBtn color="indigo" type="submit" >Login</MDBBtn>
                                                        <MDBBtn color="indigo">Register</MDBBtn>
                                                    </div>
                                                </form>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default login;