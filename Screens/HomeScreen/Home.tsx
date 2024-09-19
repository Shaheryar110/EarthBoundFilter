import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Shared/Header/Header'
import BannerCarousel from '../../Components/Home/BannerCarousel'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { HomeScreenProps } from '../../types/NavigationTypes'
import Block from '../../Components/App/Block'

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
    const data1 = [
        'https://firebasestorage.googleapis.com/v0/b/earth-bound-bd7e2.appspot.com/o/s1.jpg?alt=media&token=318744f0-5b52-49f9-8521-d227b324fed3',
        'https://firebasestorage.googleapis.com/v0/b/earth-bound-bd7e2.appspot.com/o/s2.jpg?alt=media&token=1cff83cb-4fed-4b4c-8354-f9ff862a1a9a',
        'https://firebasestorage.googleapis.com/v0/b/earth-bound-bd7e2.appspot.com/o/s3.jpg?alt=media&token=e22f0be0-a1b5-4874-bdb1-f801079e7f57',
        'https://firebasestorage.googleapis.com/v0/b/earth-bound-bd7e2.appspot.com/o/s5.jpg?alt=media&token=fce84686-4c8e-4e7c-b126-c760c5621ba7'
    ];
    const data = [
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2018.png?alt=media&token=16500f54-7f16-4539-b7bc-6b4e8a16ce8e',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2019.png?alt=media&token=908534d2-f010-4c5a-8de7-50eb326bcc6f',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2017.png?alt=media&token=f45773b3-60e9-4205-9855-4b08f339abb6',
        'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2017.png?alt=media&token=f45773b3-60e9-4205-9855-4b08f339abb6',
    ];
    const cardText = [
        'Flat HVAC Filter',
        'Vent Filter For Home'
    ];
    const handleSelectCategory = (item: string) => {

        if (item === 'Flat HVAC Filter') {
            navigation.navigate('FlatHvacFilter')
        } else {
            navigation.navigate('VentFilter')
        }

    }
    return (
        <Block
            paddingBottom={Platform.OS === 'ios' ? 200 : 130}
            source={require('../../assets/img/back.png')}>
            <View style={{ position: "relative" }} >
                <View style={styles.homeBox} >
                    <Text style={styles.toptext} >Welcome To</Text>
                    <Text style={[styles.heading, { marginTop: -10 }]}>Earth Bound Filter</Text>
                    <Text style={[styles.toptext, { marginTop: -15, fontSize: 15, color: "grey", textTransform: "uppercase" }]} >No one will say no to clean air</Text>
                </View>
                <Text style={[styles.ctHead, { textAlign: "right", width: "100%", fontSize: 13, paddingRight: 20, marginTop: -20, marginBottom: 10 }]} >Patent Pending And Approved</Text>
                <BannerCarousel carouselData={data1} />
                <View style={styles.homeBox} >
                    <View style={styles.catBox} >
                        <Text style={styles.ctHead} >Categories</Text>
                    </View>
                    <View style={[styles.catBox, { gap: 10, paddingHorizontal: 10, paddingVertical: 1 }]} >
                        {cardText.map((data, index) => {
                            return (
                                <Pressable style={styles.catgeroySingle} key={index} onPress={() => handleSelectCategory(data)}  >
                                    <View style={styles.iconBox} >
                                        <MaterialCommunityIcons name='checkbox-multiple-marked-circle-outline' style={{ color: "black", fontSize: 20 }} />
                                    </View>
                                    <Text style={styles.textCard} >{data}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                    <Text style={[styles.ctHead, { padding: 10, marginTop: 15 }]} >True H13 HEPA Filter</Text>
                    <Text style={[styles.toptext, { paddingHorizontal: 10, opacity: 0.7, fontSize: 15, textAlign: "justify" }]} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

                    <Text style={[styles.ctHead, { padding: 10, marginTop: 15 }]} >Gallery</Text>
                    <View style={styles.gridBox} >
                        {data.map((data, index) => {
                            return (
                                <Image key={index} style={{ objectFit: "cover", borderRadius: 10, width: '45%', height: 150 }} source={{
                                    uri: `${data}`,
                                }} />
                            )
                        })}
                    </View>
                </View>
            </View>
        </Block>
    )
}

export default Home

const styles = StyleSheet.create({
    homeBox: {
        paddingHorizontal: 15,
        paddingBottom: 10,
        marginVertical: 20
    },
    toptext: {
        fontSize: 20,
        color: "black",
        fontFamily: "Poppins-Medium",
    },
    heading: {
        fontSize: 30,
        fontFamily: "Poppins-Medium",
        color: "#54A433",
    },
    catBox:
    {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15
    },
    ctHead: {
        color: "black",
        fontSize: 25,
        fontFamily: "Poppins-SemiBold",
    },
    seeAll: {
        fontSize: 17,
        color: "#324B74",
        fontFamily: "Poppins-Regular",
    },
    catgeroySingle: {
        padding: 10,
        borderRadius: 15,
        flexDirection: "row",
        width: "50%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
        backgroundColor: "#53A332",
        elevation: 3,
        height: 60
    },
    iconBox: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,

    },
    textCard: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
        fontFamily: "Poppins-Regular",
        flex: 1, // Allow the text to take up the remaining space
        flexWrap: "wrap",
    },
    gridBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingBottom: 10,
        flex: 1, // Allow the text to take up the remaining space
        flexWrap: "wrap",
        width: "100%"
    }
})