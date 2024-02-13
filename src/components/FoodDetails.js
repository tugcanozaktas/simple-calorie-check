import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const FoodDetails = ({ iconName, text, value, wrapperStyle, textStyle, totalNutrients }) => {
  return (
    <View style={wrapperStyle}>
      <View>
        <MaterialCommunityIcons name={iconName} size={24} color="black" />
        <Text style={textStyle}>{text}</Text>
      </View>
      <Text style={textStyle}>{value}</Text>
    </View>
  );
};

export default FoodDetails;
