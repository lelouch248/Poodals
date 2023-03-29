import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
    color:"#654062",
    justifyContent: "flex-start",
  },
  bookTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
  headerContainer2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlign:"left",
    width:350,
    color:"#586B8F"
  },
});

const BookTo = ({ item }) => (
  <View>
    <View style={styles.headerContainer}>
      <Text style={styles.bookTo}>Booking To:</Text>
      <Text>
        Booking Name:
        {item.fname} {item.lname}
      </Text>
      <Text>
        Email ID:
        {item.email}
      </Text>
      <Text>
        Phone Number:
        {item.phone}
      </Text>
      <Text>
        Date:
        {(item.date = moment().format("LL"))}
      </Text>
    </View>
    <View style={styles.headerContainer2}>
      <Text style={styles.bookTo}>Booking Details:</Text>
    </View>
    <View style={styles.headerContainer2}>
      <Text>
        Pet Name:
        {item.petname}
      </Text>
      </View>
      <View style={styles.headerContainer2}>
      <Text>
        Pet Type:
        {item.pettype}
      </Text>
      </View>
      <View style={styles.headerContainer2}>
      <Text>
        Service Type:
        {item.service}
      </Text>
    </View>
  </View>
);

export default BookTo;
