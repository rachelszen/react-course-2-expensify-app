import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? (
    <div>
      <Header />
      {children}
    </div>
    ) : (
      <Navigate to="/" />
    );
  };
   
  const mapStateToProps = (state) => {
    return {
      isAuthenticated: !!state.auth.uid,
    };
  };
   
  export default connect(mapStateToProps)(PrivateRoute);

  