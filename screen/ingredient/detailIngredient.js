import React from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const DetailIngredient = ({ route, navigation }) => {
  const { ingredient } = route.params;

  const formatQuantity = (quantity, unit) => {
    return unit === 'ex' ? `${quantity}개` : `${quantity}${unit}`;
  };

  const handleDelete = () => {
    // 삭제 확인 알림을 띄움
    Alert.alert(
      "재료 삭제",
      `"${ingredient.name}"을(를) 삭제하시겠습니까?`,
      [
        {
          text: "취소",
          onPress: () => console.log("삭제 취소됨"),
          style: "cancel"
        },
        {
          text: "삭제", 
          onPress: () => {
            console.log('재료 삭제:', ingredient.name);
            navigation.goBack(); // 삭제 후 이전 화면으로 돌아가기
          },
          style: "destructive"
        }
      ]
    );
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

        <View style={styles.buttonGroup}>
          <Button title="수정" onPress={() => navigation.navigate('AddIngredients', { ingredient: ingredient })} />
          <Button title="삭제" onPress={handleDelete} color="red" />
        </View>
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
  buttonGroup: {
    flexDirection: 'row', // 버튼들을 가로로 배치
    justifyContent: 'space-between',
  },
});

export default DetailIngredient;
