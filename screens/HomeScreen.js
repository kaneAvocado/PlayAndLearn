import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {
  const navigation = useNavigation();

  const goToTasksScreen = () => {
    navigation.navigate('Tasks'); 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Learn" onPress={goToTasksScreen} />
    </View>
  );
}

export default HomeScreen;
