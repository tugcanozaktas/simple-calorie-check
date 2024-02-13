import { useEffect, useState } from "react";
import { APP_ID, APP_KEY } from "@env";
console.log(APP_ID, APP_KEY);
export const useCalories = () => {
  const [calories, setCalories] = useState();
  const [error, setError] = useState(null);

  const fetchCaloriesData = async (search) => {
    try {
      const res = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=logging&ingr=${search}`
      );
      const data = await res.json();
      setCalories(data);
    } catch (error) {
      setError("Could not fetch nutritions.");
    }
  };

  return { calories, error, fetchCaloriesData };
};
