import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SampleExample from './SampleExample';
import ProductsList from './ProductsList';
import CategorySection from './CategorySection';
import Header from './Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IconSection from './IconSection';

const ResponsiveScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CategorySection />
      <ProductsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default ResponsiveScreen;
