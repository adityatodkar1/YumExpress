import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantsMenu from "./src/components/RestaurantsMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";



// const Footer = () => {
//   return <div>Footer</div>;
// };

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/' ,
    element:<AppLayout/>, 
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      }, 
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      },
      {
        path:'/restaurant/:id',
        element:<RestaurantsMenu/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

