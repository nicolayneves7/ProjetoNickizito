import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, } from "react-native";

import { COLORS } from "../../theme/Apptheme";

import RegisterViewModel from './viewmodel'

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageFundo}
                source={require("../../../../assets/img/chef.jpg")}
            />

            <View style={styles.imageProfileContainer}>
                <Image
                    style={styles.imageProfile}
                    source={require("../../../../assets/img/user_image.png")}
                />

                <Text style={styles.imageProfileText}>
                    Selecione uma imagem
                </Text>
            </View>

            <View style={styles.frm}>
                <Text style={styles.frmTitle}>
                    Registre-se
                </Text>

                <View style={styles.frmInput}>
                    <Image
                        style={styles.frmIcon}
                        source={require("../../../../assets/img/user.png")}
                    />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite seu Nome"
                    />
                </View>

                <View style={styles.frmInput}>
                    <Image
                        style={styles.frmIcon}
                        source={require("../../../../assets/img/my_user.png")}
                    />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite Nome de Usuário"
                    />
                </View>

                <View style={styles.frmInput}>
                    <Image
                        style={styles.frmIcon}
                        source={require("../../../../assets/img/email.png")}
                    />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite seu Email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.frmInput}>
                    <Image
                        style={styles.frmIcon}
                        source={require("../../../../assets/img/phone.png")}
                    />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite seu Telefone"
                        keyboardType="phone-pad"
                    />
                </View>

                <View style={styles.frmInput}>
                    <Image
                        style={styles.frmIcon}
                        source={require("../../../../assets/img/password.png")}
                    />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite a senha"
                        secureTextEntry
                    />
                </View>

                <View style={styles.frmInput}>
                    <Image
                        style={styles.frmIcon}
                        source={require("../../../../assets/img/confirm_password.png")}
                    />

                    <TextInput
                        style={styles.txtInput}
                        placeholder="Confirme a senha"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.btnRegisterText}>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>
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
        paddingTop: 25,
    },

    frmTitle: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 15,
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
    },

    btnRegister: {
        marginTop: 30,
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    btnRegisterText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default RegisterScreen;