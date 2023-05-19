import { Text } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Women from "../Pages/Women";
import Men from "../Pages/Men";
import Jeans from "../Pages/Jeans";
import New from "../Pages/New";
import Sale from "../Pages/Sale";
import Suits from "../Pages/Suits";
import ProductDetails from "../Pages/ProductDetails";
import Community from "../Pages/Community";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import CartPage from "../Pages/CartPage";
import NotFound from "../Components/NotFound";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/new" element={<New />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/suits/:user_id" element={<ProductDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="/labels" element={<Text>Welcome to Labels Page</Text>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
