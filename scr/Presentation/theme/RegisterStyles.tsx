import { StyleSheet } from "react-native";
import { COLORS } from "./Apptheme";

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

export default styles;