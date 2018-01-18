import React from "react"
import {
    View,
    Text,
    StatusBar,
    TextInput,
    StyleSheet
} from "react-native"
import {
    Button
} from "native-base"
import { screenStyles } from "app/src/styles/defaultStyles"
import { connect } from "react-redux";

import { TR_LOGIN } from "app/src/translate"
import PALETTE from "app/src/styles/colors.js"

// components
import StackNavigatorHeader from "app/src/components/navigators/components/StackNavigatorHeader"

// actions
import {
    register
} from "app/src/actions/profileActions"
import {
    goToRoute
} from "app/src/actions/appActions"

const mapStateTopProps = (store) => {
    return {
        lang: store.app.language,

        registered: store.profile.registered,
        registering: store.profile.registering,
        reason: store.profile.registerReason,
    }
}
class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: "",
            emailInput: "",
            passwordInput: "",
            passwordRepeatInput: "",
            passwordsMatch: true,
            validEmail: true,
        };

        this._onNameInputChange = this._onNameInputChange.bind(this);
        this._onEmailInputChange = this._onEmailInputChange.bind(this);
        this._onPasswordInputChange = this._onPasswordInputChange.bind(this);
        this._onPasswordRepeatInputChange = this._onPasswordRepeatInputChange.bind(this);
        this._onRegisterClick = this._onRegisterClick.bind(this);
    }

    _onNameInputChange(event) {
        const e = event.nativeEvent.text;
        this.setState({
            nameInput: e
        });
    }

    _onEmailInputChange(event) {
        const e = event.nativeEvent.text;
        if (e.search(/.+\@.+\..+/i) != -1) {
            // good email, dude
            this.setState({
                emailInput: e,
                validEmail: true
            });
        } else {
            this.setState({
                emailInput: e,
                validEmail: false
            });
        }
    }

    _onPasswordInputChange(event) {
        const t = event.nativeEvent.text;
        this.setState({
            passwordInput: t
        });
        if (t !== this.state.passwordRepeatInput) {
            this.setState({
                passwordsMatch: false
            });
        } else {
            this.setState({
                passwordsMatch: true
            });
        }
    }

    _onPasswordRepeatInputChange(event) {
        const t = event.nativeEvent.text;
        this.setState({
            passwordRepeatInput: t
        });
        if (t !== this.state.passwordInput) {
            this.setState({
                passwordsMatch: false
            });
        } else {
            this.setState({
                passwordsMatch: true
            });
        }
    }

    _onRegisterClick() {
        const { passwordsMatch, validEmail } = this.state;
        if (!passwordsMatch || !validEmail) 
            return;

        // get inputs
        const { nameInput, emailInput, passwordInput } = this.state;
        if ((nameInput.length < 6) || (passwordInput < 6)) {
            return;
        } 
        this.props.dispatch(register(nameInput, emailInput, passwordInput));
    }

    render() {
        const { lang, reason } = this.props;

        let passNotMatchText = "",
            secondPassCol = PALETTE.ACCENT_COL;
        if (!this.state.passwordsMatch) {
            secondPassCol = "#f02";
            passNotMatchText = TR_LOGIN[lang].PASS_NOT_MATCH;
        }        
        let invalidEmailText = "",
            emailCol = PALETTE.ACCENT_COL;
        if (!this.state.validEmail) {
            emailCol = "#f02";
            invalidEmailText = TR_LOGIN[lang].INVALID_EMAIL
        }

        let reasonText = "";
        if (reason)
            reasonText = TR_LOGIN[lang][reason];
        
        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <StackNavigatorHeader back={true} nav="loginNav" navIndex={1} />
                <View style={styles.wrap}>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder={TR_LOGIN[lang].NAME}
                            onChange={this._onNameInputChange}
                            underlineColorAndroid={PALETTE.ACCENT_COL}
                        />
                        <TextInput
                            style={styles.textInput}
                            keyboardType="email-address"
                            placeholder={TR_LOGIN[lang].EMAIL}
                            onChange={this._onEmailInputChange}
                            underlineColorAndroid={emailCol}
                        />

                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder={TR_LOGIN[lang].PASS}
                            onChange={this._onPasswordInputChange}
                            underlineColorAndroid={PALETTE.ACCENT_COL}
                        />
                        {/* PASSWORD REPEAT */}
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            placeholder={TR_LOGIN[lang].REPEAT_PASS}
                            onChange={this._onPasswordRepeatInputChange}
                            underlineColorAndroid={secondPassCol}
                        />

                        <Text style={[styles.text, styles.error]}>{passNotMatchText}</Text>
                        <Text style={[styles.text, styles.error]}>{invalidEmailText}</Text>
                        <Text style={[styles.text, styles.error]}>{reasonText}</Text>

                        <Button
                            style={styles.registerButton}
                            block={true}
                            onPress={this._onRegisterClick}
                        >
                            <Text style={styles.buttonText}>{TR_LOGIN[lang].REGISER}</Text>
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
    text: {
        textAlign: "center",
        fontSize: 18,
    },
    textInput: {
        fontSize: 18,
    },
    buttonText: {
        fontSize: 18,
        color: "#000"
    },
    error: {
        color: "#f02"
    },

    registerButton: {
        marginVertical: 15,
        backgroundColor: PALETTE.ACCENT_COL,
    }
})
export default connect(mapStateTopProps)(RegisterScreen);