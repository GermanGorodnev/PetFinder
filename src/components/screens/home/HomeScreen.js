import React from "react"
import {
    View,
    Text,
    StatusBar,
    ToolbarAndroid,
    Image,
    FlatList,
    Button,
} from "react-native"

import { connect } from "react-redux"
import { slideMenuStyles, screenStyles } from "app/src/styles/defaultStyles"

// modules
import HomeScreenMap from "./components/HomeScreenMap"

// actions

const mapStateToProps = (store) => {
    return {
        homeState: store.home
    }
};

class HomeScreen extends React.Component {
    componentDidMount() {
        // fetch data
        //this.props.dispatch(fetchItems());
    }

    render() {
        return (
            <View style={[screenStyles.container, {flexDirection: "row"}]}>
                <StatusBar hidden={true} />
                {/* <HomeScreenMap 

                /> */}
            </View>
        )
    }
}

export default connect(mapStateToProps)(HomeScreen);