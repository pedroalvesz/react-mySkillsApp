import React from 'react'
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native'

// Estou entendendo as propriedades do Touchable para todas elas + a title que eu criei
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

// ...rest despeja todas as propriedades que vier do buttonprops no meu touchable
// : ButtonProps = os parametros que eu vou dar para o Button são do tipo ButtonProps
export function Button({title, ...rest } : ButtonProps)  {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8257E5',
    padding: 14,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})
