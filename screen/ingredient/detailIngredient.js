import React from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const DetailIngredient = ({ route, navigation }) => {
  const { ingredient } = route.params;

  const formatQuantity = (quantity, unit) => {
    return unit === 'ex' ? `${quantity}개` : `${quantity}${unit}`;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
        <View style={styles.innerContainer}>
          <Text style={styles.header}>재료 상세 정보</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>재료 명 : {ingredient.name}</Text>
          </View>

          <View style={[styles.formGroup, { zIndex: 1000 }]}>
            <Text style={styles.label}>카테고리 : {ingredient.category}</Text>
          </View>
          
          <View style={[styles.formGroup, { zIndex: 900 }]}>
            <Text style={styles.label}>제품 양 : {formatQuantity(ingredient.quantity, ingredient.unit)}</Text>
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>유통기한 : {ingredient.expiryDate}</Text>
          </View>
          
          <Button title="수정" onPress={() => navigation.navigate('AddIngredients', { ingredient: ingredient })} />
        </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  formGroup: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginRight: 10,
  },
});

export default DetailIngredient;
