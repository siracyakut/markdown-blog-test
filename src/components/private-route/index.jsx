import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/" />
      </SignedOut>
    </>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
