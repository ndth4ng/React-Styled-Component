import React from "react";
import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { currentUser } = useSelector((state) => state.user);

  return;
  // <Route
  //   {...restOfProps}
  //   render={(props) =>
  //     currentUser ? <Component {...props} /> : <Redirect to="/login" />
  //   }
  // />
}

export default ProtectedRoute;
