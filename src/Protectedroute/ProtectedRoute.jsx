import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../pages/Navbar";

function ProtectedRoute({ children }) {
  return (
    <div>
     <Navbar/>
      <div>{children}</div>
    </div>
  );
}

export default ProtectedRoute;
