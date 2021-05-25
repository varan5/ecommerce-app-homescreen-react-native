import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Product from './Product';

const ProductsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Product
          name="Classic Mowes"
          price="$ 199.00"
          image="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF"
        />
        <Product
          name="Classic Mowes"
          price="$ 199.00"
          image="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF"
        />
        <Product
          name="Classic Mowes"
          price="$ 199.00"
          image="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF"
        />
        <Product
          name="Classic Mowes"
          price="$ 199.00"
          image="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: wp('2'),
    marginTop: hp('1'),
  },
});

export default ProductsList;
