import { StyleSheet } from "react-native";

export const styles = (color: string, mode: "top" | "bottom") =>
  StyleSheet.create({
    container: {
      height: mode === "bottom" ? "100%" : "auto",
      width: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    cornersContainer: {
      width: "100%",
    },
    navbarContainer: {
      width: "100%",
    },
    navbarContent: {
      backgroundColor: color,
    },
  });
