import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigate from "./Navigate";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigate />
      </ApplicationProvider>
    </I18nextProvider>
  );
}
// a7527eca9b38392785db78d01d2a9e5184404920db0cd6467c83ea05b1b8ad7e
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
