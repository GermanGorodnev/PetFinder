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
import StackNavigatorHeader from "app/src/components/navigators/components/StackNavigatorHeader"

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
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <StackNavigatorHeader nav="homeNav" back={true} navIndex={0} />
                {/* <HomeScreenMap 

                /> */}
            </View>
        )
    }
}

export default connect(mapStateToProps)(HomeScreen);