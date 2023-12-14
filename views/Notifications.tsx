
import React from 'react'
import { Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const Notifications = () => {
    const navigation = useNavigation();

    return (
        < View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View >
    )
}
