import React from "react";
import { Route, Routes } from "react-router-dom";
import config from "./config";
import routeConfig from "@/routes/config.tsx";
class Pages extends React.Component {
  render() {
    return (
      <Routes>
        {routeConfig.menus.map((item, index) => {
          const component = item.component && config[item.component];
          console.log(typeof component);
          return (
            <Route key={index} path={item.key} Component={component}></Route>
          );
        })}
      </Routes>
    );
  }
}

export default Pages;
