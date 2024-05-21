import { Card, Text as KittenText } from '@ui-kitten/components';
import React, { useEffect, useState  } from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'

export default function MainPage() {
    [info, setInfo] = useState([])

    useEffect(() =>{
        fetch("https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=a7527eca9b38392785db78d01d2a9e5184404920db0cd6467c83ea05b1b8ad7e")
        .then(response => response.json())
        .then(data => setInfo(data.result))
        .catch(error => console.error('Error fetching posts:', error));
    }, [])
  return (
    <View style={styles.container}>
      <KittenText style={styles.title} category='h4'>Countries</KittenText>
      {info.map((one, index) => (
        <Card key={index} style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <KittenText category="h5" >{one.country_name}</KittenText>
              <Text>Country key: {one.country_key}</Text>
            </View>
            <Image style={styles.image} source={{ uri: one.country_logo }}/>
          </View>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});