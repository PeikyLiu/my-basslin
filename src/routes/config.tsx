import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Diary from "@/pages/diary/Diary";
import Homepage from "@/pages/homepage/Homepage";
import Layout from "@/components/Layout";
import Login from "@/pages/login/Login";
interface myRouteObject extends RouteObject {
  title?: string;
}
const routes: myRouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Homepage />,
        title: "主页",
      },
      {
        path: "diary",
        element: <Diary />,
        title: "日记",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    title: "登录",
  },
];

export default routes;
