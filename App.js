import 'react-native-gesture-handler';
import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import MealsOverView from './screens/MealsOverView';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const Drawernavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#351401'
          },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
          drawerContentStyle: {
            backgroundColor: '#351401'
          },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#3f2f25',
          drawerActiveBackgroundColor: '#e4baa1'
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="list" />
            )
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="star" />
            )
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="inverted" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name="Meals"
            component={Drawernavigator}
            options={{
              title: 'Home',
              headerShown: false
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverView} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'Meal Details'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
