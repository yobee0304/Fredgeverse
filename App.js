import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screen/home';
import AddIngredients from './screen/ingredient/addIngredients';
import ViewIngredients from './screen/ingredient/viewIngredients';
import DetailIngredient from './screen/ingredient/detailIngredient';
import ViewRecipes from './screen/recipe/viewRecipes';

// 스택 네비게이터 정의
const Stack = createStackNavigator();

// 스택 네비게이터를 감싸는 컴포넌트
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ViewIngredients">
      <Stack.Screen name="ViewIngredients" component={ViewIngredients} options={{ title: '재료 조회' }} />
      <Stack.Screen name="DetailIngredient" component={DetailIngredient} options={{ title: '재료 상세 정보' }} />
      <Stack.Screen name="AddIngredients" component={AddIngredients} options={{ title: '재료 수정' }} />
    </Stack.Navigator>
  );
};

// 하단 네비게이션 설정
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline'; // 홈 아이콘 추가
            } else if (route.name === 'Add Ingredients') {
              iconName = 'plus-box';
            } else if (route.name === 'Search Ingredients') {
              iconName = 'magnify';
            } else if (route.name === 'View Recipes') {
              iconName = 'book-open-page-variant';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: '홈' }} />
        <Tab.Screen name="Add Ingredients" component={AddIngredients} options={{ title: '재료 추가' }} initialParams={{ ingredient: null }} />
        <Tab.Screen name="Search Ingredients" component={SearchStackNavigator} options={{ title: '재료 조회', headerShown: false}} />
        <Tab.Screen name="View Recipes" component={ViewRecipes} options={{ title: '레시피 조회' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
