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
import {Icon} from 'react-native-elements';
import {TravelContext} from '../screens/context';
const {width, height} = Dimensions.get('window');

export default function Categories(props) {
  const {state, setState} = React.useContext(TravelContext);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#96DBFC'},
      // headerTintColor: '#fff',
    });
  }, [props.navigation]);

  const getIconAndName = (categoryName) => {
    switch (categoryName) {
      case 'Electrical':
        return (
          <Icon
            type="material"
            color="#fff"
            name="electrical-services"
            size={height * 0.05}
          />
        );

      case 'Mechanical':
        return (
          <Icon
            type="font-awesome"
            color="#fff"
            name="gears"
            size={height * 0.05}
          />
        );

      case 'Electronic':
        return (
          <Icon
            type="ionicon"
            color="#fff"
            name="ios-logo-capacitor"
            size={height * 0.05}
          />
        );

      case 'Sanitory':
        return (
          <Icon
            type="material"
            color="#fff"
            name="devices-other"
            size={height * 0.05}
          />
        );

      case 'Clothes':
        return (
          <Icon
            type="font-awesome-5"
            color="#fff"
            name="tshirt"
            size={height * 0.05}
          />
        );

      case 'Cosmetic':
        return (
          <Icon
            type="material"
            color="#fff"
            name="electrical-services"
            size={height * 0.05}
          />
        );

      case 'Food':
        return (
          <Icon
            type="ionicon"
            color="#fff"
            name="ios-fast-food-outline"
            size={height * 0.05}
          />
        );

      case 'Departmental':
        return (
          <Icon
            type="font-awesome"
            color="#fff"
            name="building"
            size={height * 0.05}
          />
        );

      case 'Stationary':
        return (
          <Icon
            type="material-community"
            color="#fff"
            name="bookshelf"
            size={height * 0.05}
          />
        );
      default:
        return (
          <Icon
            type="material"
            color="#fff"
            name="devices-other"
            size={height * 0.05}
          />
        );
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Details', {categoryItem: item})
        }
        style={{
          width: width * 0.9,
          marginTop: height * 0.01,
          height: height * 0.15,
          borderBottomWidth: 5,
          borderBottomColor: '#082',
          // borderRadius: height * 0.02,
          // borderTopRightRadius: index % 2 === 0  ?  height * 0.05 : 0,
          // borderBottomLeftRadius: index % 2 === 0 ? 0 : height * 0.05,
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
        <View style={{position: 'absolute', top: 5, zIndex: 3}}>
          {/* <Icon
            type="material"
            name="electrical-services"
            size={height * 0.05}
          /> */}
          {getIconAndName(item)}
        </View>

        <View
          style={{
            height: height * 0.15,
            backgroundColor: '#6b03fc',
            width: width * 0.8,
            borderWidth: 5,
            borderColor: '#f09',
            justifyContent: 'flex-end',
            borderTopRightRadius: index % 2 === 0 ? height * 0.05 : 0,
            borderBottomLeftRadius: index % 2 === 0 ? 0 : height * 0.05,
          }}>
          <Text
            style={{
              color: 'yellow',
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
      source={require('../assets/bill5.jpg')}
      style={{height, width}}>
      <View style={{height: height * 0.9, width, alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Object.keys(state)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}
