import React from "react";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";
class Layout extends React.Component {
  render() {
    return (
      <div className="haha">
        <Nav></Nav>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>
    );
  }
}

export default Layout;
