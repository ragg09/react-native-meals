import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default MealsOverView = () => {
  return (
    <View style={styles.container}>
      <Text>MEALS OVERVIEW SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
