import React from "react";
import { NavLink } from "react-router-dom";
import routeConfig from "@/routes/config.tsx";

import "./index.less";
class Nav extends React.Component {
  sliderRef = React.createRef();
  onMouseEnter = (e: any) => {
    this.sliderRef.current.style.left = e.target.offsetLeft + "px";
    this.sliderRef.current.style.width = e.target.clientWidth + "px";
  };
  render() {
    const filterRoutes: [] = routeConfig[0].children?.filter(
      (item) => !item.index
    );
    return (
      <div className="nav">
        {filterRoutes.map((item, index) => {
          console.log(item, 123);
          return (
            <NavLink
              key={index}
              to={item.path}
              onClick={this.onMouseEnter}
              className={({ isActive }) =>
                [isActive ? "active" : "", "nav-item"].join(" ")
              }
            >
              {item.title}
            </NavLink>
          );
        })}
        <div className="slider-item" ref={this.sliderRef}></div>
      </div>
    );
  }
}

export default Nav;
