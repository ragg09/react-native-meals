import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Button
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

export default MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const seledtedMeal = MEALS.find((meal) => meal.id === mealId);

  const handleHeaderButton = () => {
    console.log('working');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={handleHeaderButton}
            icon={'star'}
            color={'white'}
          />
        );
      }
    });
  }, [navigation, handleHeaderButton]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: seledtedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{seledtedMeal.title}</Text>
      <MealDetails
        duration={seledtedMeal.duration}
        complexity={seledtedMeal.complexity}
        affordability={seledtedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={seledtedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={seledtedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2
  },
  listContainer: {
    width: '80%'
  },
  listOuterContainer: {
    alignItems: 'center'
  }
});
