import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 15,
  },
  reportTitle: {
    color: "#2B3467",
    fontSize: 15,
    textAlign: "center",
    
  },
});

const ThankYou = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>
      Thank you for choosing Poodals for all your pet needs. We appreciate your
      trust and confidence in our services.Your satisfaction is our top
      priority, and we hope to continue serving you and your pet for years to
      come
    </Text>
  </View>
);

export default ThankYou;
