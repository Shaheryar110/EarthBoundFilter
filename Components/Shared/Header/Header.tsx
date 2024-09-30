import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeaderProps} from '../../../types/NavigationTypes';
import {useSelector} from 'react-redux';
import ScheduleModal from './ScheduleModal';

const Header: React.FC<HeaderProps> = ({navigation}) => {
  const cart = useSelector((state: any) => state.cart);
  const [open, setOpen] = useState(false);

  const changeState = () => {
    setOpen(false);
  };

  return (
    <>
      <View style={styles.headerBox}>
        {/* <MaterialIcons name='segment' style={{ fontSize: 30, color: "#042350" }} /> */}
        <Image
          source={require('../../../assets/img/logo.png')} // Adjust the path to your image
          style={{
            height: 50,
            width: 50,
            objectFit: 'contain',
          }}
        />
        <Image
          source={require('../../../assets/img/tags.png')} // Adjust the path to your image
          style={{
            height: 50,
            width: 250,
            objectFit: 'contain',
            position: 'absolute',
            top: 0,
            left: 66,
          }}
        />
        {/* <Text style={{ color: "#48c3f2", fontFamily: "GreatVibes-Regular" }} >Who Would Say No to Clean Air</Text> */}
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Pressable
            style={styles.notification}
            onPress={() => navigation.navigate('cart')}>
            <View style={styles.number}>
              <Text style={{fontWeight: '600'}}>{cart?.items?.length}</Text>
            </View>
            <AntDesign
              name="shoppingcart"
              style={{fontSize: 25, color: 'white'}}
            />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    position: 'relative',
  },
  notification: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#54A433',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#53A332',
    backgroundColor: '#53A332',
    elevation: 4,
  },
  number: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    top: -10,
  },
});
