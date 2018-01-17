import React from "react"
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from "react-native"
import { screenStyles } from "app/src/styles/defaultStyles"
import { connect } from "react-redux";

// components
import MissingsStackNavigatorHeader from "app/src/components/navigators/components/MissingsStackNavigatorHeader"


// actions

const mapStateTopProps = (store) => {
    return {
        missings: store.missings.list
    }
}
class MissingsAddNewScreen extends React.Component {
    render() {
        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <MissingsStackNavigatorHeader navIndex={1} />
                
            </View>
        )
    }
}
const styles = StyleSheet.create({

})
export default connect(mapStateTopProps)(MissingsAddNewScreen);