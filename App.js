import { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CalorieCheck from "./src/screens/CalorieCheck";

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#2b197f" }} />
      <SafeAreaView style={styles.wrapper}>
        <CalorieCheck />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#2b197f",
  },
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
