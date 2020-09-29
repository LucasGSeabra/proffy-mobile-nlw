import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import classesImg from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleBack() {
        goBack();
    };

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={classesImg} 
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um proffy?</Text>
                <Text style={styles.description}>
                    Para comecar, voce precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton onPress={handleBack} style={styles.okBtn}>
                <Text style={styles.btnText}>Tudo Bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;
