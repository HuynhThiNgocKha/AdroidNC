// import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, Dimensions, PanResponder, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const pan = useRef(new Animated.ValueXY()).current;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const moveRight = () => {
    Animated.spring(pan, {
      toValue: { x: screenWidth * 1.5, y: 0 },
      friction: 5,
      tension: 100,
      useNativeDriver: true
    }).start(
      () => {
        pan.setValue({ x: 0, y: 0 })
      }
    )
  }

  const moveLeft = () => {
    Animated.spring(pan, {
      toValue: { x: -screenWidth * 1.5, y: 0 },
      friction: 5,
      tension: 100,
      useNativeDriver: true
    }).start(
      () => {
        pan.setValue({ x: 0, y: 0 })
      }
    )
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gesture) => {
        // console.log(gesture)
        pan.setValue({ x: gesture.dx, y: gesture.dy })
      },

      onPanResponderRelease: (evt, gesture) => {
        if (gesture.moveX > screenWidth * 0.8) {
          moveRight()
        } else if (gesture.moveX < screenWidth * 0.3) {
          moveLeft()
        }
      }

    })
  ).current

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "green",
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >

      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});