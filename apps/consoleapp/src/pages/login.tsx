import React from "react";
import { type LayoutChildren } from "@nearbyevcharging.com/types";

const Login = () => {
  return <div>Login</div>;
};

Login.layout = ({ children }: LayoutChildren) => (
  <div className="min-w-screen min-h-screen">{children}</div>
);

export default Login;
