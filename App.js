import React from 'react'; // Импортируем React из библиотеки react-native
import { BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native'; // Импортируем несколько компонентов из библиотеки react-native

const Separator = () => <View style={styles.separator} />; // Создаем компонент Separator, который рендерит View с стилями из объекта styles

const HandelSettingsButton = () =>{};
const HandelExitButton = () => Alert.alert(
  "Вы хотите выйти из приложения?",
  "",
  [
    { text: "Да, я хочу", onPress: handleExitApp },
    { text: "Нет, не хочу", onPress: () => console.log("Отмена") }
  ]
);
const handleExitApp = () => {
  BackHandler.exitApp(); // Работает тольок на android
};

const image = {uri: 'https://i.imgur.com/PNy1DOS.png'};
const windowWidth = Dimensions.get('window').width; // Получаем ширину окна
const windowHeight = Dimensions.get('window').height; // Получаем высоту окна

const Stack = createStackNavigator();

const App = () => ( // Создаем компонент App
  <SafeAreaView style={styles.container}>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View>
      <Button
        title="Play & Learn"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <TouchableOpacity style={styles.exitButton} onPress={HandelExitButton}>
      <MaterialIcons name="exit-to-app" size={30} color="black" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.settingsButton} onPress={HandelSettingsButton}>
      <MaterialIcons name="build-circle" size={30} color="black" />
    </TouchableOpacity>
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({ // Определяем объект стилей с помощью метода StyleSheet.create
  container: {
    flex: 1, // Устанавливаем flex-свойство контейнера
    justifyContent: 'center', // Выравниваем контент по центру по вертикали
  },
  title: {
    textAlign: 'center', // Выравниваем текст по центру
    marginVertical: 8, // Устанавливаем вертикальный отступ
  },
  fixToText: {
    flexDirection: 'row', // Устанавливаем направление flex-контейнера в строку
    justifyContent: 'space-between', // Распределяем элементы по горизонтали с равным пространством между ними
  },
  separator: {
    marginVertical: 8, // Устанавливаем вертикальный отступ
    borderBottomColor: '#737373', // Устанавливаем цвет нижней границы
    borderBottomWidth: StyleSheet.hairlineWidth, // Устанавливаем тонкость нижней границы
  },
  text: {
    color: 'red',
  },
  exitButton: {
    position: 'absolute', // Абсолютное позиционирование
    left: 25,  // Отступ слева
    bottom: 25, // Отступ снизу
  },
  exitButton: {
    position: 'absolute', // Абсолютное позиционирование
    right: 25,  // Отступ слева
    bottom: 25, // Отступ снизу
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
  },
});

export default App; // Экспортируем компонент App по умолчанию
