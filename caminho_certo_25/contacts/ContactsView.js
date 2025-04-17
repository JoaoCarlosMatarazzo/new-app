import {useEffect, useLayoutEffect} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {Button} from 'react-native-paper'

import Card from './Card'

import {findAll} from './ContactsApi'

const listContacts = [
  {
    id: 1,
    tipo: 'Filha',
    nome: 'LARISSA',
    telefone: '(31) 99875-9911',
  },
  {
    id: 2,
    tipo: 'Filha',
    nome: 'KAMILLA',
    telefone: '(31) 99875-9222',
  },
  {
    id: 3,
    tipo: 'Filha',
    nome: 'ANA CLARA',
    telefone: '(31) 99377-9345',
  },
];

export default function ContactsView({navigation}) {
  useLayoutEffect(() => {
    if(listContacts.length === 0)
      navigation.setOptions({title: 'Adicione um contato'})
  })  

  useEffect(() => {
    if(listContacts.length === 0)
      alert('Adicione um contato')
  }, [])

  const consultar = async () => {
    findAll()
  }

  return (<View>
    <FlatList 
      data={listContacts}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Card {...item} />}
    />
    <Button onPress={consultar}>
      LISTAR
    </Button>
  </View>);
}



