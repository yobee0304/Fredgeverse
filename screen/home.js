import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// 홈 화면 (최근 추가된 재료와 유통기한 다가오는 재료 표시)
const Home = () => {
  const recentIngredients = [
    { id: '1', name: '양파', expiryDate: '2024-01-10' },
    { id: '2', name: '감자', expiryDate: '2024-02-15' },
  ];

  const expiringSoon = [
    { id: '3', name: '당근', expiryDate: '2024-01-05' },
  ];

  const recommendedRecipes = [
    { id: '1', name: '감자 스프', description: '따뜻하고 부드러운 감자 스프' },
    { id: '2', name: '양파 볶음', description: '간단한 양파 볶음 요리' },
  ];

  const renderIngredient = ({ item }) => (
    <View style={styles.card}>
      <Icon name="food" size={30} color="#333" />
      <View style={styles.ingredientTextContainer}>
        <Text style={styles.ingredientName}>{item.name}</Text>
        <Text style={styles.ingredientExpiry}>유통기한: {item.expiryDate}</Text>
      </View>
    </View>
  );

  const renderRecipe = ({ item }) => (
    <View style={styles.card}>
      <Icon name="chef-hat" size={30} color="#333" />
      <View style={styles.recipeTextContainer}>
        <Text style={styles.recipeName}>{item.name}</Text>
        <Text style={styles.recipeDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>최근 추가된 재료</Text>
      <FlatList
        data={recentIngredients}
        renderItem={renderIngredient}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.title}>곧 유통기한이 다가오는 재료</Text>
      <FlatList
        data={expiringSoon}
        renderItem={renderIngredient}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.title}>추천 레시피</Text>
      <FlatList
        data={recommendedRecipes}
        renderItem={renderRecipe}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: 250,
  },
  ingredientTextContainer: {
    marginLeft: 10,
  },
  ingredientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ingredientExpiry: {
    fontSize: 14,
    color: '#666',
  },
  recipeTextContainer: {
    marginLeft: 10,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  recipeDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Home;
