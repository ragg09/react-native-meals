import { StyleSheet, Text, View } from 'react-native';
import { MealsList } from '../components/MealsList/MealsList';
import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../store/context/favorites-context';
import { useSelector } from 'react-redux';

export default FavoritesScreen = () => {
  // const favoriteMealCtx = useContext(FavoriteContext);

  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favorite Meals Yet!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
