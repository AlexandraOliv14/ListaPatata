import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { ThemeContext } from '../contexts/ThemeContext';


export const Config = () => {

    const { theme: { viewStyle, currentTheme, cardStyle }, setTheme1, setTheme2, setTheme3, setDefaultTheme } = useContext(ThemeContext);

    return (
        <View style={{ flex: 1, ...viewStyle }}>
            <View style={{ ...styles.container }}>
                <View style={{...styles.card, ...cardStyle}}>
                    <View style={{ flex: 0.1, alignItems: 'center' }}>
                        <Text>Escoja el tema de la aplicación</Text>
                        <Text>tema actual: {currentTheme}</Text>
                    </View>
                    <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={setTheme1}>
                                <LinearGradient
                                    colors={['#69d0b3', '#d9cf85']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.circle}
                                >
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={{ width: '3%' }} />
                            <TouchableOpacity onPress={setTheme2}>
                                <LinearGradient
                                    colors={['#483c3e', '#bfb2b4']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.circle}
                                >
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={{ width: '3%' }} />
                            <TouchableOpacity onPress={setTheme3}>
                                <LinearGradient
                                    colors={['#bcbfa5', '#4a4d37']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.circle}
                                >
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={setDefaultTheme} style={{flex: 0.1 }}>
                        <View style={{ flex: 1 }}>
                            <Text>Restablece tema default</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
    card: {
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: '90%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        borderRadius: 40,
        width: 50,
        height: 50,
    }
})