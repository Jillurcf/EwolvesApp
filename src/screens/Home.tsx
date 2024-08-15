import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import LottieContainer, { LottieContainerProps } from '../component/LottieContainer';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import Animated, {FadeIn} from 'react-native-reanimated';
const {width, height} = Dimensions.get("screen")
interface HomeProps {}

const Home: React.FC = (props: HomeProps) => {
  return (
    <SafeAreaView style={{height: height * 1, backgroundColor: "skyblue"}}>
     <Animated.ScrollView entering={FadeIn.duration(500)}>
         <Text style={{textAlign:"center", fontSize: 32, fontWeight: 'bold', color: "white"}}>Home</Text>
         {animations.map((animation, index) => (
            <LottieContainer key={index} {...animation} />
         ))}
     </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});


const animations: LottieContainerProps[] = [
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
    {
        name: 'HandsOff',
        source: "https://lottiefiles.com/animations/roller-skating-donut-gE2gHMJLx4",
        author: "Jillur",
        path: require('../assets/lottieFiles/handOff.json')

    },
]