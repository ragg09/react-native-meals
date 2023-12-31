import { useNavigation } from '@react-navigation/native';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  Platform
} from 'react-native';
import MealDetails from '../MealDetails';

export default MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability
}) => {
  const navigation = useNavigation();

  const selectMealHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={selectMealHandler}
      >
        <View style={styles.inneContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  inneContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  buttonPressed: {
    opacity: 0.5
  }
});
