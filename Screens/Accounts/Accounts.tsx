import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '../../redux/reduxStore';
import { firebase } from '@react-native-firebase/auth';
import { Toast } from 'react-native-toast-notifications';
import { userActions } from '../../redux/user/slice';
import ImagePicker from 'react-native-image-crop-picker';
import { requestCameraPermission } from '../../Utils/CameraPersmission';
import { uploadImage } from '../../Services/StorageServices/StorageServices';
import { updateUser } from '../../Services/Auth';
import { AccountsProps } from '../../types/NavigationTypes';
import Block from '../../Components/App/Block';
import Feather from 'react-native-vector-icons/Feather';
import PrimaryTextFeild from '../../Components/Shared/TextFeild/PrimaryTextFeild';
import CameraModal from '../../Utils/CameraModal';

const Accounts: React.FC<AccountsProps> = ({ navigation }) => {
    const dispatch = useDispatch<StoreDispatch>();
    const userData = useSelector((state: StoreState) => state?.user);
    const initial = {
        fullName: userData?.fullName,
        // phone: userData.phone,
        email: userData?.email,
        photo: '',
    };
    const [user, setUser] = useState(initial);
    const [modalVisible, setModalVisible] = useState(false);
    const handleChange = (name: string, val: string) => {
        setUser(prev => ({
            ...prev,
            [name]: val,
        }));
    };

    const openCamera = async () => {
        const test = await requestCameraPermission();

        if (test) {
            ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
            }).then(image => {
                // setContactData(prev => ({
                //   ...prev,
                //   ['image']: image.path,
                // }));
                console.log(image);
                uploadImage(image.path).then((url) => {
                    console.log(url);
                    // setUser(prev => ({
                    //   ...prev,
                    //   ['photo']: `${url}`,
                    // }));
                    firebase.auth().currentUser?.updateProfile({ photoURL: url });
                    Toast.show('Picture Updated', {
                        type: 'success',
                    });
                    navigation.goBack();
                })
                setModalVisible(false);
            });
        }
    };
    const openGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            uploadImage(image.path).then((url) => {
                console.log(url);
                firebase.auth().currentUser?.updateProfile({ photoURL: url });
                Toast.show('Picture Updated', {
                    type: 'success',
                });

                navigation.goBack();
            })
        });
    };

    const handleUpadate = () => {
        updateUser(userData.uid, user)
            .then(() => {
                firebase
                    .auth()
                    .currentUser?.updateProfile({
                        displayName: user?.fullName,
                        photoURL: user?.photo,
                    })
                    .then(() => {
                        firebase
                            .auth()
                            .currentUser?.updateEmail(user?.email)
                            .then(() => {
                                dispatch(
                                    userActions.setUser({
                                        email: user?.email,
                                        fullName: user?.fullName || '',
                                    }),
                                );
                                console.log('name,photo,email update');
                            })
                            .catch(err => console.log('nothing Update'));
                    });
                navigation.goBack();
            })
            .catch(err => { });
    };
    return (
        <Block
            source={require('../../assets/img/back.png')}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 90,
                paddingHorizontal: 20,
            }}
            paddingBottom={100}>
            <View style={{ position: 'relative' }}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: firebase.auth().currentUser?.photoURL || 'https://firebasestorage.googleapis.com/v0/b/earth-bound-bd7e2.appspot.com/o/images.jfif?alt=media&token=aa0a578e-9ed1-4efd-8ff1-d2330cdcbf5e',
                    }}
                />
                <Pressable style={styles.editBox} onPress={() => setModalVisible(true)}>
                    <Feather
                        name="edit"
                        style={{
                            fontSize: 18,
                        }}
                    />
                </Pressable>
            </View>

            <PrimaryTextFeild placeHolder='Full Name' value={user?.fullName} onChangeText={text => handleChange('fullName', text)} />
            <PrimaryTextFeild editable={false} placeHolder='Email' value={user?.email} onChangeText={text => handleChange('email', text)} />


            <View style={{ paddingTop: 10 }}>
                {/* <Button
            onPress={() => {
              handleUpadate();
            }}
            color={config?.tokens?.colors?.primary0}
            bg={config?.tokens?.colors?.primaryM}
            text={'Update'}
          /> */}
                <Pressable style={styles.SignUpButton} onPress={() => {
                    handleUpadate();
                }} >
                    <Text style={styles.textBtn1} >UPDATE</Text>
                </Pressable>
            </View>
            <CameraModal
                openCamera={() => openCamera()}
                openGallery={() => openGallery()}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </Block>
    )
}

export default Accounts


const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        marginVertical: 20,
        borderRadius: 50,
    },
    editBox: {
        position: 'absolute',
        top: 90,
        right: -10,
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SignUpButton: {
        // marginVertical: 25,
        width: 283,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: "#fff",
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 7,
        backgroundColor: "#53A332",
        opacity: 0.95,
    },
    textBtn1: {
        fontFamily: "Poppins-Medium",
        color: "white",
        fontSize: 17,
        fontWeight: "700"
    },
});