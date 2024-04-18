import { View, Text , TouchableOpacity, SafeAreaView , Image , StatusBar } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import ProductScreen from './Product';
import Header from '../Header'



const HomePage = ({ navigation }) => {
  return (
    
        
        <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
            <Text style={[{fontSize:20 , fontWeight:500 , padding: 35}]}> 
                Store Name
            </Text>
            <View style={[{display:'flex', alignItems:'center', justifyContent:'center', height:'60%' , gap:30}]}>
                <Text style={[{fontSize:20 , fontWeight:500}]}>You have no Products yet.</Text>
                <View style={[{padding:20}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Product')}  style={[{padding:50, backgroundColor: '#e7e7e7' , zIndex:-1 , borderRadius:11}]}>
                         <Icons style={[{}]} name='plus' size={32} color='#777777'></Icons>
                    </TouchableOpacity>
                </View>
                <View style={[{gap:40 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Product')} style={[{ backgroundColor: "#ff8e00" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                        <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Add Product</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
       

        </View>
    
  )
}

export default HomePage