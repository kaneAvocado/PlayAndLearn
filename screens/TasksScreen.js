import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";

function TasksScreen() {
  const [task, setTask] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [currentTaskId, setCurrentTaskId] = useState(0); // Состояние для текущего ID задачи
  const taskIds = ["Task1", "Task2", "Task3", "Task4", "Task5"]; // Массив ID задач

  const loadTask = async () => {
    try {
      const docRef = doc(db, "Tasks", taskIds[currentTaskId]); // Используйте текущий ID задачи

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTask(data.Question);
        setCorrectAnswer(data.Answer);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  useEffect(() => {
    loadTask();
  }, [currentTaskId]); // Загружайте задачу при изменении текущего ID

  const checkAnswer = () => {
    if (userAnswer.trim() === correctAnswer) {
      alert("Правильно!");
      // Переход к следующей задаче при правильном ответе
      setCurrentTaskId(currentTaskId + 1);
    } else {
      alert("Неправильно. Попробуйте еще раз.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{task || "Загрузка задачи..."}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserAnswer}
        value={userAnswer}
        keyboardType="numeric"
        placeholder="Введите ваш ответ"
      />
      <Button title="Проверить ответ" onPress={checkAnswer} />
    </View>
  );
}

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
