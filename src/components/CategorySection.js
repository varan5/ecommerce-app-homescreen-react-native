import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CategorySection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.selectedTextContainerStyle}>
        <Text style={(styles.textStyle, styles.selectedCategoryTextStyle)}>
          Trending
        </Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Popular</Text>
      </View>

      <View>
        <Text style={styles.textStyle}>Recommended</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: wp('4'),
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginTop: hp('4%'),
  },
  selectedTextContainerStyle: {
    backgroundColor: '#ffb4b4',
    height: hp('4%'),
    width: wp('25%'),
    borderRadius: 12,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: wp('4'),
    marginTop: hp('1%'),
  },
  selectedCategoryTextStyle: {
    color: 'white',
    marginTop: hp('1%'),
  },
});

export default CategorySection;
