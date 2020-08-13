import React from 'react';
import{
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

class App extends React.Component {
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.title}> 
          Marche à suivre
        </Text>
        <Text style={styles.paragraph}>
          Un RÊVE écrit avec une date devient un OBJECTIF.
        </Text>
        <Text style={styles.paragraph}>
          Un OBJECTIF décomposé en plusieurs étapes devient un PLAN.
        </Text>
        <Text style={styles.paragraph}>
          Un PLAN soutenu par des actions devient
        </Text>
        <Text style={styles.paragraph}>
          REALITE.
        </Text>
        <Text style={styles.signature}>
          Auteur inconnu.
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#ffffd0ff'
  },
  textColor: {
    color: '#402000ff',
  },
  title: {
    fontSize: 30,
    paddingVertical: 80
  },
  paragraph: {
    textAlign : 'center'
  },
  signature: {
    fontWeight: 'bold',
    paddingVertical: 80
  }
});

export default App;