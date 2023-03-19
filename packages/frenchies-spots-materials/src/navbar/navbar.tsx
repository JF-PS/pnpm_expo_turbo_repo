import React from "react";
import { HStack } from "../stack";
import { styles } from "./navbar-styles";
import { NavbarButton } from "./navbar-button";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  const { ...other } = props;

  return (
    <HStack style={styles.navbar} justify="around" mv={15}>
      <NavbarButton name="search" color="white" isSelected={true} />
      <NavbarButton name="search" color="white" />
      <NavbarButton name="search" color="white" />
      <NavbarButton name="search" color="white" />
      <NavbarButton name="search" color="white" />
    </HStack>
  );
};
