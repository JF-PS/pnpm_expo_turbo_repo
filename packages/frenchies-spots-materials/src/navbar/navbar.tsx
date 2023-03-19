import React from "react";
import { HStack } from "../stack";
import { CornerBar } from "../corner-bar";

export const Navbar = () => {
  return (
    <CornerBar mode="bottom" color={"purple"}>
      {/* <HStack justify="between" style={{ height: 60 }}></HStack> */}
    </CornerBar>
  );
};
