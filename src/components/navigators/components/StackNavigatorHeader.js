import React from "react"
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Icon,
    Button
} from "native-base"
import {
    BackHandler, StyleSheet
} from "react-native"
import {
    NavigationActions
} from "react-navigation"
import { connect } from "react-redux"
import { TR_HEADER } from "app/src/translate"
import headerStyles from "./headerStyles"

import {
    backRoute
} from "app/src/actions/appActions"

const mapStateToProps = (store) => {
    return {
        homeNav: store.homeNav,
        loginNav: store.loginNav,
        

        lang: store.app.language,
        currentRouteName: store.app.currentRouteName,
    }
};
class StackNavigatorHeader extends React.Component {
    constructor(props) {
        super(props);
        this._onButtonBack = this._onButtonBack.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this._onButtonBack);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this._onButtonBack);
        console.log("STACK DESTROYED", this.props.nav, this.props.currentRouteName);
    }

    _onButtonBack(event) {
        const { nav, navIndex } = this.props;
        const ind = this.props[nav].index;
        if (ind === 0) {
            return false;
        }
        this.props.dispatch(backRoute(undefined, this.props[nav].routes[ind - 1].routeName));
        return true;
    }

    render() {
        const { lang, currentRouteName, nav, back, navIndex } = this.props;
        const outerStyle = this.props.style || {};

        let btnBack = undefined;
        if (back) {
            if (navIndex !== 0)
                btnBack = (
                    <Button
                        style={headerStyles.buttonBack}
                        onPress={this._onButtonBack}
                    >
                        <Icon
                            style={headerStyles.icon}
                            android="md-arrow-back"
                            ios="ios-arrow-back"
                        />
                    </Button>
                )
        }
        return (
            <Header style={[outerStyle, headerStyles.header]}>
                <Left>
                    {btnBack}
                </Left>
                <Body style={headerStyles.body}>
                    <Title style={headerStyles.title}>{TR_HEADER[lang][currentRouteName]}</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default connect(mapStateToProps)(StackNavigatorHeader);