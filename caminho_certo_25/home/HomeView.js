import { View, Text, StyleSheet, Button } from 'react-native';
import MyButton from './MyButton'
import Header from './Header'

export default function HomeView({navigation}) {
  return (
    <View style={styles.container}>
     <Header />

      <View style={styles.buttons}>
        <MyButton
          title="sos"
          color="red"
          onPress={() => navigation.navigate('contacts')}
        />
        <MyButton title="registro"  />
        <MyButton title="rastreio"  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: 30,
    flex: 1
  },
  buttons: {
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 20
  }
});
