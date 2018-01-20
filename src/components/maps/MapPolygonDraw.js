import React from "react"
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
} from "react-native"
import { connect } from "react-redux"
import MapView from "react-native-maps"

import PALETTE from "app/src/styles/colors"
import { TR_MAP } from "app/src/translate"

// actions
import {
    newMissingUpdatePolygons
} from "app/src/actions/missingsActions"

let id = 0;

const mapStateToProps = (store) => {
    return {
        lang: store.app.language,
        mapRegion: store.mainMap.mapRegion,
        polygons: store.missings.newMissing.polygons,
    }
};
class MapPolygonDraw extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: this.props.mapRegion,
            editing: null,
        }
    }

    onPress(event) {
        const { editing } = this.state;
        if (!editing) {
            this.setState({
                editing: {
                    id: id++,
                    coordinates: [event.nativeEvent.coordinate],
                }
            });
        } else {
            this.setState({
                editing: {
                    ...editing,
                    coordinates: [
                        ...editing.coordinates,
                        event.nativeEvent.coordinate,
                    ],
                }
            });
        }
    }

    delete() {
        const { polygons } = this.props;      
        this.setState({
            editing: null,
        });
        // DISPATCH
        this.props.dispatch(newMissingUpdatePolygons(polygons.slice(0, polygons.length - 1)));
    }

    finish() {
        const { polygons } = this.props;      
        const { editing } = this.state;
        this.setState({
            editing: null,
        });
        // DISPATCH
        this.props.dispatch(newMissingUpdatePolygons([
            ...polygons,
            editing
        ]));
    }

    render() {
        const { mapRegion, lang, polygons } = this.props;
        const { editing } = this.state;

        const mapOptions = {
            scrollEnabled: true
        };
        if (editing) {
            mapOptions.scrollEnabled = false;
            mapOptions.onPanDrag = (e) => {
                this.onPress(e);
            }
        }

        let renderedPolygons = [];
        polygons.forEach((polygon) => {
            renderedPolygons.push(
                <MapView.Polygon
                    key={polygon.id}
                    coordinates={polygon.coordinates}
                    strokeColor={PALETTE.MAP_POLYGON_STROKE}
                    fillColor={PALETTE.MAP_POLYGON_FILL}
                    strokeWidth={2}
                />
            )
        });
        const editingPolygon = editing && (
            <MapView.Polygon
              key={this.state.editing.id}
              coordinates={this.state.editing.coordinates}
              strokeColor={PALETTE.MAP_POLYGON_STROKE}
              fillColor={PALETTE.MAP_POLYGON_FILL}
              strokeWidth={2}
            />
        )
        const finishPolygon = editing && (
            <TouchableOpacity
                onPress={() => this.finish()}
                style={[styles.bubble, styles.button]}
            >
                <Text>{TR_MAP[lang].FINISH}</Text>
            </TouchableOpacity>
        );
        const clearPolygon = !editing && (
            <TouchableOpacity
                onPress={() => this.delete()}
                style={[styles.bubble, styles.button]}
            >
                <Text>{TR_MAP[lang].CLEAR}</Text>
            </TouchableOpacity>
        )
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={mapRegion}
                    showsUserLocation={true}
                    //followsUserLocation={true}
                    onPress={(e) => this.onPress(e)}
                    {...mapOptions}
                >
                    {renderedPolygons}
                    {editingPolygon}
                </MapView>
                <View style={styles.buttonContainer}>
                    {finishPolygon}
                    {clearPolygon}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //...StyleSheet.absoluteFillObject,
        flex: .9,
        width: "100%"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
})

export default connect(mapStateToProps)(MapPolygonDraw);