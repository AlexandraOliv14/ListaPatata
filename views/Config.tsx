import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { ButtonTheme } from '../components/ButtonTheme';
import { Card } from '../components/Card';


export const Config = () => {

    const { theme: { viewStyle, currentTheme, cardStyle }, setTheme1, setTheme2, setTheme3, setDefaultTheme } = useContext(ThemeContext);

    return (
        <View style={{ flex: 1, ...viewStyle }}>
            <View style={{ ...styles.container }}>
                <Card>
                    <View style={{ flex: 0.1, alignItems: 'center' }}>
                        <Text>Escoja el tema de la aplicación</Text>
                        <Text>tema actual: {currentTheme}</Text>
                    </View>
                    <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <ButtonTheme onPress={setTheme1} colorG1='#69d0b3' colorG2='#d9cf85' />
                            <View style={{ width: '3%' }} />
                            <ButtonTheme onPress={setTheme2} colorG1='#483c3e' colorG2='#bfb2b4' />
                            <View style={{ width: '3%' }} />
                            <ButtonTheme onPress={setTheme3} colorG1='#bcbfa5' colorG2='#4a4d37' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={setDefaultTheme} style={{flex: 0.1 }}>
                        <View style={{ flex: 1 }}>
                            <Text>Restablece tema default</Text>
                        </View>
                    </TouchableOpacity>
                </Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        alignItems: 'center',
        marginTop: '5%',
        // justifyContent: 'center',

    },
})