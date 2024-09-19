import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartCard = ({ name, url }) => {
    let uri = url;
    return (
        <View style={styles.cartBox} >
            <Image source={{ uri }} style={styles.image} />
            <View>
                <Text style={[styles.filters, { marginBottom: 5 }]} >{name}</Text>
                <Text style={styles.texts} >Size : 20x20xl</Text>
                <Text style={styles.texts} >Price : <Text style={styles.span} >$10.00</Text></Text>
            </View>
        </View>
    )
}

const Menu: React.FC = () => {

    return (
        <View style={styles.main} >
            <Text style={styles.mainHeading} >Products</Text>
            <CartCard name={'Flat HVAC Filter'} url={'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2019.png?alt=media&token=908534d2-f010-4c5a-8de7-50eb326bcc6f'} />
            <CartCard name={'Vent Filter'} url={'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2017.png?alt=media&token=f45773b3-60e9-4205-9855-4b08f339abb6'} />
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    main: {
        padding: 20,
        position: "relative",

    },
    cartBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginVertical: 12
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        objectFit: "cover"
    },
    filters: {
        color: "black",
        fontFamily: "Poppins-Medium",
        fontSize: 20,

    },
    span: {
        color: "#54A433",
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
    },
    texts: {
        color: "grey",
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        textAlign: "justify"
    },
    mainHeading: {
        color: "#54A433",
        fontFamily: "Poppins-Bold",
        fontSize: 24,
    },
})