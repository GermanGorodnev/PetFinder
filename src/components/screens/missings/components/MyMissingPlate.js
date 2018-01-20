import React from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native"
import {
    NavigationActions
} from "react-navigation"
import { connect } from "react-redux"


const mapStateToProps = (store) => {
    return {
        missings: store.missings.list
    }
}
class MissingsPlate extends React.Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        // const navAction = NavigationActions.navigate({
        //     key: "Missings",
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({
        //             routeName: name,
        //             params: {}
        //         })
        //     ]
        // })
        // this.props.dispatch(navAction);
    }

    render() {
        const me = this.props.missings[this.props.index];
        return (
            <TouchableWithoutFeedback
                onPress={this._onClick}
            >
                <View
                    style={styles.container}
                >
                    <View style={styles.row}>
                        <Text style={[
                            styles.text,
                            styles.name
                        ]}
                            numberOfLines={1}
                        >
                            {me.caption}
                        </Text>
                        <Text style={[
                            styles.text,
                            styles.city
                        ]}
                            numberOfLines={1}
                        >
                            ({me.city})
                    </Text>
                    </View>

                    <Text style={[
                        styles.text,
                        styles.description
                    ]}
                        numberOfLines={2}
                    >
                        {me.description}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E3D8F1",
        borderRadius: 23,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 8,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    text: {
        color: "#010"
    },
    name: {
        fontWeight: "800",
        fontSize: 20,
        marginRight: 20
    },
    city: {
        color: "#000",
        fontSize: 18,
        fontWeight: "800",
    },
    description: {
        fontWeight: "300",
        fontSize: 18,
        color: "#232"
    }
})

export default connect(mapStateToProps)(MissingsPlate);