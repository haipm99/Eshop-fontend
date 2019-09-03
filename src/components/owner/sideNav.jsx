import React, { Component } from 'react';
// import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class sideNav extends Component {
    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <h2>Eshop</h2>
                </a>
                <MDBListGroup className="list-group-flush">
                    <NavLink exact={true} to="/owner" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="chart-pie" className="mr-3" />
                            Dashboard
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/owner/manageShop" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3" />
                            Manage Shop
                    </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/owner/tables" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="table" className="mr-3" />
                            Create Shop
                    </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/owner/maps" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="map" className="mr-3" />
                            Maps
                    </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/owner/404" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="exclamation" className="mr-3" />
                            404
                    </MDBListGroupItem>
                    </NavLink>
                </MDBListGroup>
                
            </div>
        );
    }
}

export default sideNav;