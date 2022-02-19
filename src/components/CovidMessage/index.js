import React from "react";
import { View,Text } from "react-native";
import styles from "./styles";

const CovidMessage = (props) => {
    return (
        <View style={styles.container} >
        <Text style={styles.title}>Quick Tips</Text>
        <Text style={styles.text}>* Dont overcrowd.</Text>
         <Text style={styles.text}>* Keep them hydrated.</Text>
        <Text style={styles.learnMore}>Learn More from wikihow →</Text>
        </View>
    );
};
export default CovidMessage;