import React from "react"
import {
    View,
    Text,
    StatusBar,
    ToolbarAndroid,
    Image
} from "react-native"
import { screenStyles } from "app/src/styles/defaultStyles"
import { connect } from "react-redux";

const mapStateTopProps = (store) => {
    return {

    }
}
class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <Text >Profile</Text>
            </View>
        )
    }
}
export default connect(mapStateTopProps)(ProfileScreen);