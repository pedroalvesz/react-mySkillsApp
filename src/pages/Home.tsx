import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Alert
} from 'react-native'
import { Button } from '../components/Button'
import { Card } from '../components/Card'


// Tipando nosso objeto
interface SkillData {
    id: string;
    name?: string;
}

export function Home() {
  // O estado quando é alterado, ele gera uma nova render na tela / interface, diferent da variavel let
  // Estado que armazena o que é escrito no input, newskill = estado / setnewskill = função que atualiza o estado / '' = estado é string
  const [newSkill, setNewSkill] = useState('')
  // Estado que armazena em lista todas as skills / [] = o conjunto de skills está em um array
  // Determinando que nosso estado mySkills é um array de objetos SkillData
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [greeting, setGreeting] = useState('')

  // Convenção = sempre que a função disparar da interação de um usuário, usa-se handle
  // Adionar o valor novo (newSkills / data) ao array já existente (mySkills)
  function handleAddNewSkill() {
    const data = {
          id: String(new Date().getTime()),
          name: newSkill
    }
    if (data.name.trim() == "") {
      Alert.alert(
        '👋 Hey USER_NAME!',
        'Please insert a valid skill name.')
    } else {
      setMySkills([...mySkills, data])
    }
  }


  // Quero recuperar somente as skills que o id for diferente do id do item que foi clicado / ou seja vai remover o id igual ao que eu cliquei = remover o que foi clicado.
  function handleRemoveSkill(id: string) {
      setMySkills(mySkills.filter(
        skill => skill.id !== id
      ));
  }
  
  // Hook que executa uma função, assim que seu segundo parametro é mudado / (), [] dois parametros, prim a função que sera executada, sec quando oq mudar ela será executada [] vazio ela vai executar assim que nossa interface / componente foi iniciado
  useEffect(() => {
    const currentHours = new Date().getHours()

    if (currentHours < 12 && currentHours >= 6) {
      setGreeting('Good Morning 😃')
    } else if (currentHours >= 12 && currentHours < 18) {
      setGreeting('Good Afternoon 😎')
    } else {
      setGreeting('Good Night 😴')
    }
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, USER_NAME</Text>
      
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor={'#444'}
        onChangeText={setNewSkill}
      />

      <Button
       onPress={handleAddNewSkill}
       title="ADD"
      />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 30 }]}>
        My Skills
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <Card
        skill={item.name}
        onPress={() => handleRemoveSkill(item.id)} 
         />}
      />

      {
        // {} Juntar JavaScript com JSX
        // map => percorre todo o elemento com o parametro skill, mas é preciso passar a propriedade respectiva (skill) para o elemento
        // key sempre hieraquia direta do map
        //mySkills.map( skill => (
        //<Card key= {skill} skill={skill} />
        //))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  greeting: {
    color: '#FFF'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 16,
    borderRadius: 6,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 20
  }
})
function IsEmpty(name: string) {
  throw new Error('Function not implemented.');
}

