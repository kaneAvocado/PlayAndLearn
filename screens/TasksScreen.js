// TasksScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function TasksScreen() {
  // Состояние для задачи, ответа пользователя и правильного ответа (для примера)
  const [task, setTask] = useState("Пример задачи: сколько будет 2 + 2?");
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer] = useState('4'); // В реальном приложении будет загружаться из базы данных

  const checkAnswer = () => {
    // Проверка правильности ответа и вывод сообщения
    if(userAnswer.trim() === correctAnswer) {
      alert("Правильно!");
    } else {
      alert("Неправильно. Попробуйте еще раз.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Отображение задачи */}
      <Text style={styles.taskText}>{task}</Text>

      {/* Поле для ввода ответа */}
      <TextInput 
        style={styles.input} 
        onChangeText={setUserAnswer} 
        value={userAnswer} 
        keyboardType="numeric" 
        placeholder="Введите ваш ответ" 
      />

      {/* Кнопка для проверки ответа */}
      <Button title="Проверить ответ" onPress={checkAnswer} />
    </View>
  );
}

// Стили для компонента
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  taskText: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default TasksScreen;
