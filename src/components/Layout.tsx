import React, { FC } from "react";
import { Container } from "@mui/material";

const Layout: FC = ({ children }) => {
  return <Container maxWidth={"md"}>{children}</Container>;
};

export default Layout;
