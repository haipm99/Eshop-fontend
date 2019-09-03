import React, { Component } from 'react';
//react-router
//
import SideNav from './sideNav';
// import TopNav from './topNav';
import ShopOwner from './shopOwner';
class main_owner extends Component {

    render() {
        return (
            <div>
                <SideNav />
                <ShopOwner/>
            </div>
        );
    }
}

export default main_owner;