import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';

const initialIngredients = [
    { id: '1', name: '고등어', quantity: '500', unit: 'g', category: '생선', expiryDate: '2024-01-25' },
    { id: '2', name: '양파', quantity: '3', unit: 'ex', category: '야채', expiryDate: '2024-01-10' },
    { id: '3', name: '감자', quantity: '5', unit: 'ex', category: '야채', expiryDate: '2024-02-15' },
    { id: '4', name: '삼겹살', quantity: '1', unit: 'kg', category: '고기', expiryDate: '2024-01-05' },
    { id: '5', name: '당근', quantity: '2', unit: 'ex', category: '야채', expiryDate: '2024-01-20' },
    { id: '6', name: '무화과', quantity: '4', unit: 'ex', category: '과일', expiryDate: '2024-02-01' },
];

// 테두리 색상을 진하게 설정하는 함수
const getCategoryBorderColor = (category) => {
    switch (category) {
        case '야채':
            return '#006400'; // 짙은 초록색
        case '과일':
            return '#FFD700'; // 진한 노란색
        case '고기':
            return '#8B0000'; // 진한 빨간색
        case '생선':
            return '#00008B'; // 진한 파란색
        default:
            return '#808080'; // 기본 회색
    }
};

// 더 연한 파스텔톤 배경색을 설정하는 함수
const getCategoryBackgroundColor = (category) => {
    switch (category) {
        case '야채':
            return '#E0F8E0'; // 매우 연한 초록색 (파스텔 그린)
        case '과일':
            return '#FFFDE5'; // 매우 연한 노란색 (파스텔 옐로우)
        case '고기':
            return '#FFE5E5'; // 매우 연한 빨간색 (파스텔 레드)
        case '생선':
            return '#E0F2F7'; // 매우 연한 파란색 (파스텔 블루)
        default:
            return '#F5F5F5'; // 연한 회색
    }
};

const formatQuantity = (quantity, unit) => {
    return unit === 'ex' ? `${quantity}개` : `${quantity}${unit}`;
};

const ViewIngredients = ({ navigation }) => {
    const [ingredients, setIngredients] = useState(initialIngredients);

    const handleDelete = (item) => {
        Alert.alert(
            "재료 삭제",
            `"${item.name}"을(를) 삭제하시겠습니까?`,
            [
                {
                    text: "취소",
                    style: "cancel"
                },
                {
                    text: "삭제",
                    onPress: () => {
                        setIngredients(prevIngredients => prevIngredients.filter(i => i.id !== item.id));
                    },
                    style: "destructive"
                }
            ]
        );
    };

    const renderIngredient = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('DetailIngredient', { ingredient: item })}>
            <View
                style={[
                    styles.ingredientContainer,
                    { 
                        borderColor: getCategoryBorderColor(item.category), 
                        backgroundColor: getCategoryBackgroundColor(item.category)
                    }
                ]}
            >
                <View style={styles.header}>
                    <Text style={styles.ingredientName}>{item.name}</Text>
                    <TouchableOpacity onPress={() => handleDelete(item)}>
                        <Text style={styles.deleteButton}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.ingredientDetails}>수량: {formatQuantity(item.quantity, item.unit)}</Text>
                <Text style={styles.ingredientDetails}>유통기한: {item.expiryDate}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={ingredients}
                renderItem={renderIngredient}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    ingredientContainer: {
        flexBasis: '48%', // 한 줄에 2개의 항목을 균등하게 유지
        borderWidth: 4, // 테두리를 더 두껍게 설정
        borderRadius: 8,
        padding: 10,
        margin: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start', // 상단으로 X 버튼을 더 붙이기
    },
    ingredientName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // 텍스트 색상
    },
    ingredientDetails: {
        fontSize: 14,
        color: '#666', // 텍스트 색상
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    deleteButton: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        marginTop: -5, // X 버튼을 상단으로 더 붙이기
    },
});

export default ViewIngredients;
