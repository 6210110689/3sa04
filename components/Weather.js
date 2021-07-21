import React, { useEffect, useState } from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import Forecast from "./Forecast"

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: 'Main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=efa7dc4728f31abe45bd2b26585b7deb`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    
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