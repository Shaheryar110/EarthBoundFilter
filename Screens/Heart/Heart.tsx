import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import RadioButton from '../../Components/Shared/RadioButton/RadioButton';
import Block from '../../Components/App/Block';
type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
    state: string;
    propertyType: string;
    fields: { roomSize: string; size: string; quantity: string }[];
    reminderPeriod: string;
};
const Heart = () => {
    const [selected, setSelected] = useState('HOUSE - RENT');
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    const states = [
        { label: 'Alabama', value: 'AL' },
        { label: 'Alaska', value: 'AK' },
        { label: 'Arizona', value: 'AZ' },
        { label: 'Arkansas', value: 'AR' },
        { label: 'California', value: 'CA' },
        { label: 'Colorado', value: 'CO' },
        { label: 'Connecticut', value: 'CT' },
        { label: 'Delaware', value: 'DE' },
        { label: 'Florida', value: 'FL' },
        { label: 'Georgia', value: 'GA' },
        { label: 'Hawaii', value: 'HI' },
        { label: 'Idaho', value: 'ID' },
        { label: 'Illinois', value: 'IL' },
        { label: 'Indiana', value: 'IN' },
        { label: 'Iowa', value: 'IA' },
        { label: 'Kansas', value: 'KS' },
        { label: 'Kentucky', value: 'KY' },
        { label: 'Louisiana', value: 'LA' },
        { label: 'Maine', value: 'ME' },
        { label: 'Maryland', value: 'MD' },
        { label: 'Massachusetts', value: 'MA' },
        { label: 'Michigan', value: 'MI' },
        { label: 'Minnesota', value: 'MN' },
        { label: 'Mississippi', value: 'MS' },
        { label: 'Missouri', value: 'MO' },
        { label: 'Montana', value: 'MT' },
        { label: 'Nebraska', value: 'NE' },
        { label: 'Nevada', value: 'NV' },
        { label: 'New Hampshire', value: 'NH' },
        { label: 'New Jersey', value: 'NJ' },
        { label: 'New Mexico', value: 'NM' },
        { label: 'New York', value: 'NY' },
        { label: 'North Carolina', value: 'NC' },
        { label: 'North Dakota', value: 'ND' },
        { label: 'Ohio', value: 'OH' },
        { label: 'Oklahoma', value: 'OK' },
        { label: 'Oregon', value: 'OR' },
        { label: 'Pennsylvania', value: 'PA' },
        { label: 'Rhode Island', value: 'RI' },
        { label: 'South Carolina', value: 'SC' },
        { label: 'South Dakota', value: 'SD' },
        { label: 'Tennessee', value: 'TN' },
        { label: 'Texas', value: 'TX' },
        { label: 'Utah', value: 'UT' },
        { label: 'Vermont', value: 'VT' },
        { label: 'Virginia', value: 'VA' },
        { label: 'Washington', value: 'WA' },
        { label: 'West Virginia', value: 'WV' },
        { label: 'Wisconsin', value: 'WI' },
        { label: 'Wyoming', value: 'WY' }
    ];
    const months = [
        '3 months',
        '6 months',
        '9 months',
        '12 months',
    ]
    const roomSize = [
        'Living Room',
        'Bed Room',
        'Bath Room',
        'Laundry Room',
        'Kitchen'
    ];
    const sizes = [
        '20x20x1',
        '20x20x5',
        '20x20x15',
        '12x20x15',
        '16x20x15',
        'Custom'
    ]
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        zipCode: '',
        state: '',
        propertyType: '',
        fields: [],
        reminderPeriod: ''
    });

    const handleInputChange = (field: keyof FormValues, value: string) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    const handleAddField = () => {
        setFormValues((prevValues) => ({
            ...prevValues,
            fields: [
                ...prevValues.fields,
                { roomSize: '', size: '', quantity: '' },
            ],
        }));
    };

    const handleFieldChange = (
        index: number,
        field: keyof FormValues['fields'][number],
        value: string
    ) => {
        const updatedFields = [...formValues.fields];
        updatedFields[index][field] = value;
        setFormValues((prevValues) => ({
            ...prevValues,
            fields: updatedFields,
        }));
    };
    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
        handleInputChange('reminderPeriod', month);
    };

    const handleCheckout = () => {
        console.log('Form Values:', formValues);
        // You can also add your checkout logic here
    };

    return (
        <Block
            paddingBottom={Platform.OS === 'ios' ? 200 : 130}
            source={require('../../assets/img/back.png')}>
            <View style={styles.main}>
                <Text style={styles.mainHeading}>Contact Form</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter First Name..."
                    onChangeText={(value) => handleInputChange('firstName', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Last Name..."
                    onChangeText={(value) => handleInputChange('lastName', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email..."
                    onChangeText={(value) => handleInputChange('email', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Phone Number..."
                    onChangeText={(value) => handleInputChange('phoneNumber', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Address..."
                    onChangeText={(value) => handleInputChange('address', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter City..."
                    onChangeText={(value) => handleInputChange('city', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Zip Code..."
                    onChangeText={(value) => handleInputChange('zipCode', value)}
                />
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: 'grey',
                        borderRadius: 10,
                        marginBottom: 10,
                    }}
                >
                    <Picker
                        selectedValue={formValues.state}
                        onValueChange={(value) =>
                            handleInputChange('state', value.toString())
                        }
                        style={{
                            borderColor: 'grey',
                            borderRadius: 10,
                            borderWidth: 1,
                        }}
                    >
                        {states.map((state) => (
                            <Picker.Item
                                key={state.value}
                                label={state.label}
                                value={state.value}
                            />
                        ))}
                    </Picker>
                </View>
                <Text
                    style={[styles.mainHeading, { color: 'black', fontSize: 18 }]}
                >
                    Type of property
                </Text>
                <RadioButton
                    selected={formValues.propertyType === 'HOUSE - RENT'}
                    onPress={() =>
                        handleInputChange('propertyType', 'HOUSE - RENT')
                    }
                    label="HOUSE - RENT"
                />
                <RadioButton
                    selected={formValues.propertyType === 'HOUSE - OWN'}
                    onPress={() => handleInputChange('propertyType', 'HOUSE - OWN')}
                    label="HOUSE - OWN"
                />
                <RadioButton
                    selected={formValues.propertyType === 'APARTMENT - RENT'}
                    onPress={() =>
                        handleInputChange('propertyType', 'APARTMENT - RENT')
                    }
                    label="APARTMENT - RENT"
                />
                <RadioButton
                    selected={formValues.propertyType === 'APARTMENT - OWN'}
                    onPress={() =>
                        handleInputChange('propertyType', 'APARTMENT - OWN')
                    }
                    label="APARTMENT - OWN"
                />
                <RadioButton
                    selected={formValues.propertyType === 'CONDO - RENT'}
                    onPress={() => handleInputChange('propertyType', 'CONDO - RENT')}
                    label="CONDO - RENT"
                />
                <RadioButton
                    selected={formValues.propertyType === 'CONDO - OWN'}
                    onPress={() => handleInputChange('propertyType', 'CONDO - OWN')}
                    label="CONDO - OWN"
                />
                <RadioButton
                    selected={formValues.propertyType === 'OFFICE'}
                    onPress={() => handleInputChange('propertyType', 'OFFICE')}
                    label="OFFICE"
                />
                {formValues.fields.map((field, index) => (
                    <View key={index}>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: 'grey',
                                borderRadius: 10,
                                marginBottom: 10,
                            }}
                        >
                            <Picker
                                selectedValue={field.roomSize}
                                onValueChange={(value) =>
                                    handleFieldChange(
                                        index,
                                        'roomSize',
                                        value.toString()
                                    )
                                }
                                style={{
                                    borderColor: 'grey',
                                    borderRadius: 10,
                                    borderWidth: 1,
                                }}
                            >
                                {roomSize.map((size) => (
                                    <Picker.Item
                                        key={size}
                                        label={size}
                                        value={size}
                                    />
                                ))}
                            </Picker>
                        </View>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: 'grey',
                                borderRadius: 10,
                                marginBottom: 10,
                            }}
                        >
                            <Picker
                                selectedValue={field.size}
                                onValueChange={(value) =>
                                    handleFieldChange(
                                        index,
                                        'size',
                                        value.toString()
                                    )
                                }
                                style={{
                                    borderColor: 'grey',
                                    borderRadius: 10,
                                    borderWidth: 1,
                                }}
                            >
                                {sizes.map((size) => (
                                    <Picker.Item
                                        key={size}
                                        label={size}
                                        value={size}
                                    />
                                ))}
                            </Picker>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Quantity..."
                            onChangeText={(value) =>
                                handleFieldChange(index, 'quantity', value)
                            }
                        />
                        <View
                            style={{
                                width: '100%',
                                height: 1,
                                marginVertical: 15,
                                backgroundColor: 'grey',
                            }}
                        ></View>
                    </View>
                ))}
                <TouchableOpacity
                    style={[
                        styles.cartBtn,
                        { backgroundColor: '#011E4F', elevation: 5, marginBottom: 10 },
                    ]}
                    onPress={handleAddField}
                >
                    <Text style={[styles.texts, { fontSize: 16, color: 'white' }]}>
                        ADD
                    </Text>
                </TouchableOpacity>
                <Text style={styles.mainHeading}>Reminder</Text>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.grid}
                    showsHorizontalScrollIndicator={false}
                >
                    {months.map((data, index) => (
                        <Pressable key={index} style={[styles.sizeBox, { backgroundColor: data === selectedMonth ? "#54A433" : "white", elevation: 4 }]} onPress={() => { handleMonthSelect(data) }} >
                            <Text
                                style={[styles.texts, { fontSize: 13, color: data === selectedMonth ? "white" : 'black', }]}
                            >
                                {data}
                            </Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <TouchableOpacity
                    onPress={handleCheckout}
                    style={[styles.cartBtn, { elevation: 5, marginBottom: 10 }]}
                >
                    <Text style={[styles.texts, { fontSize: 16, color: 'white' }]}>
                        CHECKOUT
                    </Text>
                </TouchableOpacity>
            </View>
        </Block>
    )
}

export default Heart

const styles = StyleSheet.create({
    main: {
        padding: 20,
        position: "relative",
        paddingBottom: 150
    },
    mainHeading: {
        color: "#54A433",
        fontFamily: "Poppins-Medium",
        fontSize: 24,
    },
    input: {
        height: 45,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "grey",
        borderRadius: 10,
        fontFamily: "Poppins-Medium",
    },
    cartBtn: {
        borderRadius: 15,
        backgroundColor: "#54A433",
        fontFamily: "Poppins-Medium",
        paddingHorizontal: 25,
        paddingVertical: 14,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
        , elevation: 5
    },
    texts: {
        color: "grey",
        fontFamily: "Poppins-Medium",
        fontSize: 16,
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
})