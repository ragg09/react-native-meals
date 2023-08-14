import { MealsList } from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useEffect } from 'react';

export default MealsOverView = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: catTitle
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};
