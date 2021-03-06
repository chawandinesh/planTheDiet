import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TravelContext} from './context';
import ImagePicker from 'react-native-image-crop-picker';

const {height, width} = Dimensions.get('window');
export default function AddDetails(props) {
  const {state, setState} = React.useContext(TravelContext);
  const {categoryItem, index} = props.route.params;
  const [formState, setFormState] = React.useState({
    Title: '',
    Price: '',
    Notes: '',
    'Reminder Time': '',
    type: '',
    image: '',
  });
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#96DBFC'},
      headerTitle: 'Add Bill Details',
      headerTintColor: '#000',
      headerRight: () => {
        return index == 0 || index ? (
          <Icon
            name="trash"
            type="ionicon"
            color="red"
            onPress={() => {
              setState({
                ...state,
                [categoryItem]: state[categoryItem].filter(
                  (e, idx) => idx !== index,
                ),
              });
              props.navigation.goBack();
            }}
          />
        ) : null;
      },
    });
  }, [props.navigation]);

  React.useEffect(() => {
    if (index === 0 || index) {
      setFormState(state[categoryItem][index]);
    }
  }, []);
  const fields = ['Title', 'Price', 'Notes', 'Reminder Time', 'type', 'image'];

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  const handleSubmit = () => {
    if (formState.Title.length) {
      if (index === 0 || index) {
        state[categoryItem].splice(index, 1, formState);
        setState(state);
        props.navigation.goBack();
      } else {
        setState({
          ...state,
          [categoryItem]: [...state[categoryItem], formState],
        });
        props.navigation.goBack();
      }
    } else {
      alert('Please fill all fields');
    }
  };
  return (
    <ImageBackground
      source={require('../assets/bill1.jpg')}
      style={{width: width * 1}}>
      <KeyboardAwareScrollView>
        <View
          style={{
            width: width,
            alignSelf: 'center',
            paddingHorizontal: 10,
            height: height * 0.9,
            justifyContent: 'space-around',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              height: height * 0.07,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderTopRightRadius: height * 0.03,
              borderBottomLeftRadius: height * 0.03,
              borderBottomColor: '#abc',
              borderTopWidth: 3,
              borderRightWidth: 5,
              borderLeftWidth: 5,
              borderBottomWidth: 5,
            }}>
            <TextInput
              placeholder={fields[0]}
              value={formState[fields[0]]}
              onChangeText={(text) =>
                setFormState({...formState, [fields[0]]: text})
              }
            />
          </View>
          <View
            style={{
              height: height * 0.07,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderTopWidth: 3,
              borderRightWidth: 5,
              borderLeftWidth: 5,
              borderBottomWidth: 5,
              borderTopRightRadius: height * 0.03,
              borderBottomLeftRadius: height * 0.03,
              borderBottomColor: '#abc',
            }}>
            <TextInput
              placeholder={fields[1]}
              value={formState[fields[1]]}
              onChangeText={(text) =>
                setFormState({...formState, [fields[1]]: text})
              }
            />
          </View>
          <View
            style={{
              height: height * 0.07,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderTopRightRadius: height * 0.03,
              borderBottomLeftRadius: height * 0.03,
              borderBottomColor: '#abc',
              borderTopWidth: 3,
              borderRightWidth: 5,
              borderLeftWidth: 5,
              borderBottomWidth: 5,
            }}>
            <TextInput
              placeholder={fields[2]}
              value={formState[fields[2]]}
              onChangeText={(text) =>
                setFormState({...formState, [fields[2]]: text})
              }
            />
          </View>
          <View
            style={{
              height: height * 0.07,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderTopRightRadius: height * 0.03,
              borderBottomLeftRadius: height * 0.03,
              borderBottomColor: '#abc',
              borderTopWidth: 3,
              borderRightWidth: 5,
              borderLeftWidth: 5,
              borderBottomWidth: 5,
            }}>
            <TextInput
              placeholder={fields[3]}
              value={formState[fields[3]]}
              onChangeText={(text) =>
                setFormState({...formState, [fields[3]]: text})
              }
            />
          </View>

          <View
            style={{
              height: height * 0.07,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderTopRightRadius: height * 0.03,
              borderBottomLeftRadius: height * 0.03,
              borderBottomColor: '#abc',
              borderTopWidth: 3,
              borderRightWidth: 5,
              borderLeftWidth: 5,
              borderBottomWidth: 5,
            }}>
            <TextInput
              placeholder={fields[4]}
              value={formState[fields[4]]}
              onChangeText={(text) =>
                setFormState({...formState, [fields[4]]: text})
              }
            />
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              width: width * 0.9,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              height: height * 0.13,
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                height: height * 0.1,
                width: height * 0.1,
                justifyContent: 'center',
                backgroundColor: '#ddd',
              }}>
              {formState.image ? (
                <Image
                  source={{uri: formState.image}}
                  resizeMode="stretch"
                  style={{height: height * 0.1, width: height * 0.1}}
                />
              ) : (
                <Text style={{textAlign: 'center'}}>No Image</Text>
              )}
            </TouchableOpacity>
            <View>
              <Icon name="arrow-long-left" type="entypo" />
              {/* <Text style={{fontSize: height * 0.03}}> --- </Text> */}
            </View>
            <View>
              <Text style={{fontSize: height * 0.02, fontWeight: 'bold'}}>
                {' '}
                Add Image{' '}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width * 0.9,
              height: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                backgroundColor: 'darkblue',
                height: height * 0.07,
                width: width * 0.5,
                borderBottomWidth: height * 0.005,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height * 0.2,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
