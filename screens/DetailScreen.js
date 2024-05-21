import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container } >
      <Text style={styles.title2}>{item.title}</Text>
      <Text>
            


     <br/>
      <br/>

<Text style={styles.item}>
        Fiyat ~ {item.fiyat}<br/>
        Konum ~ {item.konum}<br/>
        Model ~ {item.model}<br/>
        Yıl ~ {item.yıl}<br/>
        Yakıt ~ {item.yakıt} <br/>
        Vites ~ {item.vites}<br/>
        Renk ~ {item.renk}<br/>
        Km ~ {item.km} <br/>
  </Text>      
        
    </Text >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#CDE8E5'
  },
  item: {
    fontSize: 25,
    fontFamily: '',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 30,
    fontFamily: 'comic-sans',
    fontWeight: 'bold',
  },
});


