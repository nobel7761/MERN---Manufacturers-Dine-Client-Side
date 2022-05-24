import React from "react";
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
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="my-review" element={<AddReview></AddReview>} />
          <Route path="my-orders" element={<MyOrders></MyOrders>} />
        </Route>

        <Route
          path="/tools/:id"
          element={<PurchaseProduct></PurchaseProduct>}
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
