import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: '#3778C2',
        letterSpacing: 2,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const BookingTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

export default BookingTitle;