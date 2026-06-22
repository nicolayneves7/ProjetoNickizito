import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, } from "react-native";

import { COLORS } from "../../theme/Apptheme";

import RegisterViewModel from './viewmodel'
import styles from "../../theme/RegisterStyles";

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

export default RegisterScreen;