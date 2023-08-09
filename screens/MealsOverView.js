import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default MealsOverView = ({ route }) => {
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>MEALS OVERVIEW SCREEN {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
