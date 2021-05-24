import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IconSection = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="shopping-bag" style={styles.iconStyle} />
      <MaterialIcons name="read-more" style={styles.iconStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: wp('-7'),
  },
  iconStyle: {
    fontSize: hp('3'),
    margin: wp('3'),
  },
});

export default IconSection;
