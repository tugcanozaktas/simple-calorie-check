import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useCalories } from "../hooks/useCalories";
import ListItem from "../components/ListItem";

const CalorieCheck = () => {
  const [search, setSearch] = useState("");
  const { calories, error, fetchCaloriesData } = useCalories();
  const handleSearch = () => {
    fetchCaloriesData(search);
    console.log(calories);
  };

  const renderItem = ({ item }) => (
    <ListItem label={item.label} quantity={item.quantity} unit={item.unit} />
  );

  const {
    container,
    searchStyle,
    searchButton,
    caloriesStyle,
    caloriesWrapper,
  } = styles;

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.searchStyle}
          placeholder="Search..."
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
          title=""
        >
          <Feather name="search" size={35} color="white" />
        </TouchableOpacity>
      </View>

      {calories && calories.totalWeight !== 0 ? (
        <View style={styles.weight}>
          <Text>{`For ${calories.totalWeight} grams`}</Text>
          <FlatList
            data={Object.values(calories.totalNutrients)}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </View>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1d1154",
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    width: "90%",
  },
  searchStyle: {
    flex: 1,
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  searchButton: {
    marginLeft: 10,
  },
  caloriesStyle: {
    fontSize: 25,
  },
  caloriesWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#2ed91c",
  },
  weight: {
    fontSize: 25,
  },
});

export default CalorieCheck;
