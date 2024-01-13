import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig.js'; // Импорт экземпляра базы данных Firestore
import { doc, getDoc } from "firebase/firestore"; // Импорт необходимых функций Firestore

function TasksScreen() {
  // Состояния для хранения текущей задачи, ответа пользователя и правильного ответа
  const [task, setTask] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  // Функция для асинхронной загрузки задачи из Firestore
  const loadTask = async () => {
    try {
      // Получение ссылки на документ в коллекции 'tasks'
      const docRef = doc(db, "Tasks", "Task1"); // Используйте реальный ID документа

      // Асинхронное получение данных документа
      const docSnap = await getDoc(docRef);

      // Проверка наличия документа и обновление состояний
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTask(data.Question); // Установка текста задачи
        setCorrectAnswer(data.Answer); // Установка правильного ответа
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  // Эффект для загрузки задачи при монтировании компонента
  useEffect(() => {
    loadTask();
  }, []);

  // Функция для проверки правильности ответа пользователя
  const checkAnswer = () => {
    if (userAnswer.trim() === correctAnswer) {
      alert("Правильно!");
    } else {
      alert("Неправильно. Попробуйте еще раз.");
    }
  };

  // Рендер компонента
  return (
    <View style={styles.container}>
      {/* Отображение вопроса задачи */}
      <Text style={styles.taskText}>{task || "Загрузка задачи..."}</Text>

      {/* Поле ввода для ответа пользователя */}
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