import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, ToastAndroid, Platform, Alert } from 'react-native';
import { COLORS } from "../../theme/Apptheme";
import { RoundedButton } from "../../../components/RoundedButton";
// import { COLORS } from "../../Theme/AppTheme";
// import { RoundedButton } from "../../components/RoundedButton";




export const HomeScreen = () => {
    const testOS = () => {
        if (Platform.OS === 'android') {
            //Android: mostra o Toast nativo
            ToastAndroid.show('Teste de Login! - Android', ToastAndroid.SHORT);
        } else if (Platform.OS === 'web') {
            //Navegar: usa o alert do JS classico
            alert('Teste de Login! - WEB');
        } else {//IOS: usa o alert nativo do IPhone
            Alert.alert('Aviso', 'Teste de Login! 0 iPhone');
        }
    };
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/bg-smartphone.jpg')}
                style={styles.imgBg}
            />

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/img/logo.png')}
                    style={styles.logoImg}
                />

                <Text style={styles.logoTxt}>
                    Restaurante | Pizzaria Tito
                </Text>
            </View>

            <View style={styles.frm}>
                <Text style={styles.frmTitle}>
                    Entrar
                </Text>

                <View style={styles.frmInput}>
                    <Image
                        source={require('../../../../assets/img/user.png')}
                        style={styles.frmIco}
                    />

                    <TextInput
                        placeholder="Digite seu Email / Usuário..."
                        keyboardType="email-address"
                        style={styles.txtInput}
                    />
                </View>

                <View style={styles.frmInput}>
                    <Image
                        source={require('../../../../assets/img/password.png')}
                        style={styles.frmIco}
                    />

                    <TextInput
                        placeholder="Digite sua senha..."
                        keyboardType="default"
                        secureTextEntry={true}
                        style={styles.txtInput}
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        text='Entrar'
                        onPress={testOS}
                    //onPress={() => ToastAndroid.show('Teste de Login!', ToastAndroid.SHORT)} 
                    />
                </View>


                <View style={styles.frmRegistre}>
                    <Text>Crie sua conta!</Text>
                    <Text style={styles.txtRegistre}> Registre-se</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgBg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%',
        alignItems: 'center',
    },

    logoImg: {
        width: 100,
        height: 100,
    },

    logoTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginTop: 10,
    },

    frm: {
        width: '100%',
        height: '40%',
        backgroundColor: COLORS.bgColor,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },

    frmTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: COLORS.bgBlack,
    },

    frmInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    frmIco: {
        width: 25,
        height: 25,
        marginTop: 10,
    },

    txtInput: {
        flex: 1,
        borderBottomWidth: 2,
        marginLeft: 15,
        fontSize: 16,
    },
    frmRegistre: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },

    txtRegistre: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        borderBottomColor: COLORS.secundary,
        borderBottomWidth: 1,
        marginLeft: 5,
        color: COLORS.secundary,

    },
});

export default HomeScreen