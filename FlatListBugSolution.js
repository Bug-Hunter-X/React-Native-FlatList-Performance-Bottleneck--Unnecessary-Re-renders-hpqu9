import React, { useMemo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const complexCalculation = (itemData) => {
  // Simulate a complex calculation
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum + itemData.id;
};

const MemoizedComplexComponent = React.memo(({ itemData }) => {
  const calculatedValue = useMemo(() => complexCalculation(itemData), [itemData.id]);
  return (
    <View style={styles.itemContainer}>
      <Text>ID: {itemData.id}</Text>
      <Text>Calculated Value: {calculatedValue}</Text>
    </View>
  );
});

const data = Array.from({ length: 100 }, (_, i) => ({ id: i, name: `Item ${i}` }));

const FlatListOptimized = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MemoizedComplexComponent itemData={item} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FlatListOptimized;