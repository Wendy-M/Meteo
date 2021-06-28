import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';



function ActualWeather () {

  const [ville, setVille] = useState('Nice');
  const [forecast, setForecast]= useState(null);


  const fetchWeather =()=>{
    const options = {
      method: 'GET',
    }
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        ville +
        '&appid=7da54c660e21dcb6e237d077c9b1763f',
      options,
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const meteo = responseObject;
  
          setForecast(meteo);
          console.log(forecast)
        },
  
        (error) => {
          console.log(error);
        },
      );
  }
  

  useEffect (()=>{
    fetchWeather();
  },[])

    return (
      <SafeAreaView style={styles.container}  >
        <View style={{flex:1}}>
        <Text style={{fontSize:33, textAlign:'center', color:'black',marginTop:20, color:'white'}}>METEO DAY</Text>
        <Text style={{marginBottom:50, textAlign:'center', color:'white', fontSize:20}}>{ville}</Text>
        <Text style={{fontSize:25, color:'white'}}>{moment().format('LLLL')}</Text>
        <View style={{flexDirection:'row', flex:1}}>
        
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
          <Image style={{width: 100, height: 50, marginTop: 10}} source={{uri:'http://openweathermap.org/img/wn/10d@2x.png'}}/>
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white'}}>18°c</Text>

     
        </View>
       
        
          
          
   
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{color:'white'}}>Vitesse du vent</Text>
          <Text style={{color:'white'}}>Température Actuelle</Text>
        </View>
        </View>
   
       
       
       
        
     
   
    </SafeAreaView>
    )
}









export default function App() {
  return (
    
 
      <ActualWeather/>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
