import React from "react"
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Text,
    Icon,
    Button
} from "native-base"
import {
    BackHandler, StyleSheet, TouchableNativeFeedback, TouchableOpacity,
} from "react-native"
import {
    NavigationActions
} from "react-navigation"
import { connect } from "react-redux"

import { TR_HEADER } from "app/src/translate"

import headerStyles from "./headerStyles"

// actions
import { goToRoute, backRoute } from "app/src/actions/appActions"

const mapStateToProps = (store) => {
    return {
        missingsNav: store.missingsNav,

        lang: store.app.language,
        currentRouteName: store.app.currentRouteName,
    }
};
class MissingsStackNavigatorHeader extends React.Component {
    constructor(props) {
        super(props);
        this._onButtonBack = this._onButtonBack.bind(this);
        this._onButtonAdd = this._onButtonAdd.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this._onButtonBack);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this._onButtonBack);
    }

    _onButtonBack(event) {
        const { missingsNav, navIndex } = this.props;
        if (navIndex === 0) {
            return false;
        }
        this.props.dispatch(backRoute(undefined, missingsNav.routes[navIndex - 1].routeName));
        return true;
    }

    _onButtonAdd() {
        this.props.dispatch(goToRoute("MissingAddNew"));
    }

    render() {
        const { lang, currentRouteName, missingsNav, navIndex } = this.props;

        let btnBack = undefined;
        if (navIndex !== 0)
            btnBack = (
                <Button
                    style={headerStyles.buttonBack}
                    onPress={this._onButtonBack}
                >
                    <Icon
                        android="md-arrow-back"
                        ios="ios-arrow-back"
                        style={headerStyles.icon}
                    />
                </Button>
            )

        let rightButton = undefined;
        if (navIndex === 0) {
            rightButton = (
                <Button
                    style={headerStyles.buttonAddMissing}
                    onPress={this._onButtonAdd}
                >
                    <Icon
                        style={headerStyles.icon}
                        android="md-add"
                        ios="ios-add"
                    />
                </Button>
            )
        }

        return (
            <Header style={headerStyles.header}>
                <Left style={headerStyles.left}>
                    {btnBack}
                </Left>
                <Body style={headerStyles.body}>
                    <Text adjustsFontSizeToFit={false} numberOfLines={1} style={headerStyles.title}>
                        {TR_HEADER[lang][currentRouteName]}
                    </Text>
                </Body>
                <Right style={headerStyles.right}>
                    {rightButton}
                </Right>
            </Header>
        )
    }
}


export default connect(mapStateToProps)(MissingsStackNavigatorHeader);