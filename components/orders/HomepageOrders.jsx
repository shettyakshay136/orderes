import { View, Text , Image , TouchableOpacity , TextInput } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Feather'
import Icon1 from '@expo/vector-icons/MaterialIcons'
import Icon2 from '@expo/vector-icons/Ionicons'
import Icon3 from '@expo/vector-icons/Entypo'

const HomepageOrders = ({ navigation }) => {
  return (
    
    <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
        <View style={[{ paddingHorizontal:20,paddingVertical:20 , marginTop:30,}]}>
            <View style={[{alignItems:'flex-end'}]}>
                <TouchableOpacity style={[{ backgroundColor: "#0b233c" ,width:80, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
                    <Text style={[{ color: "white" , fontSize: 13, fontFamily: 'poppins' , fontWeight:600 }]}>Print</Text>
                    <Icon name='edit' size={18} color='#ff8e00'></Icon>
                </TouchableOpacity>

            </View>
            <View style={[{height:'80%',display:'flex', gap:20 , paddingVertical:10}]}>
                <View style={[{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'row',height:50 , width:'100%', borderWidth:0.8 , fontWeight:500, fontSize:12 , paddingHorizontal:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12 ,}]}>
                    <TextInput
                        style={[{}]}
                        placeholder='Search Here'
                        placeholderTextColor='#0B233C'
            
                    />
                    <Icon name='search' size={17} color='white' style={[{backgroundColor:'#0B233C' , display:'flex', padding:12 , borderRadius:5}]}></Icon>
                </View>
                <View style={[{display:'flex', alignItems:'center', justifyContent:'center' , borderTopWidth:3 , borderRadius:28 , borderColor:'#ff8e00' ,}]}>
                    <View style={[{height:'auto', width:'100%', backgroundColor:'white', borderRadius:20 , padding:15,}]}>
                        <View style={[{display:'flex', flexDirection:'row', justifyContent:'space-between' , borderBottomWidth:1 , alignItems:'center'}]}>
                            <View style={[{display:'flex' , paddingHorizontal:10 , paddingBottom:10 }]}>
                                <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Date</Text>
                                <Text style={[{fontSize:15, fontWeight:600,}]}>20 April 2003</Text>
                            </View>
                            <Icon1 size={24} name='verified'/>

                        </View>
                        <View style={[{display:'flex', flexDirection:'column' , borderBottomWidth:1 , padding:10}]}>
                            <View>
                                <Text style={[{fontSize:15 , fontWeight:600}]}>Store Name Here</Text>
                            </View>
                            <View style={[{paddingHorizontal:2, paddingVertical:2}]}>
                                <View style={[{flexDirection:'row' , alignItems:'center', gap:5}]}>
                                    <Icon2 style={[{color:'#757575'}]} size={12} name='person'/>
                                    <Text style={[{color:'#757575'}]}>Store</Text>
                                </View>
                                <View style={[{flexDirection:'row' , alignItems:'center', gap:5}]}>
                                    <Icon3 style={[{color:'#757575'}]} size={12} name='location-pin'/>
                                    <Text style={[{color:'#757575'}]}>Store</Text>
                                </View>
                            </View>

                        </View>
                        <View style={[{display:'flex', flexDirection:'row', justifyContent:'space-between' , alignItems:'center'}]}>
                            <View style={[{display:'flex' , padding:10 }]}>
                                <Text style={[{fontSize:15, fontWeight:400,}]}>Total Order value</Text>
                            </View>
                            <Text style={[{fontSize:15, fontWeight:600,}]}>500000INR</Text>

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('AddOrders')} style={[{ backgroundColor: "#0B233C" , height: 43 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                            <Text style={[{ color: "white" , fontWeight:600, fontSize: 15 , fontFamily: 'poppins' }]}>See Details</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    </View>
  )
}

export default HomepageOrders