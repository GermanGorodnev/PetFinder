import React from "react"
import {
    View,
    Text,
    StatusBar,
    Button
} from "react-native"
import { screenStyles } from "app/src/styles/defaultStyles"
import { APP } from "app/src/constants"
import { connect } from "react-redux";

const mapStateTopProps = (store) => {
    return {

    }
} 
class SettingsScreen extends React.Component {
    _changeLanguage() {
        this.props.dispatch({
            type: "CHANGE_LANGUAGE",
            payload: {
                newLang: APP.LANG.ENG
            }
        });
    }

    render() {
        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <Text >Settings</Text>
                <Button title={"click me to change language"} onPress={() => this._changeLanguage()} />
            </View>
        )
    }
}
export default connect(mapStateTopProps)(SettingsScreen);
