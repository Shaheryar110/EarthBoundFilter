import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/cart/slice';

interface CartCardProps {
    data: {
        size?: string;
        price?: string;
        quantity: number;
        imageUrl: string;
        name?: string;
        productId: string;
    };
}

const CartCard: React.FC<CartCardProps> = ({ data }) => {
    const dispatch = useDispatch();
    const { productId, size, price, quantity, imageUrl, name } = data;

    const handleQuantityChange = (change: number) => {
        dispatch(cartActions.updateQuantity({ productId, quantity: quantity + change }));
    };

    let uri = imageUrl || 'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p5.png?alt=media&token=459dc59a-9da3-4526-8762-7a15f5d14bd5'
    return (
        <View style={styles.cartBox} >
            <Image source={{ uri }} style={styles.image} />
            <View>
                <Text style={[styles.filters, { marginBottom: 5 }]} >{name}</Text>
                <Text style={styles.texts} >Size : {size}</Text>
                <Text style={styles.texts} >Price : <Text style={styles.span} >${price}</Text></Text>
                <View style={stylesC.quantityContainer}>
                    <Pressable onPress={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                        <Text style={stylesC.quantityButton}>-</Text>
                    </Pressable>
                    <Text style={stylesC.quantity}>{quantity}</Text>
                    <Pressable onPress={() => handleQuantityChange(1)}>
                        <Text style={stylesC.quantityButton}>+</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}
const stylesC = StyleSheet.create({
    cartBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginVertical: 12,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    filters: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
    },
    span: {
        color: '#54A433',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    },
    texts: {
        color: 'grey',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        textAlign: 'justify',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    quantityButton: {
        fontSize: 20,
        color: '#54A433',
        marginHorizontal: 10,
    },
    quantity: {
        fontSize: 16,
        width: 30,
        textAlign: 'center',
    },
});


const Cart = () => {
    const months = [
        '3 months',
        '6 months',
        '9 months',
        '12 months',
    ]
    const cart = useSelector((state: any) => state.cart.items);
    useEffect(() => {
        console.log(cart, 'cart');
    }, [cart])
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.main}>
                <Text style={styles.mainHeading}>Reminder</Text>
                <Text style={styles.texts}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Text>
                <ScrollView horizontal contentContainerStyle={styles.grid} showsHorizontalScrollIndicator={false}>
                    {months.map((month, index) => (
                        <View key={index} style={styles.sizeBox}>
                            <Text style={[styles.texts, { fontSize: 13, color: 'black' }]}>{month}</Text>
                        </View>
                    ))}
                </ScrollView>
                <TextInput style={styles.input} placeholder="Add Your Email For Reminder" />
                <View style={styles.cartBtn}>
                    <Text style={[styles.texts, { fontSize: 16, color: 'white' }]}>Submit</Text>
                </View>
                <Text style={[styles.mainHeading, { marginVertical: 10 }]}>Cart</Text>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <CartCard data={item} key={index} />
                    ))
                ) : (
                    <Text>Your cart is empty</Text>
                )}
                <View style={[styles.cartBtn, { backgroundColor: '#011E4F', elevation: 5 }]}>
                    <Text style={[styles.texts, { fontSize: 16, color: 'white' }]}>Pay Now</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Cart

const styles = StyleSheet.create({
    main: {
        padding: 20,
        position: "relative",

    },
    mainHeading: {
        color: "#54A433",
        fontFamily: "Poppins-Bold",
        fontSize: 24,
    },
    texts: {
        color: "grey",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        textAlign: "justify"
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: "scroll",
        marginVertical: 15
    },
    sizeBox: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        margin: 5,

    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "grey",
        borderRadius: 10,
        fontFamily: "Poppins-Regular",
    },
    cartBtn: {
        borderRadius: 15,
        backgroundColor: "#54A433",
        paddingHorizontal: 25,
        paddingVertical: 14,
        width: "auto",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
        , elevation: 5
    },
    cartBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginVertical: 12
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    filters: {
        color: "black",
        fontFamily: "Poppins-Regular",
        fontSize: 20,

    },
    span: {
        color: "#54A433",
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
    },
})