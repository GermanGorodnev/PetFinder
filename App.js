import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View
} from "react-native";
import { Provider, connect } from "react-redux"
import store from "app/src/store"
import AppNavigator from "app/src/components/navigators/AppNavigator"
import { addNavigationHelpers } from "react-navigation"

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

