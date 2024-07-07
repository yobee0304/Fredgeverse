import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
            <Button
                title="재료 추가하기"
                onPress={() => navigation.navigate('AddIngredients')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
});

export default Home;