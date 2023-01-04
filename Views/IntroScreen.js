import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text, Animated } from 'react-native'

const IntroScreen = () => {
    const [animation, setAnimation] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500
        }).start()
    }, [])

    return (
        <Animated.View style={[styles.container, {
            backgroundColor: animation.interpolate({
                inputRange: [0, 0.5, 0.75, 1],
                outputRange: ["#ffffff", "#ffffff", "#ffffff", "#000000"],
            })
        }]}>
            <View style={styles.inner}>
                <Image source={require('../assets/CalculatorLogo2.png')} style={styles.innerImg} />
            </View>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    inner: {
        width: 100,
        height: 100,
        backgroundColor: 'inherit',
    },
    innerImg: {
        width: 100,
        height: 100
    }
})

export default IntroScreen