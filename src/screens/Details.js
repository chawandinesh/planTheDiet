import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {TravelContext} from './context';

const {height, width} = Dimensions.get('window');
export default function Details(props) {
  const isFocused = useIsFocused();
  const {categoryItem} = props.route.params;
  const {state, setState} = React.useContext(TravelContext);
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [props.navigation, isFocused]);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#FEBDB6'},
      headerTintColor: '#000',
      headerTitle: categoryItem,
      headerRight: () => {
        return (
          <Icon
            onPress={() =>
              props.navigation.navigate('AddDetails', {
                categoryItem: categoryItem,
              })
            }
            name="ios-add-circle-sharp"
            type="ionicon"
            color="#000"
            style={{marginRight: 10}}
          />
        );
      },
    });
  }, [props.navigation]);

  const renderItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('AddDetails', {
            index: index,
            categoryItem: categoryItem,
          })
        }
        style={{
          width: width * 0.9,
          height: height * 0.2,
          backgroundColor: '#aaf2f2',
          borderRadius: height * 0.02,
          shadowColor: '#000',
          shadowOffset: {width: -1, height: -1},
          shadowOpacity: 0.3,
          borderTopWidth: 5,
          borderLeftWidth: 3,
          shadowRadius: 2,
          elevation: 5,
          marginBottom: height * 0.02,
        }}>
        <View
          style={{
            height: height * 0.08,
            width: width * 0.8,
            alignSelf: 'center',
            borderBottomLeftRadius: height * 0.05,
            borderBottomEndRadius: height * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderBottomWidth: 4,
            borderRightWidth: 2,
            borderLeftWidth: 2,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {item.Diet ? item.Diet : '--'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.88,
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: height * 0.11,
              justifyContent: 'center',
              backgroundColor: '#ffd',
              height: height * 0.05,
              borderTopRightRadius: height * 0.04,
              borderBottomRightRadius: height * 0.04,
              alignItems: 'center',
              borderBottomWidth: 3,
              width: width * 0.88 - height * 0.11,
            }}>
            <Text>{item['Diet Timings'] ? item['Diet Timings'] : '--'}</Text>
          </View>
          <View
            style={{
              width: height * 0.11,
              height: height * 0.11,
              backgroundColor: '#fff',
              borderRadius: height * 0.06,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {item.image.length ? (
              <Image
                source={{uri: item.image}}
                style={{
                  height: height * 0.11,
                  width: height * 0.11,
                  borderRadius: height * 0.06,
                }}
                resizeMode="stretch"
              />
            ) : (
              <Text>NO image</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const data = [1, 2, 3, 4, 5, 6];
  //   const data = []
  return (
    <ImageBackground
      style={{width, height}}
      source={require('../assets/bg6.jpg')}>
      {state[categoryItem].length ? (
        <View
          style={{height: height * 0.9, width: width, alignItems: 'center'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={state[categoryItem]}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : (
        <View
          style={{
            height: height * 0.9,
            width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: height * 0.2,
              width: width * 0.8,
              justifyContent: 'center',
              borderLeftWidth: 5,
              borderRightWidth: 5,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#00a',
              }}>
              NO Data found , Please click on + to add data
            </Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}
