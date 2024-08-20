import React, { useRef } from 'react';
import { View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Assuming tablet screens have a width greater than or equal to 768
const isTablet = width >= 768;

interface CarouselItem {
  id: string;
  title: string;
  description: any;
  backgroundColor: string;
  img: any;
  offer: string;
}

const data: CarouselItem[] = [
  {
    id: '1',
    title: 'Explore Your Talent',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    img: require('../../../assets/Images/SliderImg/SliderImg1.png'),
    offer: 'Exclusive Offers',
  },
  {
    id: '2',
    title: 'Explore Your Talent',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    img: require('../../../assets/Images/SliderImg/SliderImg1.png'),
    offer: 'Exclusive Offers',
  },
  {
    id: '3',
    title: 'Explore Your Talent',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    img: require('../../../assets/Images/SliderImg/SliderImg1.png'),
    offer: 'Exclusive Offers',
  },
  // ... other items
];

const UserHomeHomeCarousal: React.FC = () => {
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View style={[styles.carouselItem, { backgroundColor: item.backgroundColor }]}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.offer}>{item.offer}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View>
          <Image source={item.img} style={styles.image} />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={item => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: isTablet ? width * 0.8 : width * 0.9,
    height: isTablet ? height * 0.5 : height * 0.2,
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.04,
    padding: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  title: {
    fontSize: isTablet ? width * 0.035 : width * 0.045,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.01,
    paddingLeft: isTablet ? width * 0.15 : width * 0.19,
    // marginTop: height * 0.012,
    marginTop: isTablet ? height * 0.08 : height * 0.012,
  },
  offer: {
    fontSize: isTablet ? width * 0.03 : width * 0.035,
    fontWeight: 'bold',
    color: '#426173',
    marginBottom: height * 0.02,
    paddingLeft: isTablet ? width * 0.15 : width * 0.19,
  },
  description: {
    fontSize: isTablet ? width * 0.025 : width * 0.03,
    color: '#666',
    textAlign: 'left',
    paddingLeft: isTablet ? width * 0.15 : width * 0.19,
  },
  image: {
    width: isTablet ? width * 0.25 : width * 0.3,
    height: isTablet ? height * 0.55 : height * 0.2,
    marginTop: isTablet ? height * -0.08 : height * -0.067,
    marginRight: isTablet ? width * 0.1 : width * 0.15,
    overflow: 'hidden',
  },
});

export default UserHomeHomeCarousal;
