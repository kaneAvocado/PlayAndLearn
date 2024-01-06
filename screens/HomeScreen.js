import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, BackHandler, Alert } from 'react-native'; // Add TouchableOpacity, BackHandler, and Alert
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  const navigation = useNavigation();

  const handleExitButton = () => Alert.alert(
    "Вы хотите выйти из приложения?",
    "",
    [
      { text: "Да, я хочу", onPress: handleExitApp },
      { text: "Нет, не хочу", onPress: () => console.log("Отмена") }
    ]
  );

  const handleExitApp = () => {
    BackHandler.exitApp();
  };  

  const goToTasksScreen = () => {
    navigation.navigate('Tasks'); 
  };

  const styles = StyleSheet.create({
    exitButton: {
      position: 'absolute',
      left: 25,
      bottom: 25,
    },
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Play & Learn" onPress={goToTasksScreen} />
      <TouchableOpacity style={styles.exitButton} onPress={handleExitButton}>
          <MaterialIcons name="exit-to-app" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
