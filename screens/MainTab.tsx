import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CalendarScreen from './CalendarScreen';
import FeedScreen from './FeedScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#009688',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon size={size} color={color} name="event" />;
          },
        }}
      />
      <Tab.Screen
        name="Feeds"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon size={size} color={color} name="view-stream" />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon size={size} color={color} name="search" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
