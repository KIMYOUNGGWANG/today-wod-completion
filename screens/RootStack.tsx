import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';
const TitleMap = {
  Calendar: '내 기록 내역',
  Feeds: '피드',
  Search: '검색',
};
const RootStack = () => {
  const Stack = createNativeStackNavigator();
  const getHeaderTitle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route.name) ?? 'Calendar';
    return TitleMap[routeName];
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
