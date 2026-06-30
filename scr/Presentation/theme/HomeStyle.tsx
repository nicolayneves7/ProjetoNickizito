import { StyleSheet } from "react-native";
import { COLORS } from "./Apptheme"; // Verifique se o caminho do seu Apptheme continua igual

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
    },

    imgBg: {
        width: "100%",
        height: "55%",
        position: "absolute",
        top: 0,
    },

    frm: {
        width: "100%",
        backgroundColor: COLORS.bgColor,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 40,
        marginTop: "85%", // Empurra o formulário para baixo para mostrar a imagem de fundo
    },

    frmTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.bgBlack,
        marginBottom: 25,
    },

    frmRegistre: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },

    txtRegistre: {
        fontSize: 15,
        fontWeight: "bold",
        color: COLORS.secundary,
        marginLeft: 5,
    },

    linksContainer: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    textNormal: {
        fontSize: 14,
        color: COLORS.bgBlack,
        marginBottom: 4,
        textAlign: "center",
    },

    textLink: {
        fontSize: 14,
        fontWeight: "bold",
        color: COLORS.secundary,
        marginBottom: 12,
        textAlign: "center",
    },
});

export default styles;