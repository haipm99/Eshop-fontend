import React, { Component } from 'react';

import { MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn } from 'mdbreact';
import { MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact'
import axios from 'axios';
//nav
//
class shop_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopID: 0,
            products: [],
            modal14: false,
            code: "",
            productName: "",
            desc: "",
            price: 0,
            stock: 0,
        }
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getId = () => {
        this.setState({
            shopID: this.props.match.params.id
        })
    }
    componentDidMount = () => {
        this.getId();
        this.getProductOfShop();
    }

    getProductOfShop = () => {
        var token = localStorage.getItem("token");
        const config = {
            method: 'get',
            url: `https://localhost:44306/api/owner/products/${this.state.shopID}`,
            headers: {
                Authorization: "bearer " + token,
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        }
        axios(config).then(res => {
            console.log(res);
        })
    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    addProduct = () =>{
        var product = {

        }
    }

    render() {
        return (

            <div>
                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>Shop : </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                        <MDBBtn color="primary" onClick={this.toggle(14)}>Create Product</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <form onSubmit={this.addShop}>
                    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                        <MDBModalBody>
                            <p className="h4 text-center mb-4">Add Product</p>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                name="productName"
                                onChange={this.onchange}
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Code
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterEmailEx"
                                className="form-control"
                                name="code"
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
                            <label
                                htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text"
                            >
                                Price
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterConfirmEx"
                                className="form-control"
                                name="price"
                                onChange={this.onchange}
                            />
                            <br />
                            <label
                                htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text"
                            >
                                Stock
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterConfirmEx"
                                className="form-control"
                                name="stock"
                                onChange={this.onchange}
                            />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                            <MDBBtn color="primary" type="submit">create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </form>
            </div>
        );
    }
}

export default shop_detail;