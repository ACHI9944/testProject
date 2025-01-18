import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Image} from 'react-native';
import CreatePostScreen from '../screens/createPostScreen';

const homeUri =
  'https://img.icons8.com/?size=100&id=73&format=png&color=000000';
const profileUri =
  'https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000';
const writeUri =
  'https://img.icons8.com/?size=100&id=11737&format=png&color=000000';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            return (
              <Image
                source={{
                  uri: homeUri,
                }}
                style={{width: 25, height: 25, tintColor: 'black'}}
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Create Post',
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            return (
              <Image
                source={{
                  uri: writeUri,
                }}
                style={{width: 25, height: 25, tintColor: 'black'}}
              />
            );
          },
        }}
        name="Create"
        component={CreatePostScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Profile',
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            return (
              <Image
                source={{
                  uri: profileUri,
                }}
                style={{width: 25, height: 25, tintColor: 'black'}}
              />
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
