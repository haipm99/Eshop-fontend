import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn } from 'mdbreact';
import { MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
//

import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Swal from 'sweetalert2'
class shopOwner extends Component {
    state = {
        modal14: false,
        userId: 0,
        shops: [],
        name: "",
        phone: "",
        desc: "",
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async () => {
        await this.getUser();
        this.getShop();

    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    getUser = () => {
        var token = localStorage.getItem('token');
        var decoded = jwtDecode(token);
        this.setState({
            userId: decoded.unique_name
        })
    }

    getShop = async () => {

        const config = {
            method: 'get',
            url: `https://localhost:44306/api/owner/getShop/${this.state.userId}`,
            headers: {
                Authorization: "bearer " + localStorage.getItem("token"),
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        }
        axios(config)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        shops: res.data
                    });
                }
            })
    }

    addShop = async () => {
        let data = {
            "id": 0,
            "name": this.state.name,
            "userId": this.state.userId,
            "description": this.state.desc,
            "phone": this.state.phone,
            "status": true
        };
        var config = {
            method: 'post',
            url: "https://localhost:44306/api/owner/createShop",
            headers: {
                Authorization: "bearer " + localStorage.getItem("token"),
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            data: data
        }
        axios(config).then(async (res) => {

            if (res.status === 200) {
                this.getShop();
            }
        })
    }

    render() {
        const elem = this.state.shops !== null ? this.state.shops.map((item, index) => {
            return (
                <MDBCol xl="3" md="6" className="mb-3" style={{ marginRight: "50px" }}>
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>
                                {item.desc}
                            </MDBCardText>
                            <MDBBtn href="#">{item.status ? "Active" : "Closed"}</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            );
        }) : null;
        return (
            <div style={{ left: "19%", width: "80%", position: "absolute" }}>
                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>Manage Shop</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                        <MDBBtn color="primary" onClick={this.toggle(14)}>Create Shop</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <form onSubmit={this.addShop}>
                    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                        <MDBModalBody>
                            <p className="h4 text-center mb-4">Sign up</p>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Shop Name
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                name="name"
                                onChange={this.onchange}
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterEmailEx"
                                className="form-control"
                                name="phone"
                                onChange={this.onchange}
                            />
                            <br />
                            <label
                                htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text"
                            >
                                Description (Sell about)
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterConfirmEx"
                                className="form-control"
                                name="desc"
                                onChange={this.onchange}
                            />
                            <br />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                            <MDBBtn color="primary" type="submit">create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </form>
                <MDBRow className="mb-4">
                    {elem}
                </MDBRow>
            </div>
        );
    }
}

export default shopOwner;