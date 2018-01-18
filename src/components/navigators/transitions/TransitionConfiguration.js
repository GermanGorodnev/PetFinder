let MyTransition = (index, position, layout) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [.1, 1, 1],
    });

    // const scaleY = position.interpolate({
    //     inputRange,
    //     outputRange: ([0.8, 1, 1]),
    // });

    const translateX = position.interpolate({
        inputRange,
        outputRange: [layout.initWidth, 0, 0]
    });
    //console.log(translateX);

    console.log([
        {translateX}
    ])
    return {
        opacity,
        transform: [
            {translateX}
        ]
    };
};
export default TransitionConfiguration = () => {
    return {
        // screenInterpolator: () => (null)
        screenInterpolator: (screenProps) => {
            const {layout, position, scene} = screenProps;
            const {index} = scene;
            return MyTransition(index, position, layout);
        }
    }
}