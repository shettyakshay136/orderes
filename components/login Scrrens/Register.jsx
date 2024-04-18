import { ScrollView,View, Animated, StyleSheet, TouchableOpacity, Image , SafeAreaView , Text , TextInput , Linking } from 'react-native';
import React from 'react'

const Register = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#eaf0ff',height: '100%',display: 'flex',gap: 50,}}>
        <View style={[{ backgroundColor: '#0b233c', height:310, marginLeft:15 , marginRight:15,  }]}>
            <View style={[{alignItems: 'center', justifyContent:'center', display:'flex', marginTop: 60}]}>
                <Text style={[{ color: 'white', fontSize:20 ,}]}>
                    Grayswipe
                </Text>
                <Text style={[{ color: 'white', fontSize:30 ,  fontWeight: 600 , padding: 10}]}>
                Create account
                </Text>
                <Image source={require('../../assets/phone.png')} style={[{Width:300, height:230, resizeMode:'contain' , zIndex:1}]}></Image>
            </View>
            <Image source={require('../../assets/svg.png')} style={[{width:'auto' ,resizeMode: 'cover' , marginTop: -380, borderBottomLeftRadius: 40 , borderBottomRightRadius: 40}]}></Image>


        </View>
        <ScrollView style={[{}]}>
        <View style={[{ paddingVertical:10, paddingLeft:40 , paddingRight:40 , paddingTop:8, gap:15}]}>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Owner Name</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Owner full name'
                />
            </View>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Store Name</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Store name'
                />
            </View>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Phone Number</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Phone Number'
                />
            </View>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Username</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Username'
                />
            </View>
            <View style={[{}]}>
                <Text style={[{fontSize: 15 , fontWeight: 600}]}>Email</Text>
                <TextInput
                 style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                 placeholder='Enter Email Address'
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Registersuss')} style={[{ backgroundColor: "#0b233c" , marginTop:15 , height: 43 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Next</Text>
            </TouchableOpacity>
           
            
         
          
            
        </View>
        </ScrollView>
       
      
    </View>
  )
}

export default Register