import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import { COLORS } from '../../theme/Apptheme';
import { RoundedButton } from '../../../components/RoundedButton';
import RecuperarSenhaViewModel from './viewmodel'; // Seu hook da ViewModel

const RecuperarSenha = () => {
    const [mostrarCamposSenha, setMostrarCamposSenha] = useState(false);

    // 1. CHAMA A VIEWMODEL: Pega os estados e funções criados lá
    const { userEmail, userPassword, onChange, login } = RecuperarSenhaViewModel();

    // 2. FUNÇÃO CONTROLADORA: Decide se apenas mostra as senhas ou se executa o login/alteração
    const handleAcaoBotao = () => {
        if (!mostrarCamposSenha) {
            // Primeira etapa: Usuário digitou o e-mail e clicou em "Enviar"
            setMostrarCamposSenha(true);
        } else {
            // Segunda etapa: Campos de senha visíveis, usuário clicou em "Alterar Senha"
            login(); // Dispara a função na ViewModel com os dados capturados
        }
    };

    return (
        <View style={styles.container}>

            <Image
                style={styles.imageFundo}
                source={require("../../../../assets/img/city.jpg")}
            />

            <View style={styles.imageProfileContainer}>
                <Image
                    style={styles.imageProfile}
                    source={require("../../../../assets/img/password.png")}
                />
                <Text style={styles.imageProfileText}>
                    Recuperação de Senha
                </Text>
            </View>

            <View style={styles.frm}>

                <Text style={styles.frmTitle}>
                    Recuperação
                </Text>

                <View style={styles.frmInput}>
                    <Image
                        style={styles.frmIcon}
                        source={require("../../../../assets/img/email.png")}
                    />

                    {/* CORRIGIDO: Vinculado a chave correta 'userEmail' para a ViewModel salvar o texto */}
                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={userEmail}
                        onChangeText={(text) => onChange('userEmail', text)}
                    />
                </View>

                {mostrarCamposSenha && (
                    <>
                        <View style={styles.frmInput}>
                            <Image
                                style={styles.frmIcon}
                                source={require("../../../../assets/img/password.png")}
                            />

                            {/* CORRIGIDO: Vinculado a chave correta 'userPassword' */}
                            <TextInput
                                style={styles.txtInput}
                                placeholder="Nova senha"
                                placeholderTextColor="#999"
                                secureTextEntry
                                value={userPassword}
                                onChangeText={(text) => onChange('userPassword', text)}
                            />
                        </View>

                        <View style={styles.frmInput}>
                            <Image
                                style={styles.frmIcon}
                                source={require("../../../../assets/img/confirm_password.png")}
                            />

                            <TextInput
                                style={styles.txtInput}
                                placeholder="Confirmar senha"
                                placeholderTextColor="#999"
                                secureTextEntry
                            // Caso adicione futuramente a validação de confirmação na VM:
                            // onChangeText={(text) => onChange('userConfirmPassword', text)}
                            />
                        </View>
                    </>
                )}

                {/* 5. SEU COMPONENTE DE BOTÃO APLICADO AQUI: */}
                <View style={styles.containerBotao}>
                    <RoundedButton
                        text={mostrarCamposSenha ? 'Alterar Senha' : 'Enviar'}
                        onPress={handleAcaoBotao}
                    />
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgBlack,
    },
    imageFundo: {
        width: "100%",
        height: 320,
        opacity: 0.5,
    },
    imageProfileContainer: {
        position: "absolute",
        top: 110,
        width: "100%",
        alignItems: "center",
    },
    imageProfile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#FFF",
        padding: 20,
    },
    imageProfileText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    },
    frm: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
        marginTop: -35,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingTop: 40, // Reduzido o padding vertical exagerado para os inputs subirem um pouco
    },
    frmTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
        color: '#000', // Garante cor preta/escura para o título do form
    },
    frmInput: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 18,
    },
    frmIcon: {
        width: 24,
        height: 24,
    },
    txtInput: {
        flex: 1,
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#CFCFCF",
        paddingBottom: 8,
        color: '#000', // CORRIGIDO: Força a cor da letra digitada a ser preta
    },
    containerBotao: {
        marginTop: 30,
        width: '100%'
    }
});

export default RecuperarSenha;