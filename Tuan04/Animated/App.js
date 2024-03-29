import { Text, SafeAreaView, StyleSheet, Animated, View, Button, ImageBackground } from 'react-native';
import React, {useRef,useState} from 'react';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeImage = useRef(new Animated.Value(0)).current;


  const textIn = ()=>{
    Animated.timing(fadeAnim,{
      toValue: 1,
      duration: 3000,
      useNativeDriver: true ,
    }).start();
  };

  const textOut = ()=>{
    Animated.timing(fadeAnim,{
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const imageIn = ()=>{
    Animated.timing(fadeImage,{
      toValue: 1,
      duration: 3000,
      useNativeDriver: true ,
    }).start();
  };

  const imageOut = ()=>{
    Animated.timing(fadeImage,{
      toValue: 0,
      duration: 3000,
      useNativeDriver: true ,
    }).start();
  };

  const spin = fadeImage.interpolate({
    inputRange: [0, 0.5],
    outputRange: ["0deg", "360deg"],
  });




  return (
     <View style={styles.container}>
        <ImageBackground style={styles.background} 
          source={require('./assets/hinh.jpg')}
          resizeMode="contain"
        >
          <Animated.View 
            style={[ styles.view,
              {
                opacity: fadeAnim
              },
            ]}>         
            
            <Text style={styles.fadingText}>Image View</Text>       
          </Animated.View>

          <Animated.Image
                style={[styles.image1,
                {opacity: fadeImage}, {transform: [{ rotate: spin }],} ]}      
                  source={require('./assets/hinh1.png')}
          />

          <View style={styles.button}>
            <Button title="Text in" onPress={textIn}/>
            <Button title="Text out" onPress={textOut}/>
            <Button title="Image in" onPress={imageIn}/>
            <Button title="Image out" onPress={imageOut}/>           
          </View>
        </ImageBackground>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    
  },
  background:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  view:{
    backgroundColor:'red',
    width: 240,
    padding: 20,
  },
  fadingText:{
    fontSize: 25,
    marginLeft: 30,
    color:'white'

  },
  button:{
    width:  150,
    height: 50,
    flexBasis: 200,
    justifyContent: 'space-evenly',
    alignContent: 'center', 
    
  }, 
  image1:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
 
});
export default App;
