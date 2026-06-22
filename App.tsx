import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, Image, Dimensions, ActivityIndicator, Alert } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"

// Pegamos a largura e altura da tela do dispositivo SmartPhone, para garantir o tamanho da foto
const { width, height } = Dimensions.get('window')

const isTestMode = true;

export default function App() {
    const [permission, requestPermission] = useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [isUploading, setUploading] = useState(false)
    const cameraRef = useRef<any>(null);

    if (!permission) {
        return (
            <View style={styles.container}>
                <Text style={styles.textLight}>carregando permissões...</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textPermissao}>
                    Precisamos da sua permissão para mostrar a câmera!
                </Text>
                <Button onPress={requestPermission}
                    title="Conceder Permissão" />
            </View>
        );
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            // skipProcessing garante que o android processe a imagem antes de entregar a URI
            const option = { quality: 0.8, skipProcessing: false };
            const photo = await cameraRef.current.takePictureAsync(option);

            if (photo && photo.uri) {
                // Isso vai aparecer no terminal do VsCode
                console.log('Foto tirada com sucesso! Caminho:', photo.uri);
                setCapturedImage(photo.uri);
            }
        }
    };


    const uploadImage = async () => {

        if (!capturedImage) return;

        setUploading(true);

        try {
            if (isTestMode) {

                // MODO DE TESTE (APENAS FRONT-END)

                console.log('Modo de teste ativo: Simulando o Upload...')

                // Simula o tempo de uma requisição de rede "2 segundos"
                await new Promise(resolve => setTimeout(resolve, 2000))

                console.log('Upload simulado com sucesso! A imagem está pronta para ser usada no app.')
                Alert.alert('Sucesso', 'Sua foto de perfil foi atualizada (Modo de teste)!')


            } else {

                // MODO PRODUÇÃO (COMUNICAÇÃO COM BACKEND)

                // 1. Resolva o erro do "Unsupported FormDataPart" transformando o arquivo local em um blop padrao da web

                const localImageResponse = await fetch(capturedImage);
                const blob = await localImageResponse.blob();

                // 2. Cria o FormData e anexa o blop (Usando o padrao web que as versôes novas do expo exigem)
                const formData = new FormData();
                formData.append('profilePictute', blob, 'profile.jpg');

                const UPLOAD_URL = 'https://sua/upload-endpoint';

                const response = await fetch(UPLOAD_URL, {
                    method: 'POST',
                    // DICA: não coloque 'Content-type' : 'mulpipart/form-data' aqui nos headers
                    // O fetch cuida de gerar os 'boundaries' corretamente se você não forçar manualmente.
                    headers: {
                        // 'Authorization': 'Bearer SEU_TOKEN_USUARIO' --- Para usuários autenticados
                    },
                    body: formData,
                });

                if (response.ok) {

                    const data = await response.json();

                    console.log('Upload concluido no servidor:', data)
                    Alert.alert('Sucesso', 'Sua foto de perfil foi atualizada(Modo Teste)');
                } else {
                    Alert.alert('ERRO', 'Não foi possivel salvar a imagem no servidor')


                }

            }


        } catch (error) {
            console.error('Erro no upload', error)
            Alert.alert('ERRO', 'falha na conexão com o servidor')
        } finally {
            setUploading(false); // Esconde o loading,independente de dar erro ou não
        }
    };



    return (
        <View style={styles.container}>

            {capturedImage ? (
                // Tela de preview da foto
                <View style={styles.previewContainer}>
                    <Image
                        source={{ uri: capturedImage }}
                        style={styles.preview}
                        resizeMode="cover" // Garante que a foto preencha o espaço total do SmartPhone
                    />
                    <View style={styles.previewContainer}>
                        {isUploading ? (
                            <ActivityIndicator size='large' color="#00ff00" />
                        ) : (
                            <>

                                <Button title="Usar como foto de perfil" onPress={uploadImage} color='#28a745' />
                                <View>
                                    <Button
                                        onPress={() => setCapturedImage(null)}
                                        title="Tirar outra foto!"
                                        color='#dc3545'
                                    />
                                </View>

                            </>
                        )}
                    </View>
                </View>

            ) : (
                // Tela da câmera
                <View style={styles.cameraContainer}>
                    <CameraView style={styles.camera} facing="front" ref={cameraRef} />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={takePicture}
                            style={styles.button}>

                            <Text style={styles.buttonText}>Tirar Foto
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    textPermissao: {

    },

    textLight: {
        color: "#fff",
        textAlign: "center"

    },

    cameraContainer: {
        flex: 1,
        width: '100%',
        position: 'relative',
    },
    camera: {
        flex: 1,
        width: '100%',

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 15,
        elevation: 5,
        borderRadius: 30,

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',

    },
    previewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',

    },
    preview: {

        width: width * 0.85,
        height: height * 0.70,
        borderRadius: 12,
    },
    //previewButtons: {
    // marginTop: 20, 
    //width: '80%'}
});