import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider} from 'react-native-elements';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen.js';
import TasksScreen from './screens/TasksScreen.js';
// Навигационный стек экранов. Позволяет упорядоченно переключатся между экранами
const Stack = createStackNavigator();

const globalScreenOptions = {
    headerStyle: {backgroundColor: "#37B34A"},
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
};

const theme = {
  colors: {
    primary: '#37B34A',
  }
};

export default function App() {
  return (
    // Обертка для доступа всех дочерних компонентов к теме приложения
    <ThemeProvider theme={theme}>
      {/* Контейнер для организации навигации между экранами */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          {/* Экраны приложения. По name осуществляется поиск, а затем переключение на соответствующий component */}
          {/* Через options можно настроить внешний вид верхней плашки. В данном случае указан заголовок экрана */}
          {/* <Stack.Screen options={{title: "Login"}} name="Login" component={LoginScreen}/> */}
          {/* <Stack.Screen options={{title: "Register"}} name="Register" component={RegisterScreen}/> */}
          <Stack.Screen options={{title: "Home"}} name="Home" component={HomeScreen}/>
          <Stack.Screen options={{ title: "Tasks" }} name="Tasks" component={TasksScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
