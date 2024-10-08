import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  gradientColors: string[]; 
  img: any;
  offer: any;
}

const data: CarouselItem[] = [
  {
    id: '1',
    title: 'Wedding',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    gradientColors: ['#8EE88E', '#80D180', '#6BAE6B'], // Example gradient colors
    img: require('../../../assets/Images/event/weddingImg.png'),
    offer: 'Exclusive Offers',
  },
  {
    id: '2',
    title: 'Birthday',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: 'B2A7FB',
    gradientColors: ['#9C8EEF', '#6C57EC', '#5443BB'], // Example gradient colors
    img: require('../../../assets/Images/event/BithDayImg.png'),
    offer: 'Exclusive Offers',
  },
  {
    id: '3',
    title: 'Baby Show',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    gradientColors: ['#E89469', '#DE6325', '#B5511F'], // Example gradient colors
    img: require('../../../assets/Images/event/babyShow.png'),
    offer: 'Exclusive Offers',
  },
  {
    id: '4',
    title: 'Cuisine & Pastry',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#82B1FF',
    gradientColors: ['#9C8EEF', '#6C57EC', '#5443BB'], // Example gradient colors
    img: require('../../../assets/Images/category/cuisine.png'),
    offer: 'Exclusive Offers',
  },
  // Add more items as needed
];

const EventCarousal = () => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }: { item: CarouselItem }) => (
<SafeAreaView>

<LinearGradient
      colors={item.gradientColors}
      style={styles.carouselItem}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ flexDirection: 'row', gap: width * 0.010 }}>
        <View>
          <Image source={item.img} style={styles.image} />
        </View>
        
      </View>
    
    </LinearGradient>
    <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
</SafeAreaView>
  );

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={handleScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: isTablet ? width * 0.35 :  width * 0.38,
    height: isTablet ? height * 0.6 : height * 0.18,
    marginHorizontal: width * 0.01,
    borderRadius:  isTablet ? width * 0.03 : width * 0.080,
    // padding: width * 0.020,
    marginLeft: width *  0.050,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
    overflow: 'hidden',
  },
  title: {
    fontSize: width * 0.03,
    color: '#6C6C6C',
    marginBottom: height * 0.010,
    marginTop: height *  0.012,
    textAlign: 'center',
    // paddingHorizontal: width * 0.088,
  },
  image: {
    width: isTablet ? width * 0.35 : width * 0.4,
    height: isTablet ? height * 0.6 : height * 0.18,
    // overflow: 'hidden',
    // zIndex: 20,
  },
});

export default EventCarousal;
