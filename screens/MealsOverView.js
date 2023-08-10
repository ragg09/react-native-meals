import { FlatList, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default MealsOverView = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = ({ item }) => {
    return <MealItem title={item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
