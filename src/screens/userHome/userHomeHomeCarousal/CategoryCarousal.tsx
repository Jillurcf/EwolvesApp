import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');
const isTablet = width >= 768

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

const CategoryCarousal = () => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <LinearGradient
      colors={item.gradientColors}
      style={styles.carouselItem}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ flexDirection: 'row', gap: width * 0.03 }}>
        <View>
          <Image source={item.img} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </LinearGradient>
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
    width: isTablet ? width * 0.4 : width * 0.36,
    height: isTablet ? height * 0.2 : height * 0.05,
    marginHorizontal: isTablet ? width * 0.00 : width * 0.02,
    borderRadius: isTablet ? width * 0.05: width * 0.08,
    marginLeft: width *  0.050,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.040,
  },
  title: {
    fontSize: width * 0.03,
    color: 'white',
    marginBottom: height * 0.020,
    marginTop: height * 0.015,
  },
  image: {
    width: isTablet ? width * 0.1 : width * 0.08,
    height: isTablet ? height * 0.09 : height * 0.05,
  },
});

export default CategoryCarousal;
