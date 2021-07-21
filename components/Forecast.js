import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props){
    return(
        <View style={{alignItems: 'center', justifyContent: 'space-between', height: '60%',width: '100%'}}>
            <Text style={styles.big}>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text style={{alignItems: 'center',fontSize: 30,}}>{props.temp} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    big: {
      fontWeight: 'bold',
      fontSize: 30,
    },
   
  });