import {View, Text, StyleSheet, Image} from 'react-native'

//import Logo from '../assets/logo.png'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Caminho Certo</Text>
      <Image style={styles.img} source={require('../assets/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#24CBAF',
    padding: 30,
    elevation: 11,
    gap: 10
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white'
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100
  }
})