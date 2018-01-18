import {
    StyleSheet
} from "react-native"
import PALETTE from "app/src/styles/colors"

export default headerStyles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        alignItems: "center",
    },
    body: {
        overflow: "visible",
        flexDirection: "row",
        width: "100%"
    },
    title: {
        color: "#010",
        fontWeight: "800",
        fontSize: 18,
        overflow: "visible",
        textAlign: "left",
        flex: 1,
    },
    right: {
        paddingRight: 5,
    },
    left: {
        paddingLeft: 5,
    },
    icon: {
        color: "#000", 
        fontSize: 27
    },
    buttonBack: {
        backgroundColor: PALETTE.ACCENT_COL,
        padding: 5,
    },
    buttonAddMissing: {
        backgroundColor: PALETTE.ACCENT_COL
    }
}) 