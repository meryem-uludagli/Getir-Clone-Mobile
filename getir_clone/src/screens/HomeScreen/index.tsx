import React from "react";
import { ScrollView } from "react-native";
import HeaderMain from "../../companents/HeaderMain";
import BannerCarousel from "../../companents/BannerCarousel";
import MainCategories from "../../companents/MainCategories";

function index() {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}

export default index;
