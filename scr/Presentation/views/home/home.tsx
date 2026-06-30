import React from "react";
// IMPORTAÇÃO ATUALIZADA: Adicionado Dimensions e removemos o behavior agressivo do KeyboardAvoidingView no Android
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula03";

import { CustomTextInput } from "../../../components/CustomTextInput";
import { RoundedButton } from "../../../components/RoundedButton";

import styles from "../../theme/HomeStyle";
import useViewModel from "./viewmodel";
import { COLORS } from "../../theme/Apptheme";

// Pegamos a altura total da tela do celular para travar o tamanho do fundo de forma estática
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const HomeScreen = () => {

    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList>>();

    const {
        userEmail,
        userPassword,
        onChange,
        login
    } = useViewModel();

    return (
        // ATUALIZAÇÃO 1: Removemos o behavior no Android. 
        // No Android deixamos como undefined para o 'adjustPan' do AndroidManifest cuidar de tudo sem tremer!
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={{ flex: 1, backgroundColor: COLORS.bgColor }}
        >
            {/* A IMAGEM VOLTOU! 
              Usamos o seu estilo original (styles.imgBg) que já estava bonito.
              Mas forçamos ela a ter a altura fixa e estática da tela inteira (SCREEN_HEIGHT) em pixels.
              Como o tamanho dela agora está travado em pixels fixos e imutáveis, o Android para de recalcular o tamanhoframe a frame e elimina o tremor!
            */}
            <Image
                source={require("../../../../assets/bg-smartphone.jpg")}
                style={[styles.imgBg, { height: SCREEN_HEIGHT }]} // Estilo original + altura fixa estática
                resizeMode="cover"
            />

            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                {/* O formulário flui naturalmente dentro da rolagem */}
                <View style={styles.frm}>

                    <Text style={styles.frmTitle}>
                        Entrar
                    </Text>

                    <CustomTextInput
                        image={require("../../../../assets/img/user.png")}
                        placeholder="Digite seu Email / Usuário..."
                        keyboardType="email-address"
                        secureTextEntry={false}
                        property="userEmail"
                        onChangeText={onChange}
                        value={userEmail}
                    />

                    <CustomTextInput
                        image={require("../../../../assets/img/password.png")}
                        placeholder="Digite sua senha..."
                        keyboardType="default"
                        secureTextEntry={true}
                        property="userPassword"
                        onChangeText={onChange}
                        value={userPassword}
                    />

                    <View style={{ marginTop: 25 }}>
                        <RoundedButton
                            text="Entrar"
                            onPress={() => login()}
                        />
                    </View>

                    <View style={styles.linksContainer}>
                        <Text style={styles.textNormal}>
                            Crie sua conta!
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("RegisterScreen")
                            }
                        >
                            <Text style={styles.textLink}>
                                Registre-se
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.textNormal}>
                            Esqueceu sua senha?
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("RecuperarSenha")}
                        >
                            <Text style={styles.textLink}>
                                Alterar Senha
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default HomeScreen;