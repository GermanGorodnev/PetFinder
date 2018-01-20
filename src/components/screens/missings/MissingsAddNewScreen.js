import React from "react"
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
} from "react-native"
import {
    Button,
} from "native-base"
import { screenStyles } from "app/src/styles/defaultStyles"
import { connect } from "react-redux";

// components
import MissingsStackNavigatorHeader from "app/src/components/navigators/components/MissingsStackNavigatorHeader"
import MapPolygonDraw from "app/src/components/maps/MapPolygonDraw"

// const
import { TR_POST } from "app/src/translate"
import PALETTE from "app/src/styles/colors"

// actions
import {
    addMissing
} from "app/src/actions/missingsActions"

const mapStateTopProps = (store) => {
    return {
        lang: store.app.language,
        missings: store.missings.list,
        newMissingPolygons: store.missings.newMissing.polygons,
        userID: store.profile.userID
    }
}
class MissingsAddNewScreen extends React.Component {
    constructor(props) {
        super(props);
        this._onPublish = this._onPublish.bind(this);
        this._onCaptionChange = this._onCaptionChange.bind(this);
        this._onDescriptionChange = this._onDescriptionChange.bind(this);

        this.state = {
            caption: "",
            description: "",
        }
    }

    _onPublish() {
        // get name, desc
        const { caption, description } = this.state;
        const { newMissingPolygons, userID } = this.props;
        if (!caption.length || !description.length) {
            return;
        }
        if (!newMissingPolygons.length) {
            return;
        }
        if (!userID) {
            return;
        }
        this.props.dispatch(addMissing(userID, caption, description, newMissingPolygons));
    }

    _onCaptionChange(text) {
        this.setState({
            caption: text
        });
    }

    _onDescriptionChange(text) {
        this.setState({
            description: text
        });
    }

    render() {
        const { lang, missings } = this.props;
        return (
            <View style={screenStyles.container}>
                <StatusBar hidden={true} />
                <MissingsStackNavigatorHeader navIndex={1} />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder={TR_POST[lang].CAPTION}
                        underlineColorAndroid={PALETTE.ACCENT_COL}
                        onChangeText={this._onCaptionChange}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={6}
                        style={styles.input}
                        placeholder={TR_POST[lang].DESC}
                        underlineColorAndroid={PALETTE.ACCENT_COL}
                        onChangeText={this._onDescriptionChange}
                    />
                </View>
                <MapPolygonDraw

                />
                <View style={styles.publishWrap}>
                    <Button
                        full={true}
                        onPress={this._onPublish}
                        style={styles.buttonPublish}
                    >
                        <Text style={styles.buttonPublishText}>{TR_POST[lang].PUBLISH}</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 12,
        marginVertical: 10,
    },
    input: {
        fontSize: 18,
        textAlignVertical: "top"
    },
    text: {
        fontSize: 18,
    },
    publishWrap: {
        flexDirection: "column",
        justifyContent: "center",
        //alignItems: "center"
        flex: .2,
    },
    buttonPublish: {
        backgroundColor: PALETTE.ACCENT_COL
    },
    buttonPublishText: {
        fontSize: 18,
        color: "#000"
    }
})
export default connect(mapStateTopProps)(MissingsAddNewScreen);