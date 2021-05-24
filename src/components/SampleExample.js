import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SampleExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.myText}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('100%'), // 80% of width device screen
    marginLeft: wp('20%'),
    marginTop: hp('40%'),
  },
  myText: {
    fontSize: hp('2%'), // End result looks like the provided UI mockup
  },
});

export default SampleExample;
