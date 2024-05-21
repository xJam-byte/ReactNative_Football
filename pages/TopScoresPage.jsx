import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, StyleSheet, Button, Text } from 'react-native';
import { Card, Text as KittenText} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TopScorersPage() {
  const [leagueId, setLeagueId] = useState('207');
  const [topScorers, setTopScorers] = useState([]);

  const fetchTopScorers = () => {
    if (!leagueId) {
        return;
    }
    
    fetch(`https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=${leagueId}&APIkey=a7527eca9b38392785db78d01d2a9e5184404920db0cd6467c83ea05b1b8ad7e`)
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                setTopScorers(data.result || []);
            } else {
                console.error("API returned error:", data);
            }
        })
        .catch(error => console.error('Error fetching top scorers:', error));
};

useEffect(() => {
    fetchTopScorers();
}, [leagueId]);


  return (
    <View style={styles.container}>
      <KittenText style={styles.title} category='h4'>Top Scorers</KittenText>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="League ID"
          value={leagueId}
          onChangeText={text => setLeagueId(text)}
        />
      </View>
      <ScrollView>
        {topScorers.map((player, index) => (
          <Card key={index} style={styles.card}>
            <View style={styles.playerInfo}>
              <KittenText category="h6">{player.player_name}</KittenText>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text>Team: {player.team_name}</Text>
              </View>
              <View style={styles.statItem}>
                <Text>Goals: {player.goals}</Text>
              </View>
              <View style={styles.statItem}>
                <Text>Assists: {player.assists || 'N/A'}</Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginBottom: 10,
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
    marginBottom: 10,
    marginVertical: 10,
  },
  button: {
    height: 40,
    width: 100,
    marginLeft: 10,
    marginBottom: 10,

  },
  card: {
    marginVertical: 8,
    padding: 16,
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    marginBottom: 8,
  },
});
