import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import LottieView from 'lottie-react-native';

export interface LottieContainerProps {
    name: string;
    source: string;
    author: string;
    path: string;
  
}
const LottieContainer: React.FC<LottieContainerProps> = ({
    name, 
    source,
    author,
    path
}) => {
    const [show, setShow] = useState<boolean>(true)
  return (
   <Fragment>
     <View style={styles.lottieContainer}>
  {show &&  <LottieView source={path} autoPlay loop={false} resizeMode='contain'
   style={{width: 200,
    height: 100
   }}
   onAnimationFinish={() => setTimeout(() => setShow(false), 1000)}
   />}

 
    </View>
    <Button title="Go to web" onPress={async ()=> await Linking.openURL(source)} />
   {/* <Button title="Go to website" onPress={async () => await Linking.openURL(source)}/> */}
   <Button title={`Play ${name} by ${author}`} onPress={() =>  setShow(true)}/>
   </Fragment>
  )
}

export default LottieContainer

const styles = StyleSheet.create({
    lottieContainer: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
})