import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default function Card({nome, tipo, telefone, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../assets/filha.png')} />
      <Text>{tipo}</Text>
      <Text>{nome}</Text>
      <Text>{telefone}</Text>
    </TouchableOpacity>
  )
}

