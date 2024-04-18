import { ScrollView, View, Text , TouchableOpacity, SafeAreaView , Image , StatusBar , TextInput , Modal , Button} from 'react-native'
import React, { useState } from 'react';
import Icons from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Icon1 from '@expo/vector-icons/MaterialIcons'
import Icon2 from '@expo/vector-icons/Entypo'
import AddImage from '../AddImage'
import * as ImagePicker from 'expo-image-picker';
import Icons1 from '@expo/vector-icons/Feather'


const Product = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };
    const [description, setDescription] = useState('');

  const handleChange = (text) => {
    setDescription(text);
  };
  const [image, setImage] = useState(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const deleteImage = () => {
    // Function to handle image deletion
    setImage(null);
    setShowDeleteIcon(false);
  };

  const [textInputList, setTextInputList] = useState([{ id: 1, value: 'Style1' }]);

  const addNewTextInput = () => {
    const newId = textInputList.length + 1;
    setTextInputList([...textInputList, { id: newId, value: '' }]);
  };

  const removeTextInput = (idToRemove) => {
    const updatedList = textInputList.filter((textInput) => textInput.id !== idToRemove);
    setTextInputList(updatedList);
  };

  const handleInputChange = (id, text) => {
    const updatedList = textInputList.map((textInput) => {
      if (textInput.id === id) {
        return { ...textInput, value: text };
      }
      return textInput;
    });
    setTextInputList(updatedList);
  };
  return (
    
        <ScrollView style={[{backgroundColor:'white'}]}>
        <View style={[{  height:'100%' }]}>
            <Modal  
              transparent={true}
              visible={modalVisible}
              onRequestClose={closeModal}
            >
                <View style={[{backgroundColor:'#000000aa', flex:1 ,}]}>
                    <View style={[{ backgroundColor:'white' , margin:40, height:450, padding:8 , borderRadius:15 , marginTop:170, gap:10}]}>
                        <Text style={[{paddingHorizontal:10, paddingVertical:5, fontSize:15, fontWeight:500}]}>Add Item</Text>
                        <View style={[{paddingLeft:10, marginBottom:10, borderWidth:1, borderRadius:5,borderStyle: 'dashed', borderColor:'#9747FF',borderTopColor:'white', padding:17, gap:20}]}>
                            <TextInput
                            style={[{height:40 , width:'auto', borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12}]}
                            placeholder='Colour1'
                            />
                            <TextInput
                            style={[{height:40 , width:'auto', borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12}]}
                            placeholder='Minimum Order'
                            />
                            <TextInput
                            style={[{height:40 , width:'auto', borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12}]}
                            placeholder='Sizes'
                            />
                            <TextInput
                            style={[{height:40 , width:'auto', borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12}]}
                            placeholder='Art No.'
                            />
                            <TextInput
                            style={[{height:40 , width:'auto', borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5, fontSize:12}]}
                            placeholder='Prices'
                            />
                        

                        </View>
                        <View style={[{display:'flex', alignItems:'center', justifyContent:'space-around', flexDirection:'row'}]}>
                        <TouchableOpacity style={[{ backgroundColor: "#00060C" ,width:120, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
                            <Text style={[{ color: "white" , fontSize: 15
                             , fontFamily: 'poppins' , fontWeight:600 }]}>Save</Text>
                            <Icon1 name='check' size={26} color='white'></Icon1>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={[{ backgroundColor: "#00060C" ,width:120, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
                            <Text style={[{ color: "white" , fontSize: 15
                             , fontFamily: 'poppins' , fontWeight:600 }]}>Cancel</Text>
                            <Icon2 name='cross' size={26} color='white'></Icon2>

                        </TouchableOpacity>
                            
                        
                        </View>

                    </View>
                

                </View>
                
            </Modal>
            <Text style={[{fontSize:12 , fontWeight:500 , padding: 15 , paddingLeft:55,}]}> 
                     Add Images
                </Text>
            <View style={[{display:'flex',flexDirection: 'column', alignItems:'center', justifyContent:'center'}]}>
                
                <View style={[{ gap:15 }]}>
                    <View style={[{display:'flex' , flexDirection:'row', gap:20}]}>
                    <TouchableOpacity
      onPress={pickImage}
      style={{
        height: 130,
        width: 130,
        backgroundColor: '#e7e7e7',
        borderRadius: 11,
        position: 'relative',
      }}
    >
      {image ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 11 }} />
          <TouchableOpacity
            onPress={deleteImage}
            style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }}
          >
            <Icons1 name="trash-2" size={24} color="#e7e7e7" />
          </TouchableOpacity>
        </View>
      ) : (
        <Icons1 style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }} name="plus" size={32} color="#777777" />
      )}
    </TouchableOpacity>
    <TouchableOpacity
      onPress={pickImage}
      style={{
        height: 130,
        width: 130,
        backgroundColor: '#e7e7e7',
        borderRadius: 11,
        position: 'relative',
      }}
    >
      {image ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 11 }} />
          <TouchableOpacity
            onPress={deleteImage}
            style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }}
          >
            <Icons1 name="trash-2" size={24} color="#e7e7e7" />
          </TouchableOpacity>
        </View>
      ) : (
        <Icons1 style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }} name="plus" size={32} color="#777777" />
      )}
    </TouchableOpacity>
                    
                       
                    </View>
                    <View style={[{display:'flex' , flexDirection:'row', gap:20}]}>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={[{ height: 130, width: 130, backgroundColor: '#e7e7e7', borderRadius: 11, position: 'relative' }]}
                     >
                    {image ? (
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 11 }} />
                        <TouchableOpacity
                            onPress={deleteImage}
                            style={{position: 'absolute',top: '50%',left: '50%',marginTop: -16,marginLeft: -16,}}
                        >
                            <Icons1 name="trash-2" size={24} color="#e7e7e7" />
                       </TouchableOpacity>
                    </View>
                        ) : (
                        <Icons style={{position: 'absolute',top: '50%',left: '50%',marginTop: -16,marginLeft: -16,}} name="plus" size={32} color="#777777" />
                        )}
                       </TouchableOpacity>
                       <TouchableOpacity
                        onPress={pickImage}
                        style={[{ height: 130, width: 130, backgroundColor: '#e7e7e7', borderRadius: 11, position: 'relative' }]}
                     >
                    {image ? (
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 11 }} />
                        <TouchableOpacity
                            onPress={deleteImage}
                            style={{position: 'absolute',top: '50%',left: '50%',marginTop: -16,marginLeft: -16,}}
                        >
                            <Icons1 name="trash-2" size={24} color="#e7e7e7" />
                       </TouchableOpacity>
                    </View>
                        ) : (
                        <Icons style={{position: 'absolute',top: '50%',left: '50%',marginTop: -16,marginLeft: -16,}} name="plus" size={32} color="#777777" />
                        )}
                       </TouchableOpacity>

                    </View>
                    
                    
                </View>
                <View style={[{gap:10 , paddingVertical:15 }]}>
                    <View style={[{}]}>
                        <TextInput
                        style={[{height:40 , width:320, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5,}]}
                        placeholder='Product Name'
                        />
                    </View>
                    <View style={[{}]}>
                        <TextInput
                            style={[{minHeight:100, borderWidth:0.8 , padding:10 , borderRadius:5 , backgroundColor: 'white'}]}
                            multiline={true}
                            numberOfLines={6} // Adjust as needed
                            placeholder="Enter description..."
                            onChangeText={handleChange}
                            value={description}
                         />
                    </View>
                    <View style={[{display:'flex', flexDirection: 'column', justifyContent:'space-between',}]}>
                      {textInputList.map((textInput, index) => (
                        <View style={{flexDirection:'row' , display:'flex', gap:15, alignItems: 'center', justifyContent: 'space-between' , paddingVertical:10}}>
                          <View  key={textInput.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, width: 250, borderWidth: 0.8, fontSize: 10, padding: 10, backgroundColor: 'white', borderRadius: 5,}}>
                            <TextInput 
                            placeholder={`Style${textInput.id}`}
                            onFocus={() => setModalVisible(false)}
                            
                            style={{ flex: 1 }}
                            />
                            <TouchableOpacity onPress={() => removeTextInput(textInput.id)}>
                              <Image source={require('../../assets/delete.png')} style={{ width: 30, height: 25, resizeMode: 'contain', marginRight: 10 }} />
                            </TouchableOpacity>
                          </View>
                          {index === textInputList.length - 1 && (
                            <TouchableOpacity  onPress={addNewTextInput}>
                              <Ionicons name='add-circle-outline' size={26} color='#20b038' />
                            </TouchableOpacity>
                          )}
                        </View>
                      ))}
                    
                    </View>
                    <View style={[{display:'flex', alignItems:'center',justifyContent:'center'}]}>
                        <TouchableOpacity onPress={() => navigation.navigate('ListedProducts')} style={[{ backgroundColor: "#0b233c" ,width:100, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
                            <Text style={[{ color: "white" , fontSize: 15
                             , fontFamily: 'poppins' , fontWeight:600 }]}>Save</Text>
                            <Icon1 name='check' size={26} color='#ff8e00'></Icon1>

                        </TouchableOpacity>
                       
                    </View>
                    
                    
                </View>
                

            </View>
       

        </View>
        </ScrollView>
    
  )
}

export default Product