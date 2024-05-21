import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet , Image} from 'react-native';

const listings = [
  
  { image:source=require('../assets/a4.png') , id: '1', title: '2019 Audi A4', konum: 'Ankara' , fiyat:'1.900.000 TL' , model:'A4' , yıl:'2019' , yakıt: '' , vites: 'Otomatik' , renk:'Beyaz' , km:'40.000' ,  },
  { image:source=require('../assets/w205.png') , id: '2', title: '2020 Mercedes C200', konum: 'İzmir' , fiyat:'2.200.000 TL' , model:'C Serisi' , yıl:'2020' , yakıt: 'Benzin' , vites: 'Otomatik' , renk:'Mavi' , km:'20' },
  { image:source=require('../assets/civicfc5.png') , id: '3', title: '2022 Honda Civic', konum: 'Van' , fiyat:'1.253.900 TL' , model:'Civic' , yıl:'2022' , yakıt: 'Benzin + Lpg' , vites: 'Otomatik' , renk:'Beyaz' , km:'75.000' },
  { image:source=require('../assets/passat.jpg') , id: '4', title: '2020 Volkswagen Passat', konum: 'Kars' , fiyat:'1.500.000' , model:'Passat' , yıl:'2020' , yakıt: 'Benzin' , vites: 'Otomatik' , renk:'Siyah' , km:'144.000' },
  { image:source=require('../assets/corolla.jpg') , id: '5', title: '2021 Toyota Corolla', konum: 'Kocaeli' , fiyat:'962.500 TL' , model:'Corolla' , yıl:'2021' , yakıt: 'Benzin' , vites: 'Otomatik' , renk:'Beyaz' , km:'38.000' },
  { image:source=require('../assets/a5.png') , id: '6', title: '2022 Audi A5 ', konum: 'Of' , fiyat:'2.375.000 TL' , model:'A5' , yıl:'2022' , yakıt: 'Benzin' , vites: 'Otomatik' , renk:'Gri' , km:'115.000' },
  { image:source=require('../assets/s90.png') , id: '7', title: '2019 Volvo S90', konum: 'Erzincan' , fiyat:'3.325.000 TL' , model:'S90' , yıl:'2019' , yakıt: 'Dizel' , vites: 'Otomatik' , renk:'Beyaz' , km:'58.000' },
  { image:source=require('../assets/megane4.png') , id: '8', title: '2017 Renault Megane 4', konum: 'Erzurum' , fiyat:'828.000 TL' , model:'Megane' , yıl:'2017' , yakıt: 'Dizel' , vites: 'Otomatik' , renk:'Gümüş Gri' , km:'170.000' },
  { image:source=require('../assets/e200d.jpg') , id: '9', title: '2023 Mercedes E200d', konum: 'Kırıkkale' , fiyat:'3.750.000 TL' , model:'E Serisi' , yıl:'2023' , yakıt: 'Dizel' , vites: 'Otomatik' , renk:'Beyaz' , km:'26.000' },
  { image:source=require('../assets/f10.5.jpg') , id: '10', title: '2015 Bmw 520d ', konum: 'Ardahan' , fiyat:'1.885.000 TL' , model:'5 Serisi' , yıl:'2015' , yakıt: 'Benzin' , vites: 'Otomatik' , renk:'Lacivert' , km:'161.000' },
  { image:source=require('../assets/f90.png') , id: '11', title: '2018 Bmw 520i ', konum: 'İstanbul' , fiyat:'2.200.000 TL' , model:'5 Serisi' , yıl:'2018' , yakıt: 'Benzin' , vites: 'Otomatik' , renk:'Siyah' , km:'50.000' , }

];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })} style={styles.item}>

            <Image
                 style={styles.imageStyle}
                 source= {item.image}
                              />

            <br/>

            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#4D869C'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: '#CDE8E5',
  },
  title: {
    fontSize: 18,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
   imageStyle: {
    height: 150,
    width: 280,
    borderRadius: 25,
    alignContent: 'center',
    alignSelf: 'center',
  },
});