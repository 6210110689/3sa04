import React, { useState } from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'Main',
        description: 'description',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.bgtext}>
                <Text>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
        
    )
   }
   
   const styles = StyleSheet.create({
       backdrop: {
           flexDirection: 'column',
           alignItems: 'center',
           width: '100%',
           height: '100%',
       },
       bgtext: {
           width: '100%',
           height: '40%',
           alignItems: 'center',
           justifyContent: 'space-evenly',
           backgroundColor: 'rgba(52, 52, 52, 0.5)'
           
       }
   })