import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";
import Categoryitem from "../../companents/Categoryitem";

function index() {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <Categoryitem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default index;
