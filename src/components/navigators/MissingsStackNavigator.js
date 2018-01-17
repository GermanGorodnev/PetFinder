import React from "react"
import { StackNavigator, addNavigationHelpers } from "react-navigation"
import { connect } from "react-redux"

// screens
import MissingsScreen from "app/src/components/screens/missings/MissingsScreen"
import MissingsAddNewScreen from "app/src/components/screens/missings/MissingsAddNewScreen"

import MissingsStackNavigatorHeader from "app/src/components/navigators/components/MissingsStackNavigatorHeader"
import TransitionConfiguration from "app/src/components/navigators/transitions/TransitionConfiguration"

export const MissingsStackNav = StackNavigator({
    Missings: {
        screen: MissingsScreen,
    },
    MissingAddNew: {
        screen: MissingsAddNewScreen
    }
}, {
    initialRouteName: "Missings",
    navigationOptions: {
        //header: (<MissingsStackNavigatorHeader />)
        header: null
    },
    transitionConfig: TransitionConfiguration
});

const mapStateToProps = (store) => {
    return {
        missingsNav: store.missingsNav
    }
}
class MissingsStackNavigator extends React.Component {
    render() {
        return (
            <MissingsStackNav navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.missingsNav,
            })} />
        );
    }
}


export default connect(mapStateToProps)(MissingsStackNavigator);