import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            kayExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 25,
    },
    zipPlace: {
        flex: 1,
        paddingHorizontal: 30,
    },
    zipCode: {
        flex: 1,
        
    }
})