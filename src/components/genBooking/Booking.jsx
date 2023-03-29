import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import BookTo from "./BookTo";
import BookingHeading from "./BookingHeading";
import ThankYou from "./ThankYou";
import poodal from '../../images/poodal.png';


const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FCEDDA',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 84,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const PdfDocument = ({ item }) => {
    return (
        <Document>
            <Page size="A5" style={styles.page} >
            <Image style={styles.logo} src={poodal} />
                <BookingHeading title={'Welcome to Poodals Pet Services, here is your appointment '} />
                <BookTo item={item} />
                <ThankYou />
            </Page>
        </Document>
    );
}

export default PdfDocument;