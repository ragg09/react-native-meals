import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fragment } from 'react';
import MealsOverView from './screens/MealsOverView';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
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
            component={CategoriesScreen}
            options={{
              title: 'Home'
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
    </Fragment>
  );
}

const styles = StyleSheet.create({});
