import { FlatList, View, StyleSheet, Text } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useEffect } from 'react';

export default MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View style={styles.container}>
      <Text>Meal Id: {mealId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
