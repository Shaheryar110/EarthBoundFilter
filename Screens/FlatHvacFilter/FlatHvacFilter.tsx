import { Dimensions, FlatList, Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BannerCarousel from '../../Components/Home/BannerCarousel'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Block from '../../Components/App/Block';
const { width } = Dimensions.get('window');
const numColumns = 4;
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cart/slice';
import { useSelector } from 'react-redux';

const FlatHvacFilter = () => {
    const cart = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(undefined);
    const sizes = [
        '20x20xl',
        '20x25xl',
        '20x25x5',
        '16x25xl',
        '14x25xl',
        '12x245xl',
        '14x24xl',
    ];
    const images = [
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p5.png?alt=media&token=459dc59a-9da3-4526-8762-7a15f5d14bd5',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p3.png?alt=media&token=c4ad7c78-3e08-40d6-96a0-2934ecc91ed4',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p2.png?alt=media&token=7c4b0408-d07e-474e-8b2b-908cf146ff93',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p1.png?alt=media&token=3fee34a2-8795-424d-841b-ab87cd0133d4',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p1.png?alt=media&token=3fee34a2-8795-424d-841b-ab87cd0133d4',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p1.png?alt=media&token=3fee34a2-8795-424d-841b-ab87cd0133d4',
    ]
    const data = [
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2019.png?alt=media&token=908534d2-f010-4c5a-8de7-50eb326bcc6f',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2018.png?alt=media&token=16500f54-7f16-4539-b7bc-6b4e8a16ce8e',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2017.png?alt=media&token=f45773b3-60e9-4205-9855-4b08f339abb6',
    ];

    const itemWidth = (width - (numColumns + 1) * 10) / numColumns;
    const handleAddToCart = () => {
        const cartItem = {
            name: "Flat HVAC Filter",
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/p5.png?alt=media&token=459dc59a-9da3-4526-8762-7a15f5d14bd5',
            productId: '1', // Replace with your actual product ID
            price: 10.00, // Static price
            size: selectedSize,
            quantity,
            rating, // Optional rating
        };
        console.log(cartItem, 'cartItem');

        dispatch(cartActions.addItemToCart(cartItem));

    };
    useEffect(() => {
        console.log('Cart state has changed:', cart);
    }, [cart]);
    return (
        <Block
            paddingBottom={Platform.OS === 'ios' ? 200 : 130}
            source={require('../../assets/img/back.png')}>
            <View style={styles.main}>
                <Text style={styles.mainHeading}>Flat HVAC Filters</Text>
                <BannerCarousel carouselData={data} />
                <ScrollView horizontal contentContainerStyle={styles.grid} showsHorizontalScrollIndicator={false}>
                    {images.map((uri, index) => (
                        <View key={index} style={[styles.itemContainer, { width: itemWidth, height: itemWidth }]}>
                            <Image source={{ uri }} style={styles.image} />
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.margins}>
                    <View style={styles.spacebtw}>
                        <Text style={styles.filters}>Flat HVAC Filters</Text>
                        <AirbnbRating
                            size={20}

                            ratingContainerStyle={{ alignSelf: "flex-start", display: "flex", justifyContent: "flex-start" }}
                            starContainerStyle={{ width: "100%", alignSelf: "flex-start", marginTop: 9, display: "flex", justifyContent: "flex-start" }}
                            count={5}
                            showRating={false}
                            onFinishRating={(value) => setRating(value)}
                        />
                    </View>
                    <Text style={styles.texts}>Price: <Text style={styles.span}>$10.00</Text></Text>
                    <Text style={styles.texts}>Availability: In Stock</Text>
                    <Text style={styles.texts}>First select product then select sizes, sizes are associated with products.</Text>
                    <Text style={[styles.filters, { marginTop: 5 }]}>Select Sizes</Text>
                    <ScrollView horizontal contentContainerStyle={styles.grid} showsHorizontalScrollIndicator={false}>
                        {sizes.map((size, index) => (
                            <Pressable key={index} style={[styles.sizeBox, { backgroundColor: selectedSize === size ? "#54A433" : "white", elevation: 3 }]} onPress={() => setSelectedSize(size)}>
                                <Text style={[styles.texts, { fontSize: 13, color: selectedSize === size ? "white" : "black" }]}>{size}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                    <View>
                        <Text style={[styles.filters, { marginTop: 5 }]}>Quantity</Text>
                        <View style={styles.flex}>
                            <View style={styles.quanitty}>
                                <Pressable style={[styles.sizeBox, { paddingHorizontal: 20 }]} onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                                    <Text style={[styles.texts, { fontSize: 13, color: "black" }]}>-</Text>
                                </Pressable>
                                <Text style={[styles.texts, { fontSize: 13, color: "black" }]}>{quantity}</Text>
                                <Pressable style={[styles.sizeBox, { paddingHorizontal: 20 }]} onPress={() => setQuantity(quantity + 1)}>
                                    <Text style={[styles.texts, { fontSize: 13, color: "black" }]}>+</Text>
                                </Pressable>
                            </View>
                            <Pressable style={styles.cartBtn} onPress={handleAddToCart}>
                                <Text style={[styles.texts, { fontSize: 16, color: "white" }]}>Add to cart</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Block>
    )
}

export default FlatHvacFilter

const styles = StyleSheet.create({
    mainHeading: {
        color: "#54A433",
        fontFamily: "Poppins-Regular",
        fontSize: 24,
        fontWeight: "700",
    },
    filters: {
        color: "black",
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        fontWeight: "700"

    },
    main: {
        padding: 20,
        position: "relative",
        marginBottom: 100

    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: "scroll",
    },
    itemContainer: {
        margin: 0, // Adjust spacing as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    margins: {
        marginVertical: 10
    },
    spacebtw: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    texts: {
        color: "grey",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
    },
    span: {
        color: "#54A433",
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        fontWeight: "700"
    },
    sizeBox: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        margin: 5
    },
    quanitty: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1
    },
    cartBtn: {
        borderRadius: 15,
        backgroundColor: "#54A433",
        paddingHorizontal: 25,
        paddingVertical: 14,
        width: "auto"
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    }
})