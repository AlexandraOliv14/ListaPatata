import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome</Text>
        </View>
    )
}
