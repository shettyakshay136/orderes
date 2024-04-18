import { ScrollView, View, Text , TextInput , TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icons from '@expo/vector-icons/AntDesign'



const EditStore = ({ navigation }) => {
  const [description, setDescription] = useState('');

  const handleChange = (text) => {
    setDescription(text);
  };
  
  
  return (
    <ScrollView>
    <View style={[{ height:'100%', width:'100%', display:'flex', backgroundColor:'white' , paddingVertical:20}]}>
      <View style={[{ paddingHorizontal:30,paddingTop:20 , gap:10 ,}]}>
        <View style={[{}]}>
          <Text style={[{fontSize: 15 , fontWeight: 600}]}>Store Name</Text>
            <TextInput
              style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
               placeholder='Enter Store Name Here'
            />
        </View>
        <View style={[{}]}>
          <Text style={[{fontSize: 15 , fontWeight: 600}]}>Description</Text>
            <TextInput
              style={[{minHeight:100, borderWidth:0.8 , padding:10 , borderRadius:5 , backgroundColor:'white'}]}
              multiline={true}
              numberOfLines={6} // Adjust as needed
              placeholder="Description of the store"
              onChangeText={handleChange}
              value={description}
            />
          </View>
        <View style={[{}]}>
          <Text style={[{fontSize: 15 , fontWeight: 600}]}>Store Phone Number</Text>
            <TextInput
              style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
               placeholder='Enter store contact number'
            />
        </View>
        <View style={[{}]}>
          <Text style={[{fontSize: 15 , fontWeight: 600}]}>Address</Text>
            <TextInput
              style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
               placeholder='Enter store address'
            />
        </View>
        <View style={[{}]}>
          <Text style={[{fontSize: 15 , fontWeight: 600}]}>Location</Text>
            <TextInput
              style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
               placeholder='Enter store location'
            />
        </View>
        <Text style={[{fontSize: 15 , fontWeight: 600}]}>Add pictures of your Store...</Text>
        <View style={[{display:'flex' , flexDirection:'column', gap:20 , alignItems:'center', justifyContent:'center'}]}>
          <View style={[{flexDirection:'row' , gap:20}]}>
            <TouchableOpacity style={[{padding:50, backgroundColor: '#e7e7e7' , zIndex:-1 , borderRadius:11}]}>
              <Icons style={[{}]} name='plus' size={32} color='#777777'></Icons>
            </TouchableOpacity>
            <TouchableOpacity style={[{padding:50, backgroundColor: '#e7e7e7' , zIndex:-1 , borderRadius:11}]}>
              <Icons style={[{}]} name='plus' size={32} color='#777777'></Icons>
            </TouchableOpacity>

          </View>
          <View style={[{flexDirection:'row', gap:20}]}>
            <TouchableOpacity style={[{padding:50, backgroundColor: '#e7e7e7' , zIndex:-1 , borderRadius:11}]}>
              <Icons style={[{}]} name='plus' size={32} color='#777777'></Icons>
            </TouchableOpacity>
            <TouchableOpacity style={[{padding:50, backgroundColor: '#e7e7e7' , zIndex:-1 , borderRadius:11}]}>
              <Icons style={[{}]} name='plus' size={32} color='#777777'></Icons>
            </TouchableOpacity>

          </View>
          <View style={{alignItems:'center', justifyContent:'center', display:'flex'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Store')} style={[{ backgroundColor: "#0B233C" , height: 43 , width: 150 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
              <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins' }]}>Add Store</Text>
            </TouchableOpacity>
          </View>

        </View>
      
      </View>
    </View>
    </ScrollView>
    
    
  )
}

export default EditStore