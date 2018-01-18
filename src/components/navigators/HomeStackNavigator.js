import React from "react"
import { StackNavigator, addNavigationHelpers } from "react-navigation"
import { connect } from "react-redux"

// screens
import HomeScreen from "app/src/components/screens/home/HomeScreen"
import StackNavigatorHeader from "app/src/components/navigators/components/StackNavigatorHeader"


export const HomeStackNav = StackNavigator({
    Home: {
        screen: HomeScreen,
    }
}, {
    initialRouteName: "Home",
    navigationOptions: {
        header: null
    },
    transitionConfig: () => {
        return {
            transitionSpec: {
                duration: 0
            }
        }
    }
});

const mapStateToProps = (store) => {
    return {
        homeNav: store.homeNav
    }
}
class HomeStackNavigator extends React.Component {
    render() {
        return (
            <HomeStackNav navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.homeNav,
            })} />
        );
    }
}


export default connect(mapStateToProps)(HomeStackNavigator);