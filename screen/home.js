import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// 홈 화면 (최근 추가된 재료와 유통기한 다가오는 재료 표시)
const Home = () => {
  const recentIngredients = [
    { id: '1', name: '양파', expiryDate: '2024-01-10' },
    { id: '2', name: '감자', expiryDate: '2024-02-15' },
  ];

  const expiringSoon = [
    { id: '3', name: '당근', expiryDate: '2024-01-05' },
  ];

  const renderIngredient = ({ item }) => (
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientName}>{item.name}</Text>
      <Text style={styles.ingredientExpiry}>유통기한: {item.expiryDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>최근 추가된 재료</Text>
      <FlatList
        data={recentIngredients}
        renderItem={renderIngredient}
        keyExtractor={item => item.id}
      />

      <Text style={styles.subtitle}>곧 유통기한이 다가오는 재료</Text>
      <FlatList
        data={expiringSoon}
        renderItem={renderIngredient}
        keyExtractor={item => item.id}
      />

      <Text style={styles.subtitle}>추천 레시피</Text>
      {/* 추천 레시피가 여기에 표시될 수 있습니다 */}
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredientContainer: {
    marginBottom: 10,
  },
  ingredientName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ingredientExpiry: {
    fontSize: 16,
    color: '#666',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
