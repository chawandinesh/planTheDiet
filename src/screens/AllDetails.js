import React from 'react';
import {View, Text, ImageBackground, Dimensions, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {TravelContext} from './context';

const {height, width} = Dimensions.get('window');
export default function AllDetails(props) {
  //   const {categoryItem} = props.route.params;
  const {state, setState} = React.useContext(TravelContext);
  const allData = Object.values(state).flat();
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#FEBDB6'},
      headerTintColor: '#000',
    });
  }, [props.navigation]);

  const renderItem = ({index, item}) => {
    return (
      <View
        style={{
          width: width * 0.9,
          height: height * 0.2,
          backgroundColor: '#fbf',
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
      </View>
    );
  };
  const data = [1, 2, 3, 4, 5, 6];
  //   const data = []
  return (
    <ImageBackground
      style={{width, height}}
      source={require('../assets/bg6.jpg')}>
      {allData.length ? (
        <View
          style={{height: height * 0.9, width: width, alignItems: 'center'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={allData}
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
              backgroundColor: '#787',
              borderWidth: 5,
              borderColor: '#dff',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#dff',
              }}>
              NO Data found , Please click on + to add data on categories page
            </Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}
