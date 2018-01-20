import React from "react"
import {
    DrawerItems,
    NavigationActions
} from "react-navigation"
import {
    View,
    Text,
    TouchableNativeFeedback,
    StyleSheet,
    Image
} from "react-native"
import {
    Icon
} from "native-base"
import { connect } from "react-redux"
import { APP } from "app/src/constants"
import { goToMainRoute } from "app/src/actions/appActions";
import { goToRoute } from "../../actions/appActions";

const mapStateToProps = (store) => {
    return {
        currentRouteName: store.app.currentRouteName
    }
}
class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        if (this.props.reset) {
            this._navigateToStackReset(this.props.routeName, this.props.routeSubname);
        }
    }

    _navigateToStackReset(name, subname) {      
        this.props.dispatch(goToMainRoute(name, subname));
    }

    render() {
        const { routeName, routeSubname, iconPath, displayName, currentRouteName } = this.props;
        const weActive = (currentRouteName === routeSubname);
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this._onPress}
            >
                <View style={[
                    styles.navItemWrap,
                    (weActive ? styles.navItemWrapCurrent : {})
                ]}>
                    {/* <Image
                        source={this.props.icon}
                        style={[
                            styles.navItemIcon,
                            (weActive ? styles.navItemCurrentIcon : {})
                        ]}
                    /> */}
                    <Icon
                        name={this.props.icon}
                        style={[
                            styles.navItemIcon,
                            (weActive ? styles.navItemCurrentIcon : {})
                        ]}
                    />
                    <Text
                        style={[
                            styles.navItem,
                            (weActive ? styles.navItemCurrent : {})
                        ]}
                    >
                        {displayName}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    navItemWrap: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    navItemWrapCurrent: {
        backgroundColor: "#ddd"
    },

    navItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 22,
        fontWeight: "700",
        color: "#000",
    },

    navItemCurrent: {
        color: "#1047c7"
    },

    navItemIcon: {
        // width: 30,
        // height: 30,
        // marginLeft: 10,
        // marginRight: 5,
        marginLeft: 10,
        width: 30,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 30,
    },

    navItemCurrentIcon: {
        color: "#1047c7"
    },
});

export default connect(mapStateToProps)(NavItem);
