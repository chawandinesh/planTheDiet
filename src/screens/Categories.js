import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default function Categories(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#FEBDB6'},
      // headerTintColor: '#fff',
    });
  }, [props.navigation]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Details', {categoryItem: item})
        }
        style={{
          width: width * 0.9,
          marginTop: height * 0.01,
          height: height * 0.18,
          // borderRadius: height * 0.02,
          borderTopRightRadius: height * 0.05,
          borderBottomLeftRadius: height * 0.05,
          backgroundColor: '#fff',
          shadowOffset: {height: -2, width: -2},
          shadowColor: '#a00',
          shadowRadius: 5,
          borderLeftWidth: 5,
          borderRightWidth: 5,
          shadowOpacity: 0.6,
          elevation: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: height * 0.02,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: height * 0.15,
            backgroundColor: '#008B94',
            width: width * 0.8,
            borderWidth: 3,
            justifyContent: 'center',
            borderTopRightRadius: height * 0.05,
            borderBottomLeftRadius: height * 0.05,
          }}>
          <Text
            style={{
              color: '#fef',
              fontSize: height * 0.05,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/bg6.jpg')}
      style={{height, width}}>
      <View style={{height: height * 0.9, width, alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            'Carbohydrates',
            'Proteins',
            'Fats',
            'Vitamins',
            'Minerals',
            'Dietary fibre',
            'Water',
          ]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}
