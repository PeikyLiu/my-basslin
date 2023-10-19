import React from "react";
import { Route } from "react-router-dom";
import routesConfig, { IFMenu } from "./config.ts";
import AllComponents from "../components";

const createMenu = (item: IFMenu) => {
  const component = item.component && AllComponents[item.component];
  return (
    <Route key={item.key} path={item.key}>
      {component}
    </Route>
  );
};

export default createMenu;
