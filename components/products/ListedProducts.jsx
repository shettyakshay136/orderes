import { View, Text , Image, TextInput , StyleSheet, TouchableOpacity , ScrollView, } from 'react-native'
import React, { useState , useRef } from 'react';
import Icon from '@expo/vector-icons/Fontisto'
import Swiper from 'react-native-swiper';
import Icon1 from 'react-native-vector-icons/MaterialIcons';



const ListedProducts = ({navigation}) => {
    const images = [
        { path: require('../../assets/img1.jpg'), text: 'Image 1' },
        { path: require('../../assets/img1.jpg'), text: 'Image 2' },
        // Add more images as needed
      ];
    
      const renderImage = (image, index) => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , borderTopLeftRadius:20 , borderTopRightRadius:20   }} key={index}>
            <Image source={image.path} style={{ width: '100%', resizeMode: 'cover' , }} />
            <Text style={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{image.text}</Text>
        </View>
      );

  
  return (
        <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
            <View style={[{display:'flex', alignItems:'center', justifyContent:'center', height:'60%' , gap:30 , paddingHorizontal:20,paddingVertical:1}]}>
                <View style={[{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'row',height:50 , width:'100%', borderWidth:0.8 , fontWeight:500, fontSize:12 , paddingHorizontal:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12 ,}]}>
                    <TextInput
                        style={[{}]}
                        placeholder='Search Here'
                        placeholderTextColor='#0B233C'
            
                    />
                    <Icon name='search' size={17} color='white' style={[{backgroundColor:'#0B233C' , display:'flex', padding:12 , borderRadius:5}]}></Icon>
                </View>
                <View style={{ flex: 1 ,  }}>
                    <View style={[{ height: 250 ,  }]}>
                        <Swiper
                            style={{borderRadius:20}}
                            loop={false}
                            showsButtons={true}
                            showsPagination={false}
                            nextButton={<Icon1 name='arrow-forward-ios' size={24}></Icon1>}
                            prevButton={<Icon1 name='arrow-back-ios' size={24}></Icon1>}
                         >
                            {images.map((image, index) => renderImage(image, index))}
                        </Swiper>
                    </View>
      
                    <View style={{ backgroundColor: '#fff', padding: 15 , borderBottomLeftRadius:20 , borderBottomRightRadius:20 }}>
                        <View  style={{ backgroundColor: '#fff', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
                            <Text style={{ color: '#000', fontSize: 15 , fontWeight:600 }}>See Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                    
            

            </View>
       

        </View>
  )
}


export default ListedProducts