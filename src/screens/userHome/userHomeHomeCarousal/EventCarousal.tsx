import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  gradientColors: string[]; // Added to hold gradient colors
}

const data: CarouselItem[] = [
  {
    id: '1',
    title: 'Aesthetics',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    gradientColors: ['#E89469', '#DE6325', '#B5511F'], // Example gradient colors
    img: require('../../../assets/Images/category/Aesthetics.png'),
    offer: 'Exclusive Offers',
  },
  {
    id: '2',
    title: 'Cuisine & Pastry',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#82B1FF',
    gradientColors: ['#9C8EEF', '#6C57EC', '#5443BB'], // Example gradient colors
    img: require('../../../assets/Images/category/cuisine.png'),
    offer: 'Exclusive Offers',
  },
  {
    id: '3',
    title: 'Aesthetics',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    gradientColors: ['#E89469', '#DE6325', '#B5511F'], // Example gradient colors
    img: require('../../../assets/Images/category/Aesthetics.png'),
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
      <View style={{ flexDirection: 'row', gap: 10 }}>
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
    width: width * 0.36,
    height: height * 0.18,
    marginHorizontal: width * 0.02,
    borderRadius: 20,
    padding: 20,
    marginLeft: width *  0.050,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  title: {
    fontSize: 12,
    color: '#6C6C6C',
    marginBottom: 10,
    marginTop: 12,
    textAlign: 'center',
    // paddingHorizontal: width * 0.088,
  },
  image: {
    width: width * 0.08,
    height: height * 0.05,
  },
});

export default EventCarousal;
