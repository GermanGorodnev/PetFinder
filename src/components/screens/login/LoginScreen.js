import React from "react"
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from "react-native"
import { screenStyles } from "app/src/styles/defaultStyles"
import { connect } from "react-redux";
import {
    Form,
    Input,
    Button,
    Container,
    Content,
} from "native-base"

import { TR_LOGIN } from "app/src/translate"

// actions
import {

} from "app/src/actions/profileActions"

const mapStateTopProps = (store) => {
    return {
        lang: store.app.language
    }
}
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this._onNameInputChange = this._onNameInputChange.bind(this);
        this._onPasswordInputChange = this._onPasswordInputChange.bind(this);
    }

    componentDidMount() {
        //this.props.dispatch(fetchMissings());
    }

    _onNameInputChange(event) {
        const na = event.nativeEvent;
        console.log(na.width);
    }

    _onPasswordInputChange(event) {
        const na = event.nativeEvent;
        console.log(na.width);
    }

    render() {
        const { lang } = this.props;
        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <Container>
                    <Content>
                        <Form>
                            <Input
                                placeholder={TR_LOGIN[lang].NAME}
                                onChange={this._onNameInputChange}
                            />
                            <Input
                                placeholderTextColor="#fac"
                                placeholder={TR_LOGIN[lang].PASS}
                                onChange={this._onPasswordInputChange}
                            />
                        </Form>
                    </Content>
                </Container>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    scrollView: {
        paddingVertical: 8,
    }
})
export default connect(mapStateTopProps)(LoginScreen);