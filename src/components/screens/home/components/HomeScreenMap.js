import React from "react"
import {
    View,
    StyleSheet,
    StatusBar
} from "react-native"
import { connect } from "react-redux"
import MapView from "react-native-maps"

// actions

const mapStateToProps = (store) => {
    return {
        mapRegion: store.mainMap.mapRegion
    }
};
class HomeScreenMap extends React.Component {
    constructor(props) {
        super(props);
        this._onRegionChange = this._onRegionChange.bind(this);
    }

    _onRegionChange() {

    }

    render() {
        const { mapRegion } = this.props;
        const DELTA = .001;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <MapView
                    style={styles.map}
                    region={mapRegion}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    onRegionChange={this._onRegionChange}
                >
                    <MapView.Polygon
                        coordinates={[
                            {
                                latitude: mapRegion.latitude + DELTA,
                                longitude: mapRegion.longitude + DELTA / 5,
                            },
                            {
                                latitude: mapRegion.latitude + DELTA / 1.5,
                                longitude: mapRegion.longitude - DELTA / 3,
                            },
                            {
                                latitude: mapRegion.latitude - DELTA,
                                longitude: mapRegion.longitude + DELTA / 3,
                            }
                        ]}
                        fillColor="#ffaacc80"
                    />
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default connect(mapStateToProps)(HomeScreenMap);