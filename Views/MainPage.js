import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native-web'
import styles from './MainScreenStyle'
import { AntDesign,Ionicons } from '@expo/vector-icons';
const MainPage = () => {
  const [value,setValue] = useState('0')
  const scrollViewRef = useRef()
  const handlePress = (data) =>{
    if (data=='AC') {
      setValue('0')
    }
    else if (data=='=') {
      try {
        setValue(`${eval(value)}`)
      } catch (error) {
        setValue('Format Error')
      }
    }
    else if (data=='C') {
      if (value.length==1) {
        setValue('0')
      }
      else{
        setValue(value.slice(0,-1))
      }
    }
    else if (value == 'Format Error') {
      setValue(data)
    }
    else if (isNaN(data)) {
      if (value.slice(-1)=='+'  || value.slice(-1)=='/' || value.slice(-1)=='*' || value.slice(-1)=='%'||value.slice(-1)=='.') {
        setValue(value.slice(0,-1)+data)
      }
      else if (data=='-') {
        setValue(data)
      }
      else{
        setValue(value+data)
      }
    }
    else{
      if (value == '0') {
        if (data=='+' || data=='/' || data=='*' || data=='%'||data=='.') {
          setValue(value+data)
        }
        setValue(data)
      }
      else{
        setValue(value + data)
      }
    }

  }





  return (
    <View style={[styles.main_screen]}>
      <ScrollView  style={styles.main_screen__display}  ref={scrollViewRef} onContentSizeChange={()=>scrollViewRef.current.scrollToEnd({animated:true})}>
        <Text style={styles.textStyle}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
      </ScrollView>
      <View style={styles.main_screen_keypad}>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={()=>handlePress('AC')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>AC</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('%')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('C')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}><Ionicons name="backspace-outline" size={24} color="white" /></Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('/')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>/</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={()=>handlePress('7')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('8')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('9')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('*')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>X</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={()=>handlePress('4')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('5')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('6')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('-')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>-</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={()=>handlePress('1')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('2')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('3')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('+')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>+</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.main_screen_keypad_row}>
          <Pressable onPress={()=>handlePress('00')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>00</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('0')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('.')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=>handlePress('=')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>

    </View>
  )
}

// const style = StyleSheet.create({
//   main_screen: {
//     backgroundColor: '#000000'
//   },
//   textStyle: {
//     color:"white"

//   }
// })
export default MainPage