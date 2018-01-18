import React from "react"
import { StackNavigator, addNavigationHelpers } from "react-navigation"
import { connect } from "react-redux"

// screens
import LoginScreen from "app/src/components/screens/login/LoginScreen"
import RegisterScreen from "app/src/components/screens/login/RegisterScreen"

import StackNavigatorHeader from "app/src/components/navigators/components/StackNavigatorHeader"
import TransitionConfiguration from "app/src/components/navigators/transitions/TransitionConfiguration"

export const LoginStackNav = StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen,
    }
}, {
    initialRouteName: "Login",
    navigationOptions: {
        header: null
    },
    transitionConfig: TransitionConfiguration
});

const mapStateToProps = (store) => {
    return {
        loginNav: store.loginNav
    }
}
class LoginStackNavigator extends React.Component {
    render() {
        return (
            <LoginStackNav navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.loginNav,
            })} />
        );
    }
}


export default connect(mapStateToProps)(LoginStackNavigator);