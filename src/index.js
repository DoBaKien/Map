import {Button, StyleSheet, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button
        title="Map"
        onPress={() => {
          navigation.navigate('Map');
        }}
      />
      <Button
        title="Realm"
        onPress={() => {
          console.log('asd');
          navigation.navigate('Realm');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
