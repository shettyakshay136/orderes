import { View, Text , TextInput, TouchableOpacity , Image } from 'react-native'
import React, { useState , useRef } from 'react';
import Icon from '@expo/vector-icons/Fontisto'
import Icon1 from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import EditStore from '../store/EditStore';


const Stores = ({ navigation }) => {
  return (
    
    <View style={[{ height:'100%', backgroundColor:'white'}]}>
      <View style={[{ paddingHorizontal:20,paddingTop:20 , gap:20}]}>
        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
          <View>
           <Image source={require('../../assets/img1.jpg')} style={[{ height:50, width:50, borderRadius:500}]}></Image>
          </View>
          <View style={{gap:10 , alignItems:'center'}}>
            <Text style={{fontSize:18 , fontWeight:600}}>100</Text>
            <Text style={{fontSize:18 , fontWeight:600}}>connections</Text>
          </View>
          <View style={{gap:10 ,  alignItems:'center'}}>
            <Text style={{fontSize:18 , fontWeight:600}}>10</Text>
            <Text style={{fontSize:18 , fontWeight:600}}>posts</Text>
          </View>

        </View>
        <View style={[{display:'flex', flexDirection:'column' , padding:10 , gap:7}]}>
          <View>
            <Text style={[{fontSize:18 , fontWeight:600}]}>Store Name Here</Text>
          </View>
          <Text style={[{fontSize:15 , fontWeight:400}]}>Username</Text>
          <Text style={[{fontSize:15 , fontWeight:400}]}>Owner</Text>
          <Text style={[{fontSize:15 , fontWeight:400}]}>Address</Text>
          <Text style={[{fontSize:15 , fontWeight:400}]}>Phone NUmber</Text>
          <Text style={[{ marginTop:10,fontSize:12 , fontWeight:400}]}>Description fom the Store</Text>
        

        </View>
        <View>
          <Text style={[{fontSize:18 , fontWeight:600}]}>Pictures of your store...</Text>
          <View style={[{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', width:'100%' , paddingHorizontal:20, paddingVertical:10 , gap:10}]}>
            <Image resizeMode='cover' source={require('../../assets/img1.jpg')} style={[{width:'50%', height:150, borderRadius:20}]}></Image>
            <Image resizeMode='cover' source={require('../..//assets/img1.jpg')} style={[{width:'50%', height:150, borderRadius:20}]}></Image>
          </View>
          <View style={{flexDirection:'row' , gap:10, alignItems:'center', display:'flex' ,justifyContent:'center', flexWrap:'wrap' , paddingVertical:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('EditStore')} style={[{ backgroundColor: "#0B233C" , height: 43 , width: 150 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ backgroundColor: "#0B233C" , height: 43 , width: 150 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Share Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

        
  )
}

export default Stores