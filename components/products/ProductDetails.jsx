import { ScrollView ,View, Text , Image , TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

const ProductDetails = ({navigation}) => {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);
  const [pressed5, setPressed5] = useState(false);
  const [pressed6, setPressed6] = useState(false);
  const [pressed7, setPressed7] = useState(false);
  const [pressed8, setPressed8] = useState(false);
  return (
    <ScrollView>
    <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
            <View style={[{borderRadius:20,display:'flex', alignItems:'center', justifyContent:'center', width:'100%' , paddingHorizontal:20, paddingVertical:5 , marginTop:25}]}>
                <Image resizeMode='cover' source={require('../../assets/img1.jpg')} style={[{width:'100%', borderRadius:20}]}></Image>
            </View>
            <View style={[{justifyContent:'flex-start' , display:'flex' , alignItems:'flex-start', paddingHorizontal:35}]}>
                <Text style={[{fontSize:20 , fontWeight:700}]}>Brand Name</Text>
                <View style={[{paddingBottom:5}]}>
                    <Text style={[{fontSize:16 , fontWeight:400}]}>Product Name</Text>
                    <Text style={[{fontSize:16 , fontWeight:400}]}>Store Name</Text>
                </View>
                <View style={[{paddingBottom:5}]}>
                    <Text style={[{fontSize:16 , fontWeight:400}]}>Description: T-shirt</Text>
                    <Text style={[{fontSize:16 , fontWeight:400}]}>Minimum Order : All Sizes 3pcs</Text>
                </View>
                <View style={[{paddingBottom:5}]}>
                    <Text style={[{fontSize:16 , fontWeight:400}]}>Size:</Text>
                    <View style={[{ display:'flex', flexDirection:'row' , gap:5 , padding:5}]}>
                        <TouchableOpacity onPress={() => {setPressed1(!pressed1);setPressed2(false);setPressed3(false);setPressed4(false); setPressed5(false);setPressed6(false);setPressed7(false);setPressed8(false);}} style={[{ backgroundColor: pressed1 ? '#ff8e00' : 'white' , height: 43 , borderRadius: 20, alignItems: 'center', justifyContent:'center', display:'flex', borderWidth:1 , borderColor: pressed1 ? '#0B233C' : 'black'}]}>
                            <Text  style={[{ color: pressed1 ? '#0B233C' : 'black' , fontSize: 15 , fontFamily: 'poppins' , paddingHorizontal:10, }]}>Red</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setPressed2(!pressed2);setPressed1(false);setPressed3(false);setPressed4(false); setPressed5(false);setPressed6(false);setPressed7(false);setPressed8(false)}} style={[{backgroundColor: pressed2 ? '#ff8e00' : 'white' , height: 43 , borderRadius: 20, alignItems: 'center', justifyContent:'center', display:'flex',borderWidth:1 , borderColor: pressed1 ? '#0B233C' : 'black'}]}>
                            <Text style={[{color: pressed1 ? '#0B233C' : 'black', fontSize: 15 , fontWeight:600, fontFamily: 'poppins' , paddingHorizontal:10, }]}>Blue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setPressed3(!pressed3);setPressed1(false);setPressed2(false);setPressed4(false); setPressed5(false);setPressed6(false);setPressed7(false);setPressed8(false)}} style={[{backgroundColor: pressed3 ? '#ff8e00' : 'white' , height: 43 , borderRadius: 20, alignItems: 'center', justifyContent:'center', display:'flex',borderWidth:1, borderColor: pressed1 ? '#0B233C' : 'black' }]}>
                            <Text style={[{color: pressed1 ? '#0B233C' : 'black', fontSize: 15 , fontWeight:600, fontFamily: 'poppins' , paddingHorizontal:10, }]}>Green</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{ display:'flex', flexDirection:'row' , flexWrap:'wrap', gap:5 , paddingTop:5}]}>
                        <TouchableOpacity onPress={() => {setPressed4(!pressed4); setPressed5(false);setPressed6(false);setPressed7(false);setPressed8(false)}} style={[{ backgroundColor: pressed4 ? '#ff8e00' : 'white' , height: 50 , width:70, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex', borderWidth:1 , borderColor: pressed1 ? '#0B233C' : 'black'}]}>
                            <View style={[{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',}]}>
                                <Text  style={[{ color: pressed4 ? '#0B233C' : 'black' , fontSize: 15 , fontFamily: 'poppins' , fontWeight:500  }]}>28</Text>
                                <Text  style={[{ color: pressed4 ? '#0B233C' : 'black' , fontSize: 12 , fontFamily: 'poppins' ,  }]}>INR650</Text>
                            </View>
                            
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setPressed5(!pressed5);;setPressed4(false);setPressed6(false);setPressed7(false);setPressed8(false)}} style={[{backgroundColor: pressed5 ? '#ff8e00' : 'white' , height: 50 , width:70, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex',borderWidth:1 , borderColor: pressed1 ? '#0B233C' : 'black'}]}>
                            <View style={[{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',}]}>
                                <Text  style={[{ color: pressed5 ? '#0B233C' : 'black' , fontSize: 15 , fontFamily: 'poppins' , fontWeight:500  }]}>30</Text>
                                <Text  style={[{ color: pressed5 ? '#0B233C' : 'black' , fontSize: 12 , fontFamily: 'poppins' ,  }]}>INR650</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setPressed6(!pressed6);setPressed4(false); setPressed5(false);setPressed7(false);setPressed8(false)}} style={[{backgroundColor: pressed6? '#ff8e00' : 'white' , height: 50 , width:70, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex',borderWidth:1, borderColor: pressed1 ? '#0B233C' : 'black' }]}>
                            <View style={[{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',}]}>
                                <Text  style={[{ color: pressed6 ? '#0B233C' : 'black' , fontSize: 15 , fontFamily: 'poppins' , fontWeight:500  }]}>32</Text>
                                <Text  style={[{ color: pressed6 ? '#0B233C' : 'black' , fontSize: 12 , fontFamily: 'poppins' ,  }]}>INR650</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setPressed7(!pressed7);setPressed4(false); setPressed5(false);setPressed6(false);setPressed8(false)}} style={[{backgroundColor: pressed7? '#ff8e00' : 'white' , height: 50 , width:70, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex',borderWidth:1, borderColor: pressed1 ? '#0B233C' : 'black' }]}>
                            <View style={[{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',}]}>
                                <Text  style={[{ color: pressed7 ? '#0B233C' : 'black' , fontSize: 15 , fontFamily: 'poppins' , fontWeight:500  }]}>34</Text>
                                <Text  style={[{ color: pressed7 ? '#0B233C' : 'black' , fontSize: 12 , fontFamily: 'poppins' ,  }]}>INR650</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setPressed8(!pressed8);setPressed4(false); setPressed5(false);setPressed6(false);setPressed7(false)}} style={[{backgroundColor: pressed8 ? '#ff8e00' : 'white' , height: 50 , width:70, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex',borderWidth:1, borderColor: pressed1 ? '#0B233C' : 'black' }]}>
                            <View style={[{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',}]}>
                                <Text  style={[{ color: pressed8 ? '#0B233C' : 'black' , fontSize: 15 , fontFamily: 'poppins' , fontWeight:500  }]}>36</Text>
                                <Text  style={[{ color: pressed8 ? '#0B233C' : 'black' , fontSize: 12 , fontFamily: 'poppins' ,  }]}>INR650</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[{display:'flex', justifyContent:'center',alignItems:'center', paddingVertical:10}]}>
                        <TouchableOpacity onPress={() => navigation.navigate('SeeDetails')} style={[{backgroundColor: '#0B233C' , height: 43 , width:120, borderRadius: 10, alignItems: 'center', justifyContent:'center', display:'flex',borderWidth:1, borderColor: pressed1 ? '#0B233C' : 'black' }]}>
                            <Text style={[{color:'white', fontSize: 15 , fontWeight:600, fontFamily: 'poppins' , paddingHorizontal:10, }]}>Edit Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

            </View>
    </View>
    </ScrollView>
  )
}

export default ProductDetails