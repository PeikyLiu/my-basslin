import React from "react";
import { NavLink } from "react-router-dom";
import routeConfig from "../../routes/config.ts";
import "./index.less";
class Nav extends React.Component {
  sliderRef = React.createRef();
  onMouseEnter = (e: any) => {
    this.sliderRef.current.style.left = e.target.offsetLeft + "px";
  };
  render() {
    return (
      <div className="nav">
        {routeConfig.menus.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.key}
              onMouseEnter={this.onMouseEnter}
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
