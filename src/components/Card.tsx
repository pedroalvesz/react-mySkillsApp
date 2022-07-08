import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
 } from 'react-native'

interface CardProps extends TouchableOpacityProps {
  skill: string,
}

export function Card({ skill, ...rest } : CardProps) {
  return (
    <TouchableOpacity 
    style={styles.buttonSkill} 
    activeOpacity={0.7}
    {...rest}
    >

      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 40,
    marginBottom: 30
  },

  textSkill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12
  }
})
