import React from "react";
import { type LayoutChildren } from "@nearbyevcharging.com/types";

const Register = () => {
  return <div>Register</div>;
};
Register.layout = ({ children }: LayoutChildren) => (
  <div className="min-w-screen min-h-screen">{children}</div>
);

export default Register;
