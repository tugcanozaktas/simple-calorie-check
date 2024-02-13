import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const { label, quantity, unit } = props;
  console.log(props);
  return (
    <View style={styles.item}>
      <View style={styles.vitWrapper}>
        <Feather name={"circle"} size={15} color="black" />
        <Text style={styles.vitName}>{label}</Text>
      </View>
      <Text>
        {Number(quantity.toPrecision(3))} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "indianred",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
  vitWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  vitName: {
    fontWeight: "bold",
  },
});

export default ListItem;
