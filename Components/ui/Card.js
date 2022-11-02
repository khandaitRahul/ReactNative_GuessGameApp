import React from 'react'
import { Dimensions, StyleSheet, View, } from 'react-native';

import Colors from '../../Constants/ColorConstants';

const Card = ({ children }) => {
    return (
        <View style={styles.card}>{children}</View>
    )
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginHorizontal: 25,
        marginTop: deviceWidth < 380 ? 20 : 40,
        backgroundColor: Colors.maroon700,
        borderRadius: 15,
        // for android
        elevation: 7,
        //   for ios
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
})