import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home';
import AddIngredients from './screen/ingredient/addIngredients';
import SearchIngredients from './screen/ingredient/searchIngredients';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: '홈' }}/>
        <Stack.Screen name="AddIngredients" component={AddIngredients} options={{ title: '재료 추가하기' }}/>
        <Stack.Screen name="SearchIngredients" component={SearchIngredients} options={{ title: '재료 조회하기' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};