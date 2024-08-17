// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const sliderWidth = Dimensions.get('window').width;
// const itemWidth = Math.round(sliderWidth * 0.8);
// const itemHeight = 250;

// interface CarouselItem {
//     title: string;
// }

// const UserHomeHomeCarousal: React.FC = () => {
//     const [entries, setEntries] = useState<CarouselItem[]>([
//         { title: 'Item 1' },
//         { title: 'Item 2' },
//         { title: 'Item 3' },
//     ]);

//     const carouselRef = useRef<Carousel<CarouselItem>>(null);

//     const renderItem = ({ item }: { item: CarouselItem }) => (
//         <View style={[styles.slide, { height: itemHeight }]}>
//             <Text style={styles.title}>{item.title}</Text>
//         </View>
//     );

//     return (
//         <Carousel
//             ref={carouselRef}
//             data={entries}
//             renderItem={renderItem}
//             sliderWidth={sliderWidth}
//             itemWidth={itemWidth}
//             itemHeight={itemHeight}
//         />
//     );
// };

// export default UserHomeHomeCarousal;

// const styles = StyleSheet.create({
//     slide: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5F5F5',
//         borderRadius: 8,
//         padding: 15,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

import React, {useRef} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
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
  {
    id: '4',
    title: 'Explore Your Talent',
    description: 'Enjoy special discounts, promotions, and perks reserve',
    backgroundColor: '#FFE082',
    img: require('../../../assets/Images/SliderImg/SliderImg1.png'),
    offer: 'Exclusive Offers',
  },
  // Add more items as needed
];

const UserHomeHomeCarousal = () => {
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({item}: {item: CarouselItem}) => (
    <View
      style={[styles.carouselItem, {backgroundColor: item.backgroundColor}]}>
      <View style={{flexDirection: 'row'}}>
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
    width: width * 0.9,
    height: height * 0.2,
    marginHorizontal: width * 0.05,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    paddingLeft: 80,
    marginTop: 12
  },
  offer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#426173',
    marginBottom: 10,
    paddingLeft: 80
  },
  description: {
    fontSize: 12,
    color: '#666',
    textAlign: 'start',
    paddingLeft: 80
  },
  image: {
    width: width * 0.3,
    height: height * 0.2,
    marginTop: -50,
    // zIndex: 20,
    marginRight:50
  },
});

export default UserHomeHomeCarousal;
