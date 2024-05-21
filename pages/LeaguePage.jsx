import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, Text as KittenText } from '@ui-kitten/components';

export default function LeaguePage() {
    // https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=a7527eca9b38392785db78d01d2a9e5184404920db0cd6467c83ea05b1b8ad7e
  
    [info, setInfo] = useState([])

    useEffect(() =>{
        fetch("https://apiv2.allsportsapi.com/football/?&met=Leagues&APIkey=a7527eca9b38392785db78d01d2a9e5184404920db0cd6467c83ea05b1b8ad7e")
        .then(response => response.json())
        .then(data => setInfo(data.result))
        .catch(error => console.error('Error fetching posts:', error));
    }, [])
    return (
        <View>
          <KittenText style={styles.title} category='h4'>Leagues</KittenText>
          {info.map((one, index) => (
            <Card key={index} style={styles.card}>
              <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                  <KittenText category="h5">{one.league_name}</KittenText>
                  <Text>League key: {one.league_key}</Text>
                  <Text>Country name: {one.country_name}</Text>
                  <Text>Country key: {one.country_key}</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: one.league_logo }} />
                  <Image style={styles.image} source={{ uri: one.country_logo }} />
                </View>
              </View>
            </Card>
          ))}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      title: {
        marginVertical: 8,
      },
      card: {
        marginVertical: 8,
      },
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      textContainer: {
        flex: 1,
        marginRight: 10,
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 50,
        height: 50,
        marginVertical: 5,
      },
    });
// const styles = StyleSheet.create({
//     container: {
//       alignSelf: 'flex-start',
//       alignItems: 'center',
//       marginTop: 8,
//       width: '100%',
//     },
//     text: {
//       fontSize: 24,
//       marginBottom: 16,
//     },
//     image: {
//       width: 40,
//       height: 40,
//       resizeMode: 'contain', // Растягивает изображение так, чтобы оно полностью поместилось в заданной области
//     },
//   });