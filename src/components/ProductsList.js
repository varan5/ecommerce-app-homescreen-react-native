import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProductsList = () => {
  const productsData = [
    {
      key: 1,
      name: 'Classic Mowes',
      price: '$ 199.00',
      image:
        'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF',
    },
    {
      key: 2,
      name: 'Classic Mowes',
      price: '$ 199.00',
      image:
        'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF',
    },
    {
      key: 3,
      name: 'Classic Mowes',
      price: '$ 199.00',
      image:
        'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF',
    },
    {
      key: 4,
      name: 'Classic Mowes',
      price: '$ 199.00',
      image:
        'https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-stmawes-rg_2.png?ecom2=true&format=jpg&canvas=1:1&width=400&quality=80&bg-color=FFFFFF',
    },
  ];
  return (
    <View style={styles.boxContainer}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={productsData}
        renderItem={({item}) => (
          <View style={styles.productStyle}>
            <Image
              style={styles.productImageStyle}
              source={{
                uri: 'https://lh3.googleusercontent.com/proxy/k4DTzrgQI0DZtcHQqogbOLv1KdglZv20Mw2JWazTOq2YpzySFn8xnk7ssHsUZA4PSGBOrScuELzDJRT_JTrxLcdiygNm3sslxkLsIntlEY_ndbHh_iBYgTg9L9nXTW7UnDnHjQjiAEe4_oMvyveGIg',
              }}
            />
            <Text style={styles.productNameStyle}>{item.name}</Text>
            <Text style={styles.productPriceStyle}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    // display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: wp('2'),
    marginTop: hp('1'),
  },
  productStyle: {
    height: hp('28%'),
    width: wp('43%'),
    borderColor: 'white',
    borderWidth: 2,
    margin: hp('1.2%'),
    padding: hp('2'),
    backgroundColor: '#f8f5f1',
    borderRadius: 30,
  },
  productPriceStyle: {
    color: '#f3bda1',
    fontSize: hp('2.6%'),
    marginLeft: hp('2%'),
    marginTop: hp('1.4%'),
  },
  productNameStyle: {
    fontSize: hp('2.3%'),
  },
  productImageStyle: {
    height: hp('17%'),
    width: wp('20%'),
    backgroundColor: 'white',
    marginLeft: hp('3%'),
    marginBottom: hp('.5%'),
  },
});

export default ProductsList;
