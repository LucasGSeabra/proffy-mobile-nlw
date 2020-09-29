import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;