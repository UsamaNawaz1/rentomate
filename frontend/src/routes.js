/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./screens/Dashboard";
import UserProfile from "./screens/UserProfile.js";
import TableList from "./screens/TableList.js";
import Notifications from "./screens/Notifications.js";
import SubmitNewProperty from "./screens/submitNewProperty.js";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "My Account",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/submitNewProperty",
    name: "Submit New Property",
    icon: "nc-icon nc-simple-add",
    component: SubmitNewProperty,
    layout: "/admin",
  },
  
  
];

export default dashboardRoutes;
