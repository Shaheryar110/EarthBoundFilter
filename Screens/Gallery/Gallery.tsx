import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Block from '../../Components/App/Block';
import BannerCarousel from '../../Components/Home/BannerCarousel';

const Gallery = () => {
  const data1 = [
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/earth1.png?alt=media&token=7352eef1-ef07-4b80-a51f-7ce1ac144496',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/earth2.png?alt=media&token=d0addf00-80d2-4913-b651-9ec3df48bee0',
    'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2018.png?alt=media&token=16500f54-7f16-4539-b7bc-6b4e8a16ce8e',
    'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2019.png?alt=media&token=908534d2-f010-4c5a-8de7-50eb326bcc6f',
    'https://firebasestorage.googleapis.com/v0/b/examtutorservice.appspot.com/o/images%2FMask%20Group%2017.png?alt=media&token=f45773b3-60e9-4205-9855-4b08f339abb6',
  ];
  const data2 = [
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/e1.png?alt=media&token=147ddbf1-e2cb-4e72-ae46-38bf2ce2cd6e',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/e2.png?alt=media&token=2fddc027-7b80-46ea-8d74-664c0aa7699a',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/e3.jpg?alt=media&token=78f78e38-39ae-4215-bad6-5a61fb9df8cb',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/e4.jpg?alt=media&token=1b38cd0e-48f4-495c-bb08-366481be01f3',
  ];
  const data3 = [
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/ea1.jpg?alt=media&token=aa244775-7ecd-4295-952b-9724c9d46e55',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/ea2.jpg?alt=media&token=074325d7-4854-43bb-9614-ac50bc72a73e',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/ea4.jpg?alt=media&token=d347232a-ea6c-41c6-83d2-629b5a2fa581',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/ea5.jpg?alt=media&token=79b8e55a-9a6c-4113-a625-e6027416e2b3',
    'https://firebasestorage.googleapis.com/v0/b/drive-time-6e9f8.appspot.com/o/ea6.jpg?alt=media&token=a770fe3b-937d-4185-930b-d4a9e42e6400',
  ];

  return (
    <Block
      paddingBottom={Platform.OS === 'ios' ? 200 : 130}
      source={require('../../assets/img/back.png')}>
      <View style={styles.main}>
        <Text style={styles.text}>Gallery</Text>
        <View style={styles.flex}>
          {data1.map((item, index) => {
            return (
              <>
                <Image
                  source={{uri: item}}
                  key={index}
                  style={{
                    objectFit: 'cover',
                    borderRadius: 10,
                    width: index === 0 ? '92%' : '45%',
                    height: 150,
                  }}
                />
              </>
            );
          })}
        </View>
        <Text style={styles.text}>Filters</Text>
        <BannerCarousel carouselData={data2} itemsToShow={2} height="70%" />
        <Text style={styles.text}>Featured</Text>
        <View style={styles.flex}>
          {data3.map((item, index) => {
            return (
              <>
                <Image
                  source={{uri: item}}
                  key={index}
                  style={{
                    objectFit: 'cover',
                    borderRadius: 10,
                    width: index === 0 ? '92%' : '45%',
                    height: 150,
                  }}
                />
              </>
            );
          })}
        </View>
      </View>
    </Block>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    display: 'flex',
    gap: 20,
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
  },
  flex: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
  },
});
