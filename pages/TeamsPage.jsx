import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Image, StyleSheet, Text, Button } from 'react-native';
import { Card, Text as KittenText } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

export default function TeamsPage() {
  const [teamId, setTeamId] = useState('96');
  const [info, setInfo] = useState([]);
  const { t } = useTranslation();

  const fetchData = () => {
    fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamId}&APIkey=a7527eca9b38392785db78d01d2a9e5184404920db0cd6467c83ea05b1b8ad7e`)
      .then(response => response.json())
      .then(data => setInfo(data.result))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    fetchData();
  };

  return (
    <View style={styles.container}>
    <KittenText style={styles.title} category='h4'>Teams</KittenText>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={t('')}
        value={teamId}
        onChangeText={text => setTeamId(text)}
      />
      <Button style={styles.button} onPress={handleSearch} title='Search'></Button>
    </View>
    {info.map((one, index) => (
      <Card key={index} style={styles.card}>
        <View>
          <KittenText category="h5">{one.team_name}</KittenText>
          <Text>Team key: {one.team_key}</Text>
          <Image source={{ uri: `${one.team_logo}` }}/>
        </View>
        <Text>Players:</Text>
        <ScrollView>
          {one.players.map((player, idx) => (
            <Card key={idx} style={styles.playerCard}>
              <View>
                <KittenText category="h5">{player.player_name}</KittenText>
                <Text>Player key: {player.player_key}</Text>
                <Text>Player age: {player.player_age}</Text>
                <Text>Player position: {player.player_type}</Text>
              </View>
            </Card>
          ))}
        </ScrollView>
      </Card>
    ))}
  </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    title: {
      marginVertical: 8,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    button: {
      height: 40,
    },
    card: {
      marginVertical: 8,
    },
    playerCard: {
      marginVertical: 4,
    },
  });
  
