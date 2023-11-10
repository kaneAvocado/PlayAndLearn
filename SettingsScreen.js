import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  
  const handleLanguagePress = () => {
    Alert.alert("Язык", "Функционал настройки языка будет реализован позже.");
  };

  const handleResetPress = () => {
    Alert.alert("Сброс", "Функционал сброса настроек будет реализован позже.");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Язык"
        onPress={handleLanguagePress}
      />
      <Button
        title="Сброс"
        onPress={handleResetPress}
      />
      <Button
        title="Выход"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
