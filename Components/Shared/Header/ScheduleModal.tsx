import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform } from 'react-native';
import React, { useState } from 'react';
import Entypo from "react-native-vector-icons/Entypo"
import PrimaryTextFeild from '../TextFeild/PrimaryTextFeild';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Block from '../../App/Block';
import { Toast } from 'react-native-toast-notifications';
import { checkScheduleByDate, SubmitSchedule } from '../../../Services/ScheduleService';




const ScheduleModal: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        selectedDay: '',
        selectedTimeSlot: ''
    });


    const timeSlotsT = [
        "09:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 01:00 PM",
        "01:00 PM - 02:00 PM",
        "02:00 PM - 03:00 PM",
        "03:00 PM - 04:00 PM",
        "04:00 PM - 05:00 PM",
        "05:00 PM - 06:00 PM"
    ];
    const [timeSlots, setTimeSlots] = useState(timeSlotsT)



    const handleInputChange = (key, value) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const handleDayPress = async (day) => {
        setFormData(prevState => ({
            ...prevState,
            selectedDay: day.dateString
        }));
        let resp = await checkScheduleByDate(day.dateString);
        console.log(resp, 'resp');
        if (resp) {
            setTimeSlots(() => (
                timeSlotsT.filter((item) => {
                    return !resp.timeSlots?.includes(item); // Exclude items from timeSlotsT that are in resp
                })
            ));
        } else {
            setTimeSlots(timeSlotsT)
        }


    };

    const handleTimeSlotPress = (timeSlot) => {
        setFormData(prevState => ({
            ...prevState,
            selectedTimeSlot: timeSlot
        }));
    };

    const handleSchedule = async () => {
        console.log(formData, 'formdata');
        if (!formData.selectedTimeSlot || !formData.selectedDay) {
            Toast.show("Please Select Date and Time", {
                type: 'error',
                placement: 'bottom',
                duration: 4000,
                animationType: 'slide-in',
            });
            return;
        }
        try {

            await SubmitSchedule(formData);
            Toast.show('Schedule Made Successfully', {
                type: 'success',
                placement: 'bottom',
                duration: 4000,
                animationType: 'slide-in',
            });

        } catch (error) {
            Toast.show('Something Went Wrong', {
                type: 'error',
                placement: 'bottom',
                duration: 4000,
                animationType: 'slide-in',
            })
        }
    }
    return (
        <Block
            paddingBottom={Platform.OS === 'ios' ? 200 : 130}
            source={require('../../../assets/img/back.png')}>
            <View style={styles.centeredView}>

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>

                        <Text style={styles.heading} >Schedule Appointment</Text>
                        <View style={{ paddingTop: 10, gap: 10, marginLeft: -10 }} >

                            <PrimaryTextFeild
                                onChangeText={(value) => handleInputChange('fullName', value)}
                                placeHolder='Your Full Name'
                                value={formData.fullName}
                            />
                            <PrimaryTextFeild
                                onChangeText={(value) => handleInputChange('email', value)}
                                placeHolder='Your Email Address'
                                value={formData.email}
                            />
                            <PrimaryTextFeild
                                onChangeText={(value) => handleInputChange('phone', value)}
                                placeHolder='Your Phone Number'
                                value={formData.phone}
                            />
                            <PrimaryTextFeild
                                onChangeText={(value) => handleInputChange('message', value)}
                                placeHolder='Your Message'
                                value={formData.message}
                            />
                            <Calendar
                                onDayPress={handleDayPress}
                                markedDates={{
                                    [formData.selectedDay]: { selected: true, marked: true, selectedColor: '#53A332' }
                                }}
                            />
                            <Text style={styles.heading} >Available Timings</Text>

                            <View style={styles.slot} >
                                {timeSlots.length > 0 ? timeSlots?.map((data, index) => (
                                    <Pressable key={index} style={[styles.badge, { backgroundColor: data === formData.selectedTimeSlot ? 'grey' : "#53A332" }]} onPress={() => handleTimeSlotPress(data)}>

                                        <Text style={{ color: "white" }} >{data}</Text>
                                    </Pressable>
                                )) : <Text style={styles.heading} >No Timings Available</Text>}
                            </View>

                            <Pressable style={styles.btn} onPress={handleSchedule} >
                                <Text style={{ color: "white", fontSize: 17 }} >Scedule Now</Text>
                            </Pressable>



                        </View>
                    </View>
                </View>

            </View>
        </Block>
    )
}

export default ScheduleModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    heading: {
        fontSize: 20, color: "black", fontFamily: "Poppins-Medium"
    },
    modalView: {
        margin: 20,
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: "relative",

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#53A332',
    },
    buttonClose: {
        backgroundColor: '#53A332',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    iconBox: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#53A332",
        alignItems: "center", justifyContent: "center",
        position: "absolute",
        top: 10,
        right: 10,
        elevation: 3
    },
    btn: {
        paddingVertical: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: "#53A332",
        justifyContent: "center",
        alignItems: "center",
        elevation: 4
    },
    slot: {
        width: "100%",
        paddingVertical: 15,
        flexDirection: "row",
        gap: 5,
        flexWrap: "wrap",
    },
    badge: {
        backgroundColor: "#53A332",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        color: "white",
        elevation: 3,
        fontSize: 12,
        fontFamily: "Poppins-Medium"
    }
});