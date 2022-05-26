import React, { useState } from "react";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import Footer from "./Shared/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/NotFound/NotFound";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import AddNewProduct from "./Pages/Dashboard/AddNewProduct/AddNewProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import RequireAdmin from "./Authentication/RequireAdmin/RequireAdmin";
import Payment from "./Pages/Dashboard/Payment";

const MainComponent = () => {


  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/my-portfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route path="my-review" element={<AddReview></AddReview>} />
          <Route path="my-orders" element={<MyOrders></MyOrders>} />

          <Route
            path="manage-all-orders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          />
          <Route
            path="add-new-product"
            element={
              <RequireAdmin>
                <AddNewProduct></AddNewProduct>
              </RequireAdmin>
            }
          />
          <Route
            path="make-new-admin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          />
          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          />
        </Route>

        <Route
          path="/tools/:id"
          element={
            <RequireAuth>
              <PurchaseProduct></PurchaseProduct>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default MainComponent;
