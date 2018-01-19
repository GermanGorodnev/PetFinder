import React from "react"
import { StackNavigator, DrawerNavigator, addNavigationHelpers } from "react-navigation"
import { connect } from "react-redux"

// other navs
import HomeStackNavigator from "app/src/components/navigators/HomeStackNavigator"
import MissingsStackNavigator from "app/src/components/navigators/MissingsStackNavigator"
import LoginStackNavigator from "app/src/components/navigators/LoginStackNavigator"
// screens
import ProfileScreen from "app/src/components/screens/profile/ProfileScreen"
import SettingsScreen from "app/src/components/screens/settings/SettingsScreen"

// modules
import CustomDrawer from "app/src/components/drawer/CustomDrawer"
import StackNavigatorHeader from "app/src/components/navigators/components/StackNavigatorHeader"

import TransitionConfiguration from "app/src/components/navigators/transitions/TransitionConfiguration"

export const START_ROUTE = "HomePage"

export const AppNav = DrawerNavigator({
    HomePage: {
        screen: HomeStackNavigator,
    },
    MissingsPage: {
        screen: MissingsStackNavigator,
    },
    ProfilePage: {
        screen: ProfileScreen,
        navigationOptions: {
            header: (<StackNavigatorHeader back={true} nav="profileNav" />)
        }
    },
    SettingsPage: {
        screen: SettingsScreen,
        navigationOptions: {
            header: (<StackNavigatorHeader back={true} nav="settingsNav" />)
        }
    },
    LoginPage: {
        screen: LoginStackNavigator,
    }
}, {
    initialRouteName: START_ROUTE,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerLockMode: "locked-opened",
    contentComponent: () => {
        return (
            <CustomDrawer/>
        );
    },
    transitionConfig: TransitionConfiguration
});

const mapStateToProps = (store) => {
    return {
        mainDrawerNav: store.mainDrawerNav
    }
}
class AppNavigator extends React.Component {

    render() {
        return (
            <AppNav 
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.mainDrawerNav,
                })} 
            />
        );
    }
}

export default connect(mapStateToProps)(AppNavigator);