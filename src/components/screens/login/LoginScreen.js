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
import {
    Button,
    Form,
    Container,
    Content,
    Input
} from "native-base"

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

        loggingIn: store.profile.loggingIn,
        reason: store.profile.reason,
    }
}
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this._onEmailInputChange = this._onEmailInputChange.bind(this);
        this._onPasswordInputChange = this._onPasswordInputChange.bind(this);
        this._onLoginClick = this._onLoginClick.bind(this);
        this._onRegisterClick = this._onRegisterClick.bind(this);

        this.state = {
            emailInput: "",
            passwordInput: ""
        }
    }

    _onEmailInputChange(event) {
        this.setState({
            emailInput: event.nativeEvent.text
        });
    }

    _onPasswordInputChange(event) {
        this.setState({
            passwordInput: event.nativeEvent.text
        });
    }

    _onLoginClick() {
        // get email and password
        const { emailInput, passwordInput } = this.state;
        this.props.dispatch(login(emailInput, passwordInput));
    }

    _onRegisterClick() {
        this.props.dispatch(goToRoute("Register"));
    }

    render() {
        const { lang, reason } = this.props;
        let reasonText = " ";
        if (reason)
            reasonText = TR_LOGIN[lang][reason];

        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <StackNavigatorHeader back={true} nav="loginNav" navIndex={0} />
                <View style={styles.wrap}>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="email-address"
                            placeholder={TR_LOGIN[lang].EMAIL}
                            onChange={this._onEmailInputChange}
                            underlineColorAndroid={PALETTE.ACCENT_COL}
                        />
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            underlineColorAndroid={PALETTE.ACCENT_COL}
                            placeholder={TR_LOGIN[lang].PASS}
                            onChange={this._onPasswordInputChange}
                        />
                        <Button
                            style={[styles.marginButton, styles.loginButton]}
                            block={true}
                            onPress={this._onLoginClick}
                        >
                            <Text style={styles.loginText}>{TR_LOGIN[lang].LOGIN}</Text>
                        </Button>
                    </View>
                    <View>
                    <Text style={[styles.reason, styles.text]}>{reasonText}</Text>
                        <Text style={[styles.noAcc, styles.text]}>{TR_LOGIN[lang].NO_ACC}</Text>
                        <Button
                            style={[styles.marginButton, styles.registerButton]}
                            block={true}
                            onPress={this._onRegisterClick}
                        >
                            <Text style={styles.loginText}>{TR_LOGIN[lang].REG}</Text>
                        </Button>
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
    marginButton: {
        marginHorizontal: 12,
    },
    textInput: {
        fontSize: 18,
    },
    loginButton: {
        marginVertical: 15,
        backgroundColor: PALETTE.ACCENT_COL,
    },
    loginText: {
        fontSize: 18,
        color: "#000"
    },

    text: {
        textAlign: "center"
    },
    reason: {
        color: "#e20",
        fontSize: 20,
        marginBottom: 15,
    },

    noAcc: {
        fontSize: 20,
        color: "#000",
        marginTop: 20,
        marginBottom: 10,
    }, 
    registerButton: {
        backgroundColor: "#fac"
    }
})
export default connect(mapStateTopProps)(LoginScreen);