import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, Dimensions, ToastAndroid, Platform, } from "react-native";
import * as ImagePicker from "expo-image-picker"

const { width, height } = Dimensions.get("window");

export default function GaleriaScreen() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const abrirGaleria = async () => {
        const dadosPermissao =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!dadosPermissao.granted) {
            if (Platform.OS === "android") {
                ToastAndroid.show(
                    "Aviso! Permissão negada para acessar a galeria!",
                    ToastAndroid.LONG
                );
            } else {
                Alert.alert(
                    "Aviso!",
                    "Precisamos de acesso às suas fotos para continuar!"
                );
            }
            return;
        }

        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!resultado.canceled) {
            setSelectedImage(resultado.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Módulo de Galeria Independente
            </Text>

            <Text style={styles.subTitle}>
                Acesso ao sistema nativo de arquivos
            </Text>

            {/* Preview da imagem */}
            <View style={styles.previewBox}>
                {selectedImage ? (
                    <Image
                        source={{ uri: selectedImage }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                ) : (
                    <Text style={styles.textPlaceholder}>
                        Nenhuma imagem selecionada da galeria ainda.
                    </Text>
                )}
            </View>

            {/* Botão para abrir a galeria */}
            <TouchableOpacity
                onPress={abrirGaleria}
                style={styles.btnGaleria}
            >
                <Text style={styles.textBtn}>
                    Acessar Pasta de Imagens
                </Text>
            </TouchableOpacity>

            {/* Botão para limpar a imagem */}
            {selectedImage && (
                <TouchableOpacity
                    onPress={() => setSelectedImage(null)}
                    style={[styles.btnGaleria, { backgroundColor: "#f00", marginTop: 12 }]}
                >
                    <Text style={styles.textBtn}>
                        Limpar Imagem
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},

    title: {},

    subTitle: {},

    previewBox: {

    },

    image: {

    },

    textPlaceholder: {
    },

    btnGaleria: {

    },

    textBtn: {

    },
});