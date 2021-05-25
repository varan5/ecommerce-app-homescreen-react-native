import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IconSection from './IconSection';

const Header = ({data}) => {
  return (
    <View style={styles.container}>
      <IconSection />
      <Text style={styles.headerStyle}>Discover our exclusive watches</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: hp('5'),
  },
  headerStyle: {
    marginTop: hp('2%'),
    color: 'black',
    fontSize: hp('4.6%'),
    alignSelf: 'center',
  },
});

export default Header;
