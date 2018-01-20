import React from "react"
import {
    View,
    Text,
    StatusBar,
    Image,
    ScrollView,
    StyleSheet
} from "react-native"
import { screenStyles } from "app/src/styles/defaultStyles"
import { connect } from "react-redux";
import MissingsStackNavigatorHeader from "app/src/components/navigators/components/MissingsStackNavigatorHeader"

// components
import MyMissingPlate from "./components/MyMissingPlate"

// actions
import {
    fetchMissings
} from "app/src/actions/missingsActions"

const mapStateTopProps = (store) => {
    return {
        missings: store.missings.list,
        userID: store.profile.userID
    }
}
class MissingsScreen extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMissings(this.props.userID));
    }

    _renderMissings() {
        const {missings} = this.props;
        let arr = [];
        missings.forEach((ad, ind) => {
            arr.push(
                <MyMissingPlate 
                    key={ad.id}
                    index={ind}
                />
            )
        })
        return arr;
    }

    render() {
        const renderedMissings = this._renderMissings();
        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <MissingsStackNavigatorHeader navIndex={0} />
                <ScrollView 
                    contentContainerStyle={styles.scrollView}
                >
                    {renderedMissings}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    scrollView: {
        paddingVertical: 8,
    }
})
export default connect(mapStateTopProps)(MissingsScreen);