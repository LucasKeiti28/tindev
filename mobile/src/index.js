import React from "react";
// import { View, Text, StyleSheet } from "react-native";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

import Routes from "./routes";
// import { Container } from './styles';

// div = View, p,span,h1...= Text.
export default function App() {
  return <Routes />;
}
