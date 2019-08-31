import React, { Component } from 'react';
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
} from "mdbreact";
import './login_css.css';
import axios from 'axios';
class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            confirm:"",
            email:"",
            fullname:"",
            roleId:0,
        }
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onchangeSelect = (e) =>{
        this.setState({
            roleId : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let data = {
            "id" : 0,
            "username" : this.state.username,
            "password" : this.state.password,
            "fullname" : this.state.fullname,
            "email" : this.state.email,
            "userRoles" : [
                {
                    "userId" : 0,
                    "roleId" : this.state.roleId
                }
            ]
        }

        axios.post("https://localhost:44306/api/AppUser/register",data)
            .then(res =>{
                if(res.status === 200){
                    window.location = "/";
                }
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div id="classicformpage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>

                                <MDBCol md="6" xl="5" className="mb-4">
                                    <MDBAnimation type="fadeInRight" delay=".3s">
                                        <MDBCard id="classic-card">
                                            <MDBCardBody className="white-text">
                                                <h3 className="text-center">
                                                    <MDBIcon icon="book" /> Register
                                            </h3>
                                                <hr className="hr-light" />
                                                <form className="needs-validation"
                                                onSubmit = {this.onSubmit}
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
                                                    <MDBInput
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        type="password"
                                                        label="Confirm password"
                                                        icon="lock"
                                                        name="confirm"
                                                        onChange={this.onchange}
                                                        required
                                                    />
                                                    <MDBInput
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        label="FullName"
                                                        icon="user"
                                                        type="text"
                                                        name="fullname"
                                                        onChange={this.onchange}
                                                        required
                                                    /><MDBInput
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        label="Email"
                                                        icon="mail-bulk"
                                                        name="email"
                                                        type="email"
                                                        onChange={this.onchange}
                                                        required
                                                    />

                                                    <select className="browser-default custom-select" onChange = {this.onchangeSelect}>
                                                        <option>Choose your role</option>
                                                        <option value="3">Buyer</option>
                                                        <option value="2">Owner</option>
                                                    </select>
                                                    <div className="text-center mt-4 black-text">
                                                        <MDBBtn color="indigo" type="submit" >Submit</MDBBtn>
                                                        <MDBBtn color="indigo" href="/">Login</MDBBtn>
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

export default register;