import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthPage from './components/AuthPage';
import MainPage from './components/MainPage';
import UserCard from './components/UserCard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='AuthPage' component={AuthPage} options={{title:'Страница авторизации'}} />
        <Stack.Screen name='MainPage' component={MainPage} options={{title:'Главная страница'}} />
        <Stack.Screen name='UserCard' component={UserCard} options={{title:'Страница пользователя'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
