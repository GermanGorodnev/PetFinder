import React from "react"
import {
    View,
    Text,
    StatusBar,
    TextInput,
    StyleSheet
} from "react-native"
import { screenStyles } from "app/src/styles/defaultStyles"
import { connect } from "react-redux";

import { TR_LOGIN } from "app/src/translate"
import PALETTE from "app/src/styles/colors.js"

// components
import StackNavigatorHeader from "app/src/components/navigators/components/StackNavigatorHeader"

// actions
import {
    login
} from "app/src/actions/profileActions"
import {
    goToRoute
} from "app/src/actions/appActions"

const mapStateTopProps = (store) => {
    return {
        lang: store.app.language,
    }
}
class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    omponentDidBlur() {
        this.props.dispatch({
            type: APP.UPDATE_ROUTE_NAME,
            payload: {
                newRouteName: "Register"
            }
        })
    }

    render() {
        const { lang } = this.props;

        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <StackNavigatorHeader back={true} nav="loginNav" navIndex={1} />
                <View style={styles.wrap}>
                    <View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrap: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        paddingHorizontal: 5,
    },
    text: {
        textAlign: "center"
    },
})
export default connect(mapStateTopProps)(RegisterScreen);