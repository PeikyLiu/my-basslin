import React from "react";
import Nav from "../Nav";
import Pages from "../../pages";
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Pages>123</Pages>
      </div>
    );
  }
}

export default Layout;
