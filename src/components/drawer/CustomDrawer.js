import React from "react"
import {
    NavigationActions
} from "react-navigation"
import {
    StyleSheet,
    ScrollView,
    View,
} from "react-native"
import {connect} from "react-redux"
import NavItem from "app/src/components/drawer/NavItem"

import { TR_MENU } from "app/src/translate"

const mapStsteToProps = (store) => {
    return {
        lang: store.app.language
    };
}

class CustomDrawer extends React.Component {
    render() {
        const {lang} = this.props;

        return (
            <View
                style={styles.container}
            >
                <ScrollView>
                    <NavItem 
                        routeName="HomePage"
                        routeSubname="Home"
                        displayName={TR_MENU[lang].HOME}
                        //icon={require("app/src/img/homeIcon.png")}
                        icon="home"
                        reset={true}
                    />
                    <NavItem 
                        routeName="MissingsPage"
                        routeSubname="Missings"
                        displayName={TR_MENU[lang].MY_MISSINGS}
                        //icon={require("app/src/img/missingsIcon.png")}
                        icon="help"
                        reset={true}
                    />
                    <NavItem 
                        routeName="ProfilePage"
                        routeSubname="Profile"
                        displayName={TR_MENU[lang].PROFILE}
                        //icon={require("app/src/img/profileIcon.png")}
                        icon="person"
                        reset={true}
                    />
                    <NavItem 
                        routeName="SettingsPage"
                        routeSubname="Settings"
                        displayName={TR_MENU[lang].SETTINGS}
                        // icon={require("app/src/img/settingsIcon.png")}
                        icon="settings"
                        reset={true}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(mapStsteToProps)(CustomDrawer);
